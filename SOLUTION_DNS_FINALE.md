# 🔥 SOLUTION FINALE : Nettoyer complètement votre DNS OVH

## ❌ PROBLÈME ACTUEL

Votre domaine `integrationplus.eu` pointe vers de **mauvaises IPs** :
- ❌ 98.04.224.111 (ancien hébergement)
- ❌ 18.208.98.157 (ancien hébergement)
- ❌ 52.52.192.191 (ancien hébergement)

**Ces IPs ne sont PAS celles de GitHub Pages !**

---

## ✅ SOLUTION : Supprimer TOUT et recommencer

### 📋 ÉTAPE 1 : Se connecter à OVH

1. Ouvrez : https://manager.eu.ovhcloud.com/
2. Connectez-vous
3. Allez dans **Web Cloud** → **Noms de domaine** → **integrationplus.eu**
4. Cliquez sur l'onglet **Zone DNS**

---

### 📋 ÉTAPE 2 : SUPPRIMER TOUTES LES LIGNES "A"

**⚠️ IMPORTANT : Supprimez UNIQUEMENT les lignes de type "A" !**

Dans la Zone DNS, vous allez voir plusieurs lignes. Vous devez :

#### ✅ **SUPPRIMER** (icône poubelle 🗑️) :
- Toutes les lignes de type **"A"** qui ont pour cible :
  - `98.04.224.111`
  - `18.208.98.157`
  - `52.52.192.191`
  - `188.165.53.185` (si présente)
  - Toute autre IP qui n'est **PAS** `185.199.xxx.xxx`

#### ❌ **NE PAS SUPPRIMER** :
- Les lignes **NS** (dns110.ovh.net, ns110.ovh.net)
- Les lignes **MX** (mx1.mail.ovh.net, etc.)
- Les lignes **TXT** (si présentes)
- Les lignes **SPF** (si présentes)
- Les lignes **SRV** (si présentes)
- Le **CNAME** pour `ftp` (si présent)

---

### 📋 ÉTAPE 3 : AJOUTER LES 5 NOUVELLES LIGNES GITHUB PAGES

#### 🔹 **Ligne 1 : A Record (1/4)**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :
   - **Sous-domaine** : Laissez **VIDE** (ou mettez juste `.`)
   - **TTL** : Laissez **par défaut** (3600)
   - **Cible** : `185.199.108.153`
4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### 🔹 **Ligne 2 : A Record (2/4)**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :
   - **Sous-domaine** : Laissez **VIDE**
   - **TTL** : Laissez **par défaut**
   - **Cible** : `185.199.109.153`
4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### 🔹 **Ligne 3 : A Record (3/4)**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :
   - **Sous-domaine** : Laissez **VIDE**
   - **TTL** : Laissez **par défaut**
   - **Cible** : `185.199.110.153`
4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### 🔹 **Ligne 4 : A Record (4/4)**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :
   - **Sous-domaine** : Laissez **VIDE**
   - **TTL** : Laissez **par défaut**
   - **Cible** : `185.199.111.153`
4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### 🔹 **Ligne 5 : CNAME pour www**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"CNAME"**
3. Remplissez :
   - **Sous-domaine** : `www`
   - **TTL** : Laissez **par défaut**
   - **Cible** : `hakima3412.github.io.`  
     ⚠️ **N'OUBLIEZ PAS LE POINT À LA FIN !**
4. Cliquez sur **"Suivant"** puis **"Valider"**

---

### 📋 ÉTAPE 4 : VÉRIFIER QUE TOUT EST CORRECT

Après avoir ajouté les 5 lignes, **scrollez dans votre Zone DNS** et vérifiez que vous voyez :

#### ✅ **CE QUE VOUS DEVEZ VOIR** :

| Type | Sous-domaine | Cible |
|------|-------------|-------|
| **A** | *(vide ou `.`)* | `185.199.108.153` |
| **A** | *(vide ou `.`)* | `185.199.109.153` |
| **A** | *(vide ou `.`)* | `185.199.110.153` |
| **A** | *(vide ou `.`)* | `185.199.111.153` |
| **CNAME** | `www` | `hakima3412.github.io.` |
| **NS** | *(vide)* | `dns110.ovh.net.` |
| **NS** | *(vide)* | `ns110.ovh.net.` |
| **MX** | *(vide)* | `1 mx1.mail.ovh.net.` |
| **MX** | *(vide)* | `5 mx2.mail.ovh.net.` |
| **MX** | *(vide)* | `100 mx3.mail.ovh.net.` |

**⚠️ Vous NE devez PAS voir** :
- ❌ Des enregistrements **A** avec d'autres IPs
- ❌ Des IPs comme `98.04.x.x`, `18.208.x.x`, `52.52.x.x`, `188.165.x.x`

