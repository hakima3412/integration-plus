# 🚀 GUIDE ULTRA-SIMPLE : Connecter votre domaine OVH à votre site

## ✅ CE QUE VOUS ALLEZ OBTENIR

**Avant** : https://hakima3412.github.io/integration-plus/  
**Après** : https://integrationplus.eu ✨

---

## 📋 ÉTAPE 1 : Configurer OVH (5 minutes)

### 🔹 **1.1 - Se connecter à OVH**

1. **Ouvrez** votre navigateur
2. **Allez sur** : https://manager.eu.ovhcloud.com/
3. **Connectez-vous** avec vos identifiants OVH
4. Vous arrivez sur le **tableau de bord** (comme dans votre screenshot)

---

### 🔹 **1.2 - Accéder à la Zone DNS**

1. Dans le menu de gauche, cliquez sur **"Web Cloud"**
2. Cliquez sur **"Noms de domaine"**
3. Cliquez sur **"integrationplus.eu"**
4. Cliquez sur l'onglet **"Zone DNS"**

**Vous verrez une liste de lignes avec "A", "CNAME", "MX", etc.**

---

### 🔹 **1.3 - Ajouter les enregistrements DNS**

Vous allez ajouter **4 lignes** pour que votre domaine pointe vers GitHub Pages.

#### **📌 Ligne 1 : Enregistrement A (IPv4 principal)**

1. Cliquez sur **"Ajouter une entrée"**
2. Choisissez **"A"**
3. Remplissez comme ceci :

   | Champ | Valeur à mettre |
   |-------|----------------|
   | **Sous-domaine** | Laissez **VIDE** (ou mettez juste un point `.`) |
   | **TTL** | Laissez **par défaut** (3600) |
   | **Cible/IP** | `185.199.108.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### **📌 Ligne 2 : Enregistrement A (IPv4 secondaire)**

1. Cliquez sur **"Ajouter une entrée"**
2. Choisissez **"A"**
3. Remplissez comme ceci :

   | Champ | Valeur à mettre |
   |-------|----------------|
   | **Sous-domaine** | Laissez **VIDE** |
   | **TTL** | Laissez **par défaut** |
   | **Cible/IP** | `185.199.109.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### **📌 Ligne 3 : Enregistrement A (IPv4 tertiaire)**

