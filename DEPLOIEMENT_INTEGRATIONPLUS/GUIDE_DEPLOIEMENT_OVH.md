# 🚀 GUIDE DE DÉPLOIEMENT SUR INTEGRATIONPLUS.EU

## 📦 FICHIERS À UPLOADER SUR VOTRE SERVEUR OVH

### **Structure des fichiers à déployer:**

```
integrationplus.eu/
├── index.html (existant - à modifier)
├── confirmation-essentiel.html (NOUVEAU)
├── confirmation-premium.html (NOUVEAU)
├── confirmation-excellence.html (NOUVEAU)
├── admin/
│   └── dashboard.html (NOUVEAU)
├── membre/
│   └── acces.html (NOUVEAU - remplace l'ancien)
├── demo/
│   └── index.html (existant - à modifier pour ajouter popup)
└── ... (autres fichiers existants)
```

---

## 📝 ÉTAPE PAR ÉTAPE

### **1. Connexion à votre hébergement OVH**

Via FTP (FileZilla, Cyberduck) ou le gestionnaire de fichiers OVH:
- **Hôte:** ftp.integrationplus.eu
- **Utilisateur:** Votre identifiant OVH
- **Mot de passe:** Votre mot de passe FTP

### **2. Uploader les nouveaux fichiers**

#### **A. Pages de confirmation (3 fichiers)**

Uploadez ces fichiers à la racine du site:
```
/app/frontend/public/confirmation-essentiel.html → /confirmation-essentiel.html
/app/frontend/public/confirmation-premium.html → /confirmation-premium.html  
/app/frontend/public/confirmation-excellence.html → /confirmation-excellence.html
```

#### **B. Page d'accès membre (1 fichier)**

Remplacez le fichier existant:
```
/app/frontend/public/membre/acces.html → /membre/acces.html
```
⚠️ **IMPORTANT:** Sauvegardez votre ancien fichier avant de le remplacer!

#### **C. Dashboard admin (1 fichier)**

Créez le dossier `/admin/` s'il n'existe pas, puis uploadez:
```
/app/frontend/public/admin/dashboard.html → /admin/dashboard.html
```

#### **D. Popup de conversion pour la demo**

**Option 1: Intégration manuelle (recommandé)**
1. Ouvrez votre fichier `/demo/index.html` existant
2. Copiez le contenu de `/app/frontend/public/demo/conversion-popup.html`
3. Collez-le juste avant la balise `</body>` de votre demo/index.html
4. Sauvegardez

**Option 2: Remplacement complet**
Si vous n'avez pas modifié votre demo, remplacez tout le fichier.

---

### **3. Modifier index.html pour les liens PayPal**

Ouvrez votre `index.html` principal et trouvez la section des tarifs (vers la ligne 189-228).

**REMPLACEZ les 3 liens PayPal par:**

```html
<!-- Formule Essentiel -->
<a href="https://paypal.me/integrationplus/49?return=https://integrationplus.eu/confirmation-essentiel.html" 
   class="btn btn-tarif" target="_blank" rel="noopener">
  Payer 49€ – Accès immédiat
</a>

<!-- Formule Premium -->
<a href="https://paypal.me/integrationplus/79?return=https://integrationplus.eu/confirmation-premium.html" 
   class="btn btn-tarif" target="_blank" rel="noopener">
  Payer 79€ – Accès immédiat
</a>

<!-- Formule Excellence -->
<a href="https://paypal.me/integrationplus/149?return=https://integrationplus.eu/confirmation-excellence.html" 
   class="btn btn-tarif" target="_blank" rel="noopener">
  Payer 149€ – Accès immédiat
</a>
```

---

## ✅ TESTS APRÈS DÉPLOIEMENT

### **Test 1: Pages de confirmation**

Visitez directement (sans payer):
```
https://integrationplus.eu/confirmation-essentiel.html
```

**Résultat attendu:**
- Une popup demande votre email
- Un code ESS-2026-XXXXX est généré
- La page affiche le code et la validité
- Bouton "Copier le code" fonctionne

### **Test 2: Vérification de code**

1. Visitez: `https://integrationplus.eu/membre/acces.html`
2. Entrez le code généré au test 1
3. Cliquez "Accéder"

**Résultat attendu:**
- Redirection vers l'espace membre Essentiel
- Aucune erreur

### **Test 3: Dashboard admin**

Visitez:
```
https://integrationplus.eu/admin/dashboard.html
```

**Résultat attendu:**
- Statistiques affichées
- Liste des codes générés
- Le code du test 1 apparaît dans la liste

### **Test 4: Code admin**

1. Visitez: `https://integrationplus.eu/membre/acces.html`
2. Entrez: `ADMIN-2026-MASTER`
3. Cliquez "Accéder"

**Résultat attendu:**
- Redirection vers l'espace Excellence
- Accès administrateur confirmé

### **Test 5: Popup demo**

1. Visitez: `https://integrationplus.eu/demo/`
2. Faites quelques questions du test
3. Terminez le test

**Résultat attendu:**
- Popup apparaît après 2 secondes
- Affiche votre score
- Propose les 3 formules

---

## 🔧 CONFIGURATION BACKEND

Le backend tourne actuellement sur:
```
https://expert-web-tuner.preview.emergentagent.com/api
```

### **Pour un backend permanent sur votre domaine:**

**Option 1: Hébergement séparé (Recommandé)**
- Hébergez le backend sur un service comme:
  - Railway.app (gratuit)
  - Render.com (gratuit)
  - DigitalOcean (5$/mois)

