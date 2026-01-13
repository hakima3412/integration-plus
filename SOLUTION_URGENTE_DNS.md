# 🔥 SOLUTION URGENTE : DNS ne pointe pas vers GitHub Pages

## 🔴 PROBLÈME CONFIRMÉ

**Date** : 13 janvier 2026 - 14h30

**Test DNS effectué** :
```bash
curl "https://dns.google/resolve?name=integrationplus.eu&type=A"
```

**Résultat** :
- ❌ `13.52.188.95` (ancienne IP détectée)
- ❌ `52.52.192.191` (ancienne IP détectée)

**IPs attendues** :
- ✅ `185.199.108.153` (GitHub Pages)
- ✅ `185.199.109.153` (GitHub Pages)
- ✅ `185.199.110.153` (GitHub Pages)
- ✅ `185.199.111.153` (GitHub Pages)

---

## 🎯 SOLUTION IMMÉDIATE

### **OPTION 1 : Chercher et supprimer TOUTES les anciennes lignes A**

**Dans OVH Manager** :
1. Allez sur : https://manager.eu.ovhcloud.com/
2. Web Cloud → Noms de domaine → integrationplus.eu → Zone DNS
3. **Parcourez TOUTES les pages** (1/3, 2/3, 3/3)
4. **Cherchez** les lignes de type **"A"** avec ces IPs :
   - `13.52.188.95`
   - `52.52.192.191`
   - `98.04.224.111`
   - `18.208.98.157`
   - `188.165.53.185`
5. **Supprimez-les TOUTES** (icône poubelle 🗑️)
6. Cliquez sur **"OK"** pour sauvegarder
7. Attendez **30 minutes** puis testez

---

### **OPTION 2 : Réinitialiser complètement la Zone DNS** (radical)

**Attention** : Cette option supprime TOUT et recommence de zéro.

**Dans OVH Manager** :
1. Zone DNS → Cliquez sur **"Réinitialiser ma zone DNS"** (si l'option existe)
2. **OU** : Supprimez manuellement TOUTES les lignes A et AAAA
3. Ensuite, ajoutez UNIQUEMENT :
   - 4 lignes **A** GitHub Pages
   - 1 ligne **CNAME** pour www
   - Gardez les **MX** (emails)
   - Gardez les **NS** (serveurs DNS)

---

### **OPTION 3 : Contacter le support OVH** (si bloqué)

**Si les deux options ci-dessus ne fonctionnent pas** :

1. Ouvrez un ticket support OVH
2. Expliquez :
   - "Mon domaine integrationplus.eu renvoie encore les anciennes IPs"
   - "J'ai ajouté 4 enregistrements A pour GitHub Pages mais ils ne sont pas actifs"
   - "Les IPs détectées : 13.52.188.95 et 52.52.192.191"
   - "IPs attendues : 185.199.108.153, .109, .110, .111"
3. Demandez-leur de **forcer la mise à jour des serveurs DNS**

---

## 🧪 TESTER LA RÉSOLUTION

Une fois les modifications faites, attendez 30 minutes et testez :

### **Test en ligne** :
1. https://dnschecker.org/
2. Tapez : `integrationplus.eu`
3. Type : **A**
4. Résultat attendu : `185.199.108.153`, `.109`, `.110`, `.111`

### **Test via API** :
```bash
curl "https://dns.google/resolve?name=integrationplus.eu&type=A"
```

Résultat attendu :
```json
{
  "Answer": [
    {"data": "185.199.108.153"},
    {"data": "185.199.109.153"},
    {"data": "185.199.110.153"},
    {"data": "185.199.111.153"}
  ]
}
```

---

## 📞 CONTACT SUPPORT OVH

**Téléphone** : 1007 (depuis la France)
**Web** : https://help.ovhcloud.com/csm?id=csm_get_help

**Demandez** :
- "Pourquoi mes enregistrements A ne sont pas propagés ?"
- "Pouvez-vous forcer la mise à jour de mes DNS ?"

---

## ⏰ TIMELINE

| Heure | Action |
|-------|--------|
| **Maintenant** | Supprimer les anciennes lignes A dans OVH |
| **+30 min** | Tester DNS avec dnschecker.org |
| **+1h** | Re-tester |
| **+2h** | Si toujours KO → Contacter support OVH |

---

**Date** : 13 janvier 2026
**Pour** : Integration+ (Hakima Saddiki)
**Statut** : DNS pointe vers anciennes IPs, nécessite nettoyage complet
