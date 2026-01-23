from fastapi import FastAPI, APIRouter, HTTPException, Request, BackgroundTasks
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import random
import string
import hashlib
import hmac

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
codes_collection = db.codes_acces
payments_collection = db.paiements
clients_collection = db.clients

# Create the main app
app = FastAPI(title="Integration+ Backend")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ========== MODELS ==========

class CodeAcces(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    code: str
    formule: str  # essentiel, premium, excellence
    prefix: str   # ESS, PRE, EXC
    email_client: str
    date_creation: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    date_expiration: datetime
    is_active: bool = True
    payment_id: Optional[str] = None

class Paiement(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    payment_id: str  # PayPal transaction ID
    email_client: str
    montant: float
    formule: str
    code_genere: str
    date_paiement: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    statut: str = "completed"

class Client(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    nom: Optional[str] = None
    formule: str
    codes: List[str] = []
    date_inscription: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class PayPalWebhook(BaseModel):
    payment_id: str
    payer_email: str
    amount: float
    currency: str
    formule: str

class VerifyCodeRequest(BaseModel):
    code: str

class GenerateCodeRequest(BaseModel):
    email: EmailStr
    formule: str

# ========== EMAIL SERVICE ==========

class EmailService:
    def __init__(self):
        self.smtp_server = "smtp-mail.outlook.com"
        self.smtp_port = 587
        self.email = os.getenv("ADMIN_EMAIL", "plumeprestige@outlook.fr")
        self.password = os.getenv("EMAIL_PASSWORD", "edqfquekznozqsvw")
        self.admin_email = os.getenv("ADMIN_EMAIL", "plumeprestige@outlook.fr")
    
    def send_email(self, to_email: str, subject: str, html_content: str) -> bool:
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = self.email
            msg['To'] = to_email
            msg['Subject'] = subject
            
            html_part = MIMEText(html_content, 'html')
            msg.attach(html_part)
            
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.email, self.password)
                server.send_message(msg)
            
            logger.info(f"Email envoyé avec succès à {to_email}")
            return True
        except Exception as e:
            logger.error(f"Erreur lors de l'envoi de l'email à {to_email}: {str(e)}")
            return False
    
    def send_code_to_client(self, email: str, code: str, formule: str, date_expiration: datetime) -> bool:
        formule_names = {
            "essentiel": "Essentiel - 49€",
            "premium": "Premium - 79€",
            "excellence": "Excellence - 149€"
        }
        
        formule_name = formule_names.get(formule, formule)
        expiration_str = date_expiration.strftime("%d %B %Y")
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                .content {{ background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }}
                .code-box {{ background: white; border: 3px dashed #667eea; padding: 20px; text-align: center; margin: 20px 0; border-radius: 10px; }}
                .code {{ font-size: 28px; font-weight: bold; color: #667eea; letter-spacing: 3px; font-family: 'Courier New', monospace; }}
                .button {{ background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }}
                .footer {{ text-align: center; margin-top: 30px; color: #666; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 Bienvenue chez Integration+!</h1>
                    <p>Votre paiement a été confirmé</p>
                </div>
                <div class="content">
                    <p>Bonjour,</p>
                    <p>Merci pour votre achat de la <strong>{formule_name}</strong>!</p>
                    
                    <div class="code-box">
                        <p style="margin: 0; color: #666; font-size: 14px;">VOTRE CODE D'ACCÈS PERSONNEL</p>
                        <p class="code">{code}</p>
                        <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">Valide jusqu'au {expiration_str}</p>
                    </div>
                    
                    <h3>📋 Comment accéder à votre espace :</h3>
                    <ol>
                        <li>Rendez-vous sur <a href="https://integrationplus.eu">integrationplus.eu</a></li>
                        <li>Cliquez sur "Espace Membre"</li>
                        <li>Entrez votre code d'accès ci-dessus</li>
                        <li>Commencez votre préparation ! 🎯</li>
                    </ol>
                    
                    <center>
                        <a href="https://integrationplus.eu/membre/acces.html" class="button">Accéder à mon espace</a>
                    </center>
                    
                    <p><strong>⚠️ Important :</strong> Conservez ce code précieusement. Il est personnel et confidentiel.</p>
                    
                    <p>Besoin d'aide ? Répondez à cet email ou contactez-nous à <a href="mailto:plumeprestige@outlook.fr">plumeprestige@outlook.fr</a></p>
                </div>
                <div class="footer">
                    <p>© 2026 Integration+ - Tous droits réservés</p>
                    <p>Vous recevez cet email car vous avez acheté une formule sur integrationplus.eu</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        subject = f"🎉 Votre code d'accès Integration+ - Formule {formule.capitalize()}"
        return self.send_email(email, subject, html_content)
    
    def send_admin_notification(self, email_client: str, formule: str, montant: float, code: str) -> bool:
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: #10b981; color: white; padding: 20px; text-align: center; }}
                .content {{ background: #f9f9f9; padding: 20px; }}
                .info-box {{ background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #667eea; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>💰 Nouveau Paiement Reçu!</h2>
                </div>
                <div class="content">
                    <p><strong>Un nouveau client vient d'acheter une formule sur Integration+</strong></p>
                    
                    <div class="info-box">
                        <p><strong>📧 Email client:</strong> {email_client}</p>
                        <p><strong>💳 Formule:</strong> {formule.capitalize()}</p>
                        <p><strong>💰 Montant:</strong> {montant}€</p>
                        <p><strong>🔑 Code généré:</strong> {code}</p>
                        <p><strong>⏰ Date:</strong> {datetime.now(timezone.utc).strftime('%d/%m/%Y %H:%M')}</p>
                    </div>
                    
                    <p>Le code a été automatiquement envoyé au client par email.</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        subject = f"💰 Nouveau paiement - {formule.capitalize()} - {montant}€"
        return self.send_email(self.admin_email, subject, html_content)

email_service = EmailService()

# ========== HELPER FUNCTIONS ==========

def generate_unique_code(prefix: str) -> str:
    """Génère un code unique au format PREFIX-YEAR-XXXXXX"""
    year = datetime.now().year
    chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    random_code = ''.join(random.choices(chars, k=6))
    return f"{prefix}-{year}-{random_code}"

def get_formule_config(formule: str) -> dict:
    """Retourne la configuration pour une formule"""
    configs = {
        "essentiel": {"prefix": "ESS", "montant": 49, "validite_jours": 365},
        "premium": {"prefix": "PRE", "montant": 79, "validite_jours": 730},
        "excellence": {"prefix": "EXC", "montant": 149, "validite_jours": 730}
    }
    return configs.get(formule.lower(), configs["essentiel"])

def calculate_expiration_date(formule: str) -> datetime:
    """Calcule la date d'expiration selon la formule"""
    config = get_formule_config(formule)
    return datetime.now(timezone.utc) + timedelta(days=config["validite_jours"])

# ========== API ENDPOINTS ==========

@api_router.get("/")
async def root():
    return {"message": "Integration+ Backend API", "status": "running"}

@api_router.post("/generate-code")
async def generate_code(request: GenerateCodeRequest, background_tasks: BackgroundTasks):
    """
    Génère un code d'accès et l'envoie par email
    Utilisé par les pages de confirmation après paiement PayPal
    """
    try:
        formule = request.formule.lower()
        email = request.email.lower()
        
        config = get_formule_config(formule)
        code = generate_unique_code(config["prefix"])
        date_expiration = calculate_expiration_date(formule)
        
        # Créer l'objet code
        code_obj = CodeAcces(
            code=code,
            formule=formule,
            prefix=config["prefix"],
            email_client=email,
            date_expiration=date_expiration
        )
        
        # Sauvegarder dans MongoDB
        code_dict = code_obj.model_dump()
        code_dict['date_creation'] = code_dict['date_creation'].isoformat()
        code_dict['date_expiration'] = code_dict['date_expiration'].isoformat()
        await codes_collection.insert_one(code_dict)
        
        # Envoyer les emails en arrière-plan
        background_tasks.add_task(email_service.send_code_to_client, email, code, formule, date_expiration)
        background_tasks.add_task(email_service.send_admin_notification, email, formule, config["montant"], code)
        
        logger.info(f"Code généré: {code} pour {email} - Formule {formule}")
        
        return {
            "success": True,
            "code": code,
            "formule": formule,
            "date_expiration": date_expiration.isoformat(),
            "message": "Code généré et envoyé par email"
        }
    
    except Exception as e:
        logger.error(f"Erreur génération code: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/verify-code")
async def verify_code(request: VerifyCodeRequest):
    """
    Vérifie si un code d'accès est valide
    Utilisé par la page de connexion membre
    """
    try:
        code = request.code.strip().upper()
        
        # Code admin master
        if code == "ADMIN-2026-MASTER":
            return {
                "valid": True,
                "formule": "excellence",
                "is_admin": True,
                "message": "Accès administrateur"
            }
        
        # Chercher dans la base de données
        code_doc = await codes_collection.find_one({"code": code})
        
        if not code_doc:
            return {
                "valid": False,
                "message": "Code invalide. Vérifiez votre code ou contactez le support."
            }
        
        # Vérifier l'expiration
        date_expiration = datetime.fromisoformat(code_doc['date_expiration'])
        if datetime.now(timezone.utc) > date_expiration:
            expiration_str = date_expiration.strftime("%d %B %Y")
            return {
                "valid": False,
                "expired": True,
                "message": f"Code expiré le {expiration_str}. Contactez-nous pour renouveler."
            }
        
        # Code valide
        return {
            "valid": True,
            "formule": code_doc['formule'],
            "date_expiration": code_doc['date_expiration'],
            "message": "Code valide"
        }
    
    except Exception as e:
        logger.error(f"Erreur vérification code: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/paypal-webhook")
async def paypal_webhook(request: Request, background_tasks: BackgroundTasks):
    """
    Endpoint pour recevoir les notifications PayPal IPN
    """
    try:
        form_data = await request.form()
        logger.info(f"PayPal IPN reçu: {dict(form_data)}")
        
        # Extraire les données PayPal
        payment_status = form_data.get('payment_status')
        payer_email = form_data.get('payer_email')
        mc_gross = form_data.get('mc_gross')
        txn_id = form_data.get('txn_id')
        
        # Vérifier que le paiement est complété
        if payment_status != 'Completed':
            return {"status": "ignored", "reason": "Payment not completed"}
        
        # Déterminer la formule selon le montant
        amount = float(mc_gross)
        if amount == 49:
            formule = "essentiel"
        elif amount == 79:
            formule = "premium"
        elif amount == 149:
            formule = "excellence"
        else:
            logger.warning(f"Montant non reconnu: {amount}")
            return {"status": "error", "reason": "Invalid amount"}
        
        # Générer le code
        config = get_formule_config(formule)
        code = generate_unique_code(config["prefix"])
        date_expiration = calculate_expiration_date(formule)
        
        # Sauvegarder le code
        code_obj = CodeAcces(
            code=code,
            formule=formule,
            prefix=config["prefix"],
            email_client=payer_email,
            date_expiration=date_expiration,
            payment_id=txn_id
        )
        
        code_dict = code_obj.model_dump()
        code_dict['date_creation'] = code_dict['date_creation'].isoformat()
        code_dict['date_expiration'] = code_dict['date_expiration'].isoformat()
        await codes_collection.insert_one(code_dict)
        
        # Sauvegarder le paiement
        payment_obj = Paiement(
            payment_id=txn_id,
            email_client=payer_email,
            montant=amount,
            formule=formule,
            code_genere=code
        )
        
        payment_dict = payment_obj.model_dump()
        payment_dict['date_paiement'] = payment_dict['date_paiement'].isoformat()
        await payments_collection.insert_one(payment_dict)
        
        # Envoyer les emails
        background_tasks.add_task(email_service.send_code_to_client, payer_email, code, formule, date_expiration)
        background_tasks.add_task(email_service.send_admin_notification, payer_email, formule, amount, code)
        
        logger.info(f"Code généré via PayPal IPN: {code} pour {payer_email}")
        
        return {"status": "success", "code": code}
    
    except Exception as e:
        logger.error(f"Erreur PayPal webhook: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/admin/dashboard")
async def admin_dashboard():
    """
    Dashboard admin - statistiques et liste des paiements
    """
    try:
        # Compter les codes par formule
        total_codes = await codes_collection.count_documents({})
        essentiel_count = await codes_collection.count_documents({"formule": "essentiel"})
        premium_count = await codes_collection.count_documents({"formule": "premium"})
        excellence_count = await codes_collection.count_documents({"formule": "excellence"})
        
        # Derniers paiements
        payments_cursor = payments_collection.find({}).sort("date_paiement", -1).limit(20)
        payments = await payments_cursor.to_list(length=20)
        
        # Convertir les dates pour JSON
        for payment in payments:
            if '_id' in payment:
                del payment['_id']
            if isinstance(payment.get('date_paiement'), str):
                payment['date_paiement'] = payment['date_paiement']
        
        # Calculer le revenu total
        all_payments = await payments_collection.find({}).to_list(length=None)
        total_revenue = sum(p['montant'] for p in all_payments)
        
        return {
            "stats": {
                "total_codes": total_codes,
                "essentiel": essentiel_count,
                "premium": premium_count,
                "excellence": excellence_count,
                "total_revenue": total_revenue
            },
            "recent_payments": payments
        }
    
    except Exception as e:
        logger.error(f"Erreur dashboard: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/admin/codes")
async def list_codes(limit: int = 50):
    """
    Liste tous les codes générés
    """
    try:
        codes_cursor = codes_collection.find({}).sort("date_creation", -1).limit(limit)
        codes = await codes_cursor.to_list(length=limit)
        
        for code in codes:
            if '_id' in code:
                del code['_id']
        
        return {"codes": codes, "count": len(codes)}
    
    except Exception as e:
        logger.error(f"Erreur liste codes: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