---

### 📋 ÉTAPE 5 : PRENDRE UN SCREENSHOT ET M'ENVOYER

**Une fois que vous avez fait les 4 étapes ci-dessus** :

1. Prenez **UN SEUL SCREENSHOT** qui montre **TOUTE la Zone DNS**
2. Assurez-vous qu'on voit bien :
   - Les **4 lignes A** avec les IPs `185.199.xxx.xxx`
   - La ligne **CNAME** pour `www`
   - Les lignes **NS** et **MX** (qui doivent être conservées)

3. **Envoyez-moi ce screenshot**

---

## ⏰ APRÈS AVOIR AJOUTÉ LES 5 LIGNES

### 🔹 **Attendre la propagation DNS**

- **Minimum** : 2 heures
- **Maximum** : 24 heures
- **En moyenne** : 4 à 6 heures

**Pendant ce temps, NE TOUCHEZ PLUS À RIEN !** ✋

---

### 🔹 **Forcer la re-vérification DNS sur GitHub Pages**

1. Ouvrez : https://github.com/hakima3412/integration-plus/settings/pages
2. Dans la section **"Custom domain"** :
   - Cliquez sur **"Remove"** pour enlever `integrationplus.eu`
   - Attendez **30 secondes**
   - Re-tapez `integrationplus.eu` dans le champ
   - Cliquez sur **"Save"**
3. Attendez **2 à 5 minutes**
4. Rafraîchissez la page (F5)
5. Vous devriez voir : **"DNS check successful"** ✅

---

### 🔹 **Activer HTTPS**

Une fois que vous voyez **"DNS check successful"** :

1. Cochez la case **"Enforce HTTPS"**
2. Attendez **5 à 10 minutes**
3. Le certificat SSL sera généré automatiquement

---

## 🧪 TESTS FINAUX

### ✅ **Test 1 : DNS Checker**

1. Ouvrez : https://dnschecker.org/
2. Tapez : `integrationplus.eu`
3. Type : **A**
4. Cliquez sur **"Search"**

**Vous DEVEZ voir les 4 IPs suivantes** :
- ✅ `185.199.108.153`
- ✅ `185.199.109.153`
- ✅ `185.199.110.153`
- ✅ `185.199.111.153`

**Si vous voyez encore les anciennes IPs** :
- Attendez 2 à 6 heures (propagation en cours)

---

### ✅ **Test 2 : Ouvrir le site**

1. **Mode incognito** : Ctrl + Shift + N
2. Ouvrez : `http://integrationplus.eu` (sans https au début)

**Si ça fonctionne** : 🎉 **BRAVO !**  
**Si ça ne fonctionne pas** : Attendez encore 2 à 6 heures

---

## 📋 CHECKLIST FINALE

Cochez au fur et à mesure :

- [ ] **OVH** : Connecté au manager OVH
- [ ] **OVH** : Accès à la Zone DNS
- [ ] **OVH** : **SUPPRESSION** de toutes les anciennes lignes **A**
- [ ] **OVH** : Ajout des 4 lignes **A** GitHub (108, 109, 110, 111)
- [ ] **OVH** : Ajout de la ligne **CNAME** pour `www`
- [ ] **OVH** : Screenshot envoyé pour vérification
- [ ] **Attente** : 2 à 6 heures de propagation
- [ ] **GitHub Pages** : Remove + Save du domaine
- [ ] **GitHub Pages** : DNS check successful ✅
- [ ] **GitHub Pages** : Enforce HTTPS activé
- [ ] **Test** : DNSChecker montre les 4 bonnes IPs
- [ ] **Test** : Site accessible sur `http://integrationplus.eu`
- [ ] **Test** : Site accessible sur `https://integrationplus.eu`

---

## 🎉 RÉSULTAT FINAL ATTENDU

Une fois tout terminé, vous aurez :

✅ **https://integrationplus.eu** → Site accessible  
✅ **https://www.integrationplus.eu** → Redirige vers le site  
✅ **Nom du site** : Integration+  
✅ **Certificat SSL** : Cadenas 🔒 activé  
✅ **Emails pros** : contact@integrationplus.eu disponible  
✅ **Formules** : Essentiel 49€, Premium 79€, Excellence 149€  
✅ **Mentions Légales** : En ligne  
✅ **CGU** : En ligne  

**Votre site sera 100% professionnel ! 🚀**

---

## 🆘 EN CAS DE DOUTE

**Envoyez-moi UN SEUL screenshot de votre Zone DNS OVH complète** et je vous dirai exactement quoi supprimer et quoi ajouter !

---

**Date** : 13 janvier 2026  
**Pour** : Integration+ (Hakima Saddiki)
