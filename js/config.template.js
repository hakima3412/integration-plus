/**
 * 🔑 Configuration du Chatbot IA - Integration+
 * 
 * ⚠️ NE COMMITTEZ PAS CE FICHIER DANS GIT !
 * Ce fichier contient votre clé API confidentielle.
 */

const CHATBOT_CONFIG = {
    // 🔑 Clé API Google Gemini
    // Obtenez votre clé sur : https://aistudio.google.com/app/apikey
    geminiApiKey: 'VOTRE_CLE_API_ICI',
    
    // ✅ Activer/désactiver le chatbot IA
    enabled: true,
    
    // 🎨 Configuration de l'interface
    theme: {
        primaryColor: '#667eea',
        secondaryColor: '#764ba2',
        textColor: '#1f2937'
    },
    
    // 📞 Informations de contact
    contact: {
        email: 'contact@integrationplus.eu',
        phone: '06 15 28 23 62',
        website: 'https://integrationplus.eu'
    },
    
    // 💰 Formules Integration+
    formules: {
        essentiel: {
            nom: 'Essentiel',
            prix: '49€',
            description: 'Tests de préparation essentiels'
        },
        premium: {
            nom: 'Premium',
            prix: '79€',
            description: '200+ questions + tests blancs'
        },
        excellence: {
            nom: 'Excellence',
            prix: '149€',
            description: 'Accompagnement complet personnalisé'
        }
    },
    
    // 🔗 Sources officielles
    sources: {
        servicePublic: 'https://www.service-public.fr',
        interieur: 'https://www.interieur.gouv.fr',
        ofii: 'https://www.ofii.fr'
    }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CHATBOT_CONFIG;
}
