# ✅ CHECKLIST VISUELLE : Configurer OVH pour GitHub Pages

## 🎯 OBJECTIF
Faire pointer `integrationplus.eu` vers GitHub Pages (votre site **Integration+**)

---

## 📝 ÉTAPE 1 : SE CONNECTER À OVH

### 🔗 Lien direct :
```
https://manager.eu.ovhcloud.com/
```

### ✅ Actions :
1. Ouvrez le lien ci-dessus
2. Connectez-vous avec vos identifiants
3. Vous arrivez sur le tableau de bord

**✔️ Cochez ici quand c'est fait** : [ ]

---

## 📝 ÉTAPE 2 : ACCÉDER À LA ZONE DNS

### ✅ Actions :
1. Menu de gauche → Cliquez sur **"Web Cloud"**
2. Cliquez sur **"Noms de domaine"**
3. Cliquez sur **"integrationplus.eu"**
4. Cliquez sur l'onglet **"Zone DNS"**

**✔️ Cochez ici quand c'est fait** : [ ]

---

## 📝 ÉTAPE 3 : NETTOYER LES ANCIENNES LIGNES

### ⚠️ IMPORTANT : Supprimer UNIQUEMENT les lignes de type "A"

### 🗑️ SUPPRIMER ces lignes (icône poubelle) :

| Type | Cible | Action |
|------|-------|--------|
| **A** | `98.04.224.111` | 🗑️ **SUPPRIMER** |
| **A** | `18.208.98.157` | 🗑️ **SUPPRIMER** |
| **A** | `52.52.192.191` | 🗑️ **SUPPRIMER** |
| **A** | `188.165.53.185` | 🗑️ **SUPPRIMER** (si présente) |

### ✅ NE PAS TOUCHER à ces lignes :

| Type | Exemple de cible | Action |
|------|-----------------|--------|
| **NS** | `dns110.ovh.net.` | ✅ **GARDER** |
| **MX** | `mx1.mail.ovh.net.` | ✅ **GARDER** |
| **TXT** | `"v=spf1..."` | ✅ **GARDER** |
| **SPF** | `v=spf1 include:mx.ovh.com` | ✅ **GARDER** |
| **SRV** | `_imaps._tcp...` | ✅ **GARDER** |
| **CNAME** | `ftp.integrationplus.eu` | ✅ **GARDER** (si présent) |

**✔️ Cochez ici quand c'est fait** : [ ]

---

## 📝 ÉTAPE 4 : AJOUTER LES 4 LIGNES "A" GITHUB PAGES

### 🔹 **Ligne 1/4 : Premier serveur GitHub**

1. Cliquez sur **"Ajouter une entrée"** (en haut à droite)
2. Sélectionnez **"A"**
3. Remplissez :

| Champ | Valeur |
|-------|--------|
| **Sous-domaine** | *(Laissez vide ou mettez juste `.`)* |
| **TTL** | *(Laissez par défaut : 3600)* |
| **Cible** | `185.199.108.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

**✔️ Cochez ici quand c'est fait** : [ ]

---

### 🔹 **Ligne 2/4 : Deuxième serveur GitHub**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :

| Champ | Valeur |
|-------|--------|
| **Sous-domaine** | *(Laissez vide)* |
| **TTL** | *(Laissez par défaut)* |
| **Cible** | `185.199.109.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

**✔️ Cochez ici quand c'est fait** : [ ]

---

### 🔹 **Ligne 3/4 : Troisième serveur GitHub**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :

| Champ | Valeur |
|-------|--------|
| **Sous-domaine** | *(Laissez vide)* |
| **TTL** | *(Laissez par défaut)* |
| **Cible** | `185.199.110.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

**✔️ Cochez ici quand c'est fait** : [ ]

---

### 🔹 **Ligne 4/4 : Quatrième serveur GitHub**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"A"**
3. Remplissez :

| Champ | Valeur |
|-------|--------|
| **Sous-domaine** | *(Laissez vide)* |
| **TTL** | *(Laissez par défaut)* |
| **Cible** | `185.199.111.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

**✔️ Cochez ici quand c'est fait** : [ ]

---

