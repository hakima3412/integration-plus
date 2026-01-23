# 📋 GUIDE D'INTÉGRATION DU POPUP DE CONVERSION

## Pour la page demo existante sur integrationplus.eu

### **Étape 1: Ouvrir le fichier demo/index.html**

Sur votre serveur OVH, éditez le fichier:
```
/demo/index.html
```

### **Étape 2: Ajouter le popup AVANT la balise </body>**

Copiez tout le contenu du fichier `/app/frontend/public/demo/conversion-popup.html` et collez-le juste avant `</body>` dans votre demo/index.html.

Le code à ajouter commence par:
```html
<!-- Popup de Conversion -->
<div id="conversionPopup" class="conversion-popup" style="display: none;">
```

Et se termine par:
```html
</script>
```

### **Étape 3: Le popup s'affichera automatiquement**

Le script détectera automatiquement:
1. Quand le test est terminé
2. Affichera le score de l'utilisateur  
3. Proposera les 3 formules
4. Redirigera vers la section tarifs

### **Pas besoin de modifier le reste de votre code demo!**

Le popup est entièrement autonome et s'intègre sans conflits.

---

## Test du Popup

1. Visitez votre page demo: `https://integrationplus.eu/demo/`
2. Faites le test complet (40 questions)
3. À la fin, le popup apparaîtra automatiquement après 2 secondes
4. Montrera votre score et encouragera l'achat

---

## Alternative: Popup au démarrage

Si vous voulez aussi afficher un popup AVANT le test pour encourager l'inscription:

Ajoutez ce script au début de votre demo/index.html (après la balise `<body>`):

```html
<script>
// Afficher un popup de pré-conversion après 30 secondes
setTimeout(() => {
    if (confirm('💡 Astuce: Avec la version complète, vous aurez accès à 200+ questions et un chatbot IA pour vous aider!\n\nVoulez-vous voir les formules maintenant?')) {
        window.location.href = 'https://integrationplus.eu/#tarifs';
    }
}, 30000); // 30 secondes
</script>
```

Cela affichera un message après 30 secondes d'utilisation.

---

## 🎨 Personnalisation

Le popup est entièrement personnalisable. Les couleurs principales utilisent:
- Violet (#667eea) 
- Indigo (#764ba2)

Pour modifier l'apparence, éditez les styles CSS dans la section `<style>` du popup.

---

**Terminé! Le popup de conversion est maintenant actif. 🚀**
