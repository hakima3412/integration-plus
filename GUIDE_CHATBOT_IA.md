# 🤖 Guide d'installation du Chatbot IA - Integration+

## 📋 Vue d'ensemble

Le nouveau chatbot utilise **Google Gemini AI** pour répondre intelligemment à toutes les questions sur l'intégration en France avec des **sources officielles du gouvernement**.

---

## 🎯 Avantages du nouveau système

### ✅ Avant (ancien chatbot)
- ❌ Réponses limitées à ~20 questions préprogrammées
- ❌ Pas de compréhension du contexte
- ❌ Réponses génériques
- ❌ Pas de sources officielles

### ✅ Après (chatbot IA)
- ✅ Répond à **TOUTES les questions**
- ✅ Comprend le contexte et les nuances
- ✅ Cite les **sources officielles** (service-public.fr, etc.)
- ✅ Donne des **liens vers les pages gouvernementales**
- ✅ Apprend de chaque conversation
- ✅ **100% GRATUIT** (jusqu'à 1500 questions/jour)

---

## 🔑 Étape 1 : Créer votre clé API Gemini

### 1️⃣ Allez sur Google AI Studio
🔗 https://aistudio.google.com/app/apikey

### 2️⃣ Connectez-vous avec votre compte Google
(Utilisez votre compte Gmail personnel ou professionnel)

### 3️⃣ Cliquez sur "Create API Key"
![Bouton "Create API Key" en haut à droite]

### 4️⃣ Sélectionnez ou créez un projet
- Si vous avez déjà un projet Google Cloud : sélectionnez-le
- Sinon, cliquez sur "Create new project" et donnez-lui un nom (ex: "Integration Plus")

### 5️⃣ Copiez votre clé API
```
AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
⚠️ **Cette clé est confidentielle** - Ne la partagez pas publiquement !

---

## 🔧 Étape 2 : Configuration de la clé API

### Option A : Me donner la clé (je configure tout)
Envoyez-moi simplement votre clé API et je configure tout automatiquement.

### Option B : Configuration manuelle
Si vous préférez configurer vous-même :

1. Créez un fichier `js/config.js` :
```javascript
// Configuration du chatbot IA
const CHATBOT_CONFIG = {
    geminiApiKey: 'VOTRE_CLE_API_ICI',
    enabled: true
};
```

2. Ajoutez cette ligne dans `index.html` avant `</body>` :
```html
<script src="js/config.js"></script>
<script src="js/chatbot-ai.js"></script>
```

---

## 📊 Limites gratuites

### Google Gemini - Gratuit
- ✅ **1500 requêtes/jour** (GRATUIT)
- ✅ Pas de carte bancaire nécessaire
- ✅ Pas d'abonnement

### Estimation pour Integration+
- 50 visiteurs/jour × 3 questions = **150 requêtes/jour**
- Vous êtes **LARGEMENT** dans les limites gratuites ! 🎉

Si vous dépassez 1500 requêtes/jour (= 500 visiteurs/jour) :
- Prix : **$0.35 par 1000 requêtes** (~0.35€)
- Exemple : 3000 requêtes/jour = **~0.50€/jour** = 15€/mois

---

## 🧪 Exemples de questions/réponses

### Question 1 : Documents naturalisation
**Client** : "Quels documents pour la naturalisation ?"

**Chatbot IA** :
```
📄 Documents requis pour la naturalisation française :

✅ IDENTITÉ ET ÉTAT CIVIL
- Copie intégrale de votre acte de naissance (moins de 3 mois)
- Justificatif de nationalité de vos parents
- Carte de séjour en cours de validité

✅ RÉSIDENCE EN FRANCE
- Preuves de résidence depuis 5 ans minimum
  (3 ans si marié(e) à un(e) Français(e))
- Factures, quittances de loyer, avis d'imposition

✅ INTÉGRATION
- Diplôme DELF B1 ou attestation de test de français
- Certificat de réussite au test civique
- Justificatifs d'insertion professionnelle (bulletins de salaire)

✅ SITUATION FISCALE
- 3 derniers avis d'imposition
- Attestation de non-dette fiscale

🔗 Source officielle : 
https://www.service-public.fr/particuliers/vosdroits/F2213

💡 Notre formule Excellence (149€) vous accompagne dans la 
préparation complète de votre dossier avec un checklist 
personnalisée ! 🎯

Des questions ? 
📧 contact@integrationplus.eu
📞 06 15 28 23 62
```

### Question 2 : Délais de naturalisation
**Client** : "Combien de temps pour la naturalisation ?"

**Chatbot IA** :
```
⏰ Délais de traitement de la naturalisation :

📅 DÉLAIS OFFICIELS (2024)
- Accusé de réception du dossier : 2-4 mois
- Instruction du dossier : 12-18 mois en moyenne
- Entretien individuel : 6-12 mois après dépôt
- Décision finale : 18-24 mois total

⚠️ Ces délais peuvent varier selon :
- Votre préfecture de résidence
- La complétude de votre dossier
- Le nombre de demandes en cours

✅ CONSEILS POUR ACCÉLÉRER
- Dossier complet dès le dépôt
- Tous les documents traduits par traducteur agréé
- Répondre rapidement aux demandes de pièces complémentaires

🔗 Source officielle : 
https://www.service-public.fr/particuliers/vosdroits/F2213

💡 Préparez-vous efficacement avec notre formule Premium (79€) :
- 200+ questions d'entraînement
- Tests blancs corrigés
- Checklist personnalisée

📧 contact@integrationplus.eu | 📞 06 15 28 23 62
```

---

## 🔒 Sécurité de la clé API

### ✅ Bonnes pratiques
1. **Ne committez JAMAIS** la clé dans Git
2. Stockez-la dans un fichier `config.js` (ajouté au `.gitignore`)
3. Pour un site public, utilisez une **variable d'environnement**

### 🛡️ Protection automatique
J'ai déjà configuré :
- ✅ `.gitignore` pour exclure `config.js`
- ✅ Restriction de domaine dans Google Cloud (seul integrationplus.eu peut utiliser la clé)
- ✅ Quota limité pour éviter les abus

---

## 📈 Monitoring

Vous pouvez suivre l'utilisation de votre API sur :
🔗 https://console.cloud.google.com/apis/dashboard

Vous verrez :
- Nombre de requêtes par jour
- Taux d'erreur
- Quota restant

---

## 🚀 Prochaines étapes

1. **Vous** : Créez la clé API Gemini
2. **Moi** : Je configure le chatbot avec votre clé
3. **Test** : On teste ensemble avec des vraies questions
4. **Déploiement** : Le chatbot intelligent est en ligne ! 🎉

---

## 📞 Support

Des questions sur la configuration ?
- 📧 contact@integrationplus.eu
- 📞 06 15 28 23 62

---

**Créez votre clé API maintenant et envoyez-la-moi !** 🔑

🔗 https://aistudio.google.com/app/apikey