## 📝 ÉTAPE 5 : AJOUTER LA LIGNE "CNAME" POUR WWW

### 🔹 **Ligne 5/5 : Redirection www**

1. Cliquez sur **"Ajouter une entrée"**
2. Sélectionnez **"CNAME"**
3. Remplissez :

| Champ | Valeur |
|-------|--------|
| **Sous-domaine** | `www` |
| **TTL** | *(Laissez par défaut)* |
| **Cible** | `hakima3412.github.io.` |

⚠️ **ATTENTION : N'OUBLIEZ PAS LE POINT À LA FIN !**  
✅ Correct : `hakima3412.github.io.`  
❌ Incorrect : `hakima3412.github.io`

4. Cliquez sur **"Suivant"** puis **"Valider"**

**✔️ Cochez ici quand c'est fait** : [ ]

---

## 📝 ÉTAPE 6 : VÉRIFICATION VISUELLE

### ✅ CE QUE VOUS DEVEZ VOIR dans votre Zone DNS :

#### **Enregistrements GitHub Pages (5 lignes)** :
| Type | Sous-domaine | Cible |
|------|-------------|-------|
| A | *(vide)* | `185.199.108.153` |
| A | *(vide)* | `185.199.109.153` |
| A | *(vide)* | `185.199.110.153` |
| A | *(vide)* | `185.199.111.153` |
| CNAME | `www` | `hakima3412.github.io.` |

#### **Enregistrements à conserver (ne pas supprimer)** :
| Type | Exemple |
|------|---------|
| NS | `dns110.ovh.net.` |
| NS | `ns110.ovh.net.` |
| MX | `1 mx1.mail.ovh.net.` |
| MX | `5 mx2.mail.ovh.net.` |
| MX | `100 mx3.mail.ovh.net.` |

**✔️ Cochez ici quand c'est bon** : [ ]

---

## 📝 ÉTAPE 7 : PRENDRE UN SCREENSHOT

### 📸 Actions :
1. **Scrollez** dans votre Zone DNS pour voir **toutes les lignes**
2. Prenez **UN SEUL SCREENSHOT** qui montre :
   - Les 4 lignes **A** avec `185.199.xxx.xxx`
   - La ligne **CNAME** pour `www`
   - Les autres lignes (NS, MX, etc.)

3. **Envoyez-moi ce screenshot** pour que je vérifie

**✔️ Cochez ici quand c'est fait** : [ ]

---

## 📝 ÉTAPE 8 : ATTENDRE LA PROPAGATION DNS

### ⏰ Délai de propagation :
- **Minimum** : 2 heures
- **Maximum** : 24 heures
- **En moyenne** : 4 à 6 heures

### ⚠️ IMPORTANT :
**NE TOUCHEZ PLUS À RIEN dans OVH pendant ce temps !** ✋

**✔️ Cochez ici après 4 heures d'attente** : [ ]

---

## 📝 ÉTAPE 9 : FORCER LA RE-VÉRIFICATION SUR GITHUB PAGES

### 🔗 Lien direct :
```
https://github.com/hakima3412/integration-plus/settings/pages
```

### ✅ Actions :
1. Ouvrez le lien ci-dessus
2. Dans la section **"Custom domain"** :
   - Vous devriez voir `integrationplus.eu`
   - Cliquez sur **"Remove"** (supprimer)
3. Attendez **30 secondes**
4. Re-tapez `integrationplus.eu` dans le champ
5. Cliquez sur **"Save"** (enregistrer)
6. Attendez **2 à 5 minutes**
7. Rafraîchissez la page (touche **F5**)
8. Vous devriez voir : **"DNS check successful"** ✅

**✔️ Cochez ici quand vous voyez "DNS check successful"** : [ ]

---

## 📝 ÉTAPE 10 : ACTIVER HTTPS

### ✅ Actions :
1. Une fois que vous voyez **"DNS check successful"**
2. Cochez la case : ☑️ **"Enforce HTTPS"**
3. Attendez **5 à 10 minutes**
4. Le certificat SSL sera généré automatiquement

**✔️ Cochez ici quand HTTPS est activé** : [ ]

---

## 📝 ÉTAPE 11 : TESTER LE SITE