**Option 2: Sur OVH (Si vous avez un VPS)**
- Installez Python, MongoDB
- Déployez le code backend
- Configurez Nginx comme reverse proxy

**Option 3: Continuer avec le backend actuel**
- Le backend actuel est fonctionnel
- Limité à la durée de vie de cet environnement
- Recommandé de migrer vers une solution permanente

---

## 📧 CONFIGURATION EMAIL

### **Actuellement:**
⚠️ L'envoi automatique d'emails ne fonctionne pas (Outlook bloque)

### **Solution recommandée: SendGrid**

1. **Créer un compte SendGrid:**
   - Visitez: https://sendgrid.com
   - Inscription gratuite (100 emails/jour)
   - Obtenez votre clé API

2. **Informez-moi de votre clé API:**
   - Je modifierai le backend pour utiliser SendGrid
   - Les emails seront envoyés automatiquement

3. **Configuration DNS (pour domaine vérifié):**
   - SendGrid vous donnera des enregistrements DNS
   - Ajoutez-les dans votre zone DNS OVH
   - Améliore la délivrabilité des emails

### **En attendant:**
✅ Utilisez le dashboard admin (`/admin/dashboard.html`) pour:
- Voir tous les codes générés
- Copier les codes
- Les envoyer manuellement par email

---

## 🔐 SÉCURITÉ RECOMMANDÉE

### **1. Protéger le dashboard admin**

Ajoutez un fichier `.htaccess` dans le dossier `/admin/`:

```apache
AuthType Basic
AuthName "Zone Admin"
AuthUserFile /home/votre-user/.htpasswd
Require valid-user
```

Créez le fichier `.htpasswd`:
```bash
htpasswd -c .htpasswd admin
```

### **2. Activer HTTPS**

Si pas déjà fait:
- OVH propose Let's Encrypt gratuit
- Activez-le dans votre panneau de contrôle
- Force HTTPS pour toutes les pages

### **3. Sauvegarder régulièrement**

- Dashboard admin vous permet d'exporter les données
- Sauvegardez les codes générés
- Backup de la base de données MongoDB

---

## 📊 WORKFLOW COMPLET APRÈS DÉPLOIEMENT

### **Pour un nouveau client:**

1. Client visite `integrationplus.eu`
2. Essaie la démo gratuite → Popup de conversion
3. Clique sur "Choisir Essentiel" (49€)
4. Paie sur PayPal
5. PayPal le redirige vers `confirmation-essentiel.html`
6. Page demande son email
7. Backend génère code ESS-2026-XXXXX
8. Code affiché à l'écran + stocké en BDD
9. Email envoyé ⚠️ (À activer avec SendGrid)
10. Client clique "Accéder à mon espace"
11. Entre son code sur `membre/acces.html`
12. Backend vérifie le code
13. Redirection vers son espace membre

### **Pour vous (admin):**

1. Visitez `integrationplus.eu/admin/dashboard.html`
2. Voyez les statistiques en temps réel
3. Liste complète des codes générés
4. Historique des paiements
5. Copiez les codes si besoin d'envoi manuel
6. Recevez une notification email ⚠️ (À activer)

---

## 🆘 DÉPANNAGE

### **Problème: "Erreur de connexion au serveur"**

**Cause:** Backend non accessible

**Solution:**
1. Vérifiez que le backend tourne
2. Testez l'URL: `https://expert-web-tuner.preview.emergentagent.com/api/`
3. Devrait retourner: `{"message":"Integration+ Backend API","status":"running"}`

### **Problème: "Code invalide" pour un code qui devrait marcher**

**Cause:** Code pas dans la base de données

**Solution:**
1. Vérifiez dans le dashboard admin
2. Le code doit apparaître dans la liste
3. Si absent, le générer à nouveau

### **Problème: Popup ne s'affiche pas sur la demo**

**Cause:** Code du popup mal intégré

**Solution:**
1. Vérifiez que le code est bien avant `</body>`
2. Ouvrez la console navigateur (F12)
3. Cherchez les erreurs JavaScript

### **Problème: Emails non reçus**

**Cause:** Configuration SMTP Outlook bloquée

**Solution:**
1. Utilisez le dashboard admin pour copier les codes
2. Envoyez manuellement
3. Ou configurez SendGrid (recommandé)

---

## 📞 SUPPORT

Pour toute question ou problème:
- **Email:** plumeprestige@outlook.fr
- **Dashboard:** https://integrationplus.eu/admin/dashboard.html
- **API Status:** https://expert-web-tuner.preview.emergentagent.com/api/

---

## ✅ CHECKLIST DE DÉPLOIEMENT

- [ ] Fichiers uploadés sur OVH
- [ ] index.html modifié (liens PayPal)
- [ ] Test confirmation Essentiel
- [ ] Test confirmation Premium  
- [ ] Test confirmation Excellence
- [ ] Test accès membre avec code
- [ ] Test code admin MASTER
- [ ] Test dashboard admin
- [ ] Test popup demo
- [ ] Configuration email (SendGrid)
- [ ] Protection dashboard admin
- [ ] HTTPS activé
- [ ] Backup initial effectué

---

## 🎉 PRÊT POUR LA PRODUCTION!

Une fois tous les tests validés, votre système est opérationnel et prêt à recevoir des clients!

**Félicitations! 🚀**

---

**Date de création:** 23 janvier 2026  
**Version:** 1.0  
**Développé pour:** Integration+ (Hakima Saddiki)