1. Cliquez sur **"Ajouter une entrée"**
2. Choisissez **"A"**
3. Remplissez comme ceci :

   | Champ | Valeur à mettre |
   |-------|----------------|
   | **Sous-domaine** | Laissez **VIDE** |
   | **TTL** | Laissez **par défaut** |
   | **Cible/IP** | `185.199.110.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### **📌 Ligne 4 : Enregistrement A (IPv4 quaternaire)**

1. Cliquez sur **"Ajouter une entrée"**
2. Choisissez **"A"**
3. Remplissez comme ceci :

   | Champ | Valeur à mettre |
   |-------|----------------|
   | **Sous-domaine** | Laissez **VIDE** |
   | **TTL** | Laissez **par défaut** |
   | **Cible/IP** | `185.199.111.153` |

4. Cliquez sur **"Suivant"** puis **"Valider"**

---

#### **📌 Ligne 5 : Enregistrement CNAME pour www**

1. Cliquez sur **"Ajouter une entrée"**
2. Choisissez **"CNAME"**
3. Remplissez comme ceci :

   | Champ | Valeur à mettre |
   |-------|----------------|
   | **Sous-domaine** | `www` |
   | **TTL** | Laissez **par défaut** |
   | **Cible** | `hakima3412.github.io.` ⚠️ **N'OUBLIEZ PAS LE POINT À LA FIN !** |

4. Cliquez sur **"Suivant"** puis **"Valider"**

---

### 🎯 **RÉCAPITULATIF DES 5 LIGNES À AJOUTER**

| Type | Sous-domaine | Cible/IP |
|------|-------------|----------|
| **A** | *(vide)* | `185.199.108.153` |
| **A** | *(vide)* | `185.199.109.153` |
| **A** | *(vide)* | `185.199.110.153` |
| **A** | *(vide)* | `185.199.111.153` |
| **CNAME** | `www` | `hakima3412.github.io.` |

---

### ⚠️ **IMPORTANT : SUPPRIMER LES ANCIENS ENREGISTREMENTS A (SI PRÉSENTS)**

Si vous voyez déjà des lignes de type **"A"** qui pointent vers **d'autres IPs**, vous devez les **SUPPRIMER** :

1. Trouvez les anciennes lignes **"A"** (avec d'autres IPs)
2. Cliquez sur l'icône **"Poubelle"** (🗑️) à droite de la ligne
3. Confirmez la suppression

**Ne supprimez PAS** :
- Les lignes **MX** (pour les emails)
- Les lignes **TXT** (pour la vérification)
- Les lignes **SRV** (si présentes)

**Supprimez SEULEMENT** :
- Les anciennes lignes **A** qui ne sont pas celles de GitHub Pages

---

## 📋 ÉTAPE 2 : Attendre la propagation DNS (2 à 24 heures)

### ⏰ **Patience !**

Les modifications DNS peuvent prendre du temps à se propager :
- **Minimum** : 2 heures
- **Maximum** : 24 heures
- **En moyenne** : 4 à 6 heures

Pendant ce temps, **NE TOUCHEZ À RIEN !** ✋

---

## 📋 ÉTAPE 3 : Configurer GitHub Pages (2 minutes)

### 🔹 **3.1 - Accéder aux paramètres GitHub**

1. **Ouvrez** : https://github.com/hakima3412/integration-plus
2. En haut à droite, cliquez sur **"Settings"** (Paramètres)
3. Dans le menu de gauche, cliquez sur **"Pages"**

---

### 🔹 **3.2 - Ajouter le domaine personnalisé**

1. Dans la section **"Custom domain"**, vous verrez un champ vide
2. **Tapez** : `integrationplus.eu`
3. Cliquez sur **"Save"** (Enregistrer)

GitHub va vérifier que le domaine pointe bien vers GitHub Pages.

**Si ça affiche une erreur** :
- C'est normal ! Les DNS ne sont pas encore propagés.
- **Attendez 2 à 6 heures** et réessayez.

**Si ça affiche "DNS check successful" (✅)** :
- Parfait ! Continuez à l'étape suivante.

---

### 🔹 **3.3 - Activer HTTPS**

1. Une fois le domaine validé, cochez la case :
   ☑️ **"Enforce HTTPS"**
2. Attendez **5 à 10 minutes** que le certificat SSL soit généré

---

## 📋 ÉTAPE 4 : Tester votre site (1 minute)

### 🧪 **Test 1 : Ouvrir votre site**

1. **Mode incognito** : Ctrl + Shift + N
2. **Ouvrez** : https://integrationplus.eu

**Si ça fonctionne** : 🎉 **BRAVO !**  
**Si ça ne fonctionne pas** : Attendez encore 2 à 6 heures (propagation DNS)

---

### 🧪 **Test 2 : Tester www**

1. **Ouvrez** : https://www.integrationplus.eu
2. Ça devrait **rediriger** vers https://integrationplus.eu

---

### 🧪 **Test 3 : Vérifier la propagation DNS**

1. **Ouvrez** : https://dnschecker.org/
2. **Tapez** : `integrationplus.eu`
3. **Choisissez** : Type **"A"**
4. Cliquez sur **"Search"**

**Vous devriez voir** :
- `185.199.108.153` ✅
- `185.199.109.153` ✅
- `185.199.110.153` ✅
- `185.199.111.153` ✅

**Si vous voyez une autre IP** : Attendez encore (propagation en cours)

---

## ✅ CHECKLIST FINALE

Cochez chaque étape quand vous l'avez faite :

- [ ] **OVH** : Connecté au manager OVH
- [ ] **OVH** : Accès à la Zone DNS de `integrationplus.eu`
- [ ] **OVH** : Ajout des 4 enregistrements **A** (185.199.108.153, .109, .110, .111)
- [ ] **OVH** : Ajout de l'enregistrement **CNAME** pour `www`
- [ ] **OVH** : Suppression des anciens enregistrements A (si présents)
- [ ] **Attente** : 2 à 6 heures pour la propagation DNS
- [ ] **GitHub** : Accès aux Settings → Pages
- [ ] **GitHub** : Ajout du domaine `integrationplus.eu` dans "Custom domain"
- [ ] **GitHub** : DNS check successful ✅
- [ ] **GitHub** : Activation de "Enforce HTTPS"
- [ ] **Test** : https://integrationplus.eu fonctionne ✅
- [ ] **Test** : https://www.integrationplus.eu redirige ✅

---

## 🆘 EN CAS DE PROBLÈME

### ❌ **"DNS check failed" sur GitHub**

**Raison** : Les DNS ne sont pas encore propagés  
**Solution** : Attendez 2 à 6 heures et réessayez

---

### ❌ **"Page not found" sur integrationplus.eu**

**Raison** : La propagation DNS n'est pas terminée  
**Solution** : Attendez 2 à 6 heures, puis videz le cache (Ctrl + F5)

---

### ❌ **"Your connection is not private" (erreur SSL)**

**Raison** : Le certificat SSL n'est pas encore généré  
**Solution** : Attendez 10 à 30 minutes après avoir activé "Enforce HTTPS"

---

### ❌ **"This site can't be reached"**

**Raison** : Les enregistrements DNS sont mal configurés  
**Solution** : Vérifiez que vous avez bien ajouté les **4 IPs** et le **CNAME**

---

## 📞 BESOIN D'AIDE ?

Si vous êtes bloqué, prenez **DEUX SCREENSHOTS** :

1. **Screenshot 1** : Votre Zone DNS OVH (montrez-moi les lignes A et CNAME)
2. **Screenshot 2** : La page GitHub Pages Settings (montrez-moi le champ "Custom domain")

Envoyez-moi les deux captures et je vous aide !

---

## 🎉 FÉLICITATIONS !

Une fois que tout fonctionne, votre site sera accessible sur :

✅ **https://integrationplus.eu**  
✅ **https://www.integrationplus.eu** (redirige vers la première)  
✅ **Certificat SSL actif** (cadenas 🔒)  
✅ **Emails pros** : contact@integrationplus.eu  

**Votre site sera 100% professionnel ! 🚀**

---

**Date de création du guide** : 12 janvier 2026  
**Pour** : Integration+ (Hakima Saddiki)