### 🧪 **Test 1 : DNS Checker**

#### 🔗 Lien direct :
```
https://dnschecker.org/
```

#### ✅ Actions :
1. Ouvrez le lien
2. Tapez : `integrationplus.eu`
3. Type : Sélectionnez **"A"**
4. Cliquez sur **"Search"**

#### ✅ Résultat attendu :
Vous devez voir ces 4 IPs dans plusieurs pays :
- `185.199.108.153` ✅
- `185.199.109.153` ✅
- `185.199.110.153` ✅
- `185.199.111.153` ✅

**✔️ Cochez ici si les IPs sont correctes** : [ ]

---

### 🧪 **Test 2 : Ouvrir le site**

#### ✅ Actions :
1. **Mode incognito** : 
   - Windows/Linux : `Ctrl + Shift + N`
   - Mac : `Cmd + Shift + N`
2. Ouvrez : `http://integrationplus.eu`

#### ✅ Résultat attendu :
- Le site **Integration+** s'affiche
- Vous voyez la page d'accueil avec les 3 formules

**✔️ Cochez ici si le site s'affiche** : [ ]

---

### 🧪 **Test 3 : Tester HTTPS**

#### ✅ Actions :
1. **Mode incognito** : `Ctrl + Shift + N`
2. Ouvrez : `https://integrationplus.eu`

#### ✅ Résultat attendu :
- Le site s'affiche avec le **cadenas 🔒** dans la barre d'adresse
- Pas d'avertissement de sécurité

**✔️ Cochez ici si HTTPS fonctionne** : [ ]

---

### 🧪 **Test 4 : Tester www**

#### ✅ Actions :
1. **Mode incognito** : `Ctrl + Shift + N`
2. Ouvrez : `https://www.integrationplus.eu`

#### ✅ Résultat attendu :
- Le site **redirige** vers `https://integrationplus.eu`
- Le site s'affiche normalement

**✔️ Cochez ici si la redirection fonctionne** : [ ]

---

## 🎉 FÉLICITATIONS !

Si vous avez coché **TOUTES les cases** ci-dessus, votre site est **100% opérationnel** ! 🚀

### ✅ CE QUE VOUS AVEZ MAINTENANT :

| Élément | Statut |
|---------|--------|
| **Domaine principal** | https://integrationplus.eu ✅ |
| **Domaine www** | https://www.integrationplus.eu ✅ |
| **Certificat SSL** | 🔒 Actif ✅ |
| **Nom du site** | Integration+ ✅ |
| **Formules** | Essentiel 49€, Premium 79€, Excellence 149€ ✅ |
| **Sessions Test Civique** | 6 sessions complètes ✅ |
| **Tests de Français** | Inclus selon formule ✅ |
| **Mentions Légales** | En ligne ✅ |
| **CGU** | En ligne ✅ |
| **Emails pros** | contact@integrationplus.eu ✅ |

---

## 🆘 EN CAS DE PROBLÈME

### ❌ **Problème 1 : "DNS check unsuccessful" sur GitHub**
**Solution** : Attendez 2 à 6 heures supplémentaires, puis recommencez l'ÉTAPE 9

### ❌ **Problème 2 : "Page not found" sur integrationplus.eu**
**Solution** : Propagation DNS en cours, attendez 2 à 6 heures

### ❌ **Problème 3 : Anciennes IPs sur DNSChecker**
**Solution** : 
1. Retournez dans OVH Zone DNS
2. Vérifiez qu'il n'y a **aucune ligne A** avec d'autres IPs
3. Supprimez les anciennes lignes si présentes
4. Attendez 2 à 6 heures

### ❌ **Problème 4 : Erreur SSL**
**Solution** : Attendez 10 à 30 minutes après avoir activé "Enforce HTTPS"

---

## 📞 BESOIN D'AIDE ?

**Envoyez-moi 2 screenshots** :
1. Votre **Zone DNS OVH** (toutes les pages)
2. La page **GitHub Pages Settings**

Je vous aiderai immédiatement ! 😊

---

**Date de création** : 13 janvier 2026  
**Pour** : Integration+ (Hakima Saddiki)  
**Par** : Claude (Assistant IA)
