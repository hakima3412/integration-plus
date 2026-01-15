/**
 * 🤖 Intégration du Chatbot IA dans Integration+
 * 
 * Ce fichier intègre le chatbot IA avec l'interface existante
 */

// Variable globale pour le chatbot IA
let chatbotAI = null;

/**
 * Initialiser le chatbot IA
 */
function initChatbotAI() {
    // Vérifier si la configuration existe
    if (typeof CHATBOT_CONFIG === 'undefined' || !CHATBOT_CONFIG.geminiApiKey) {
        console.warn('⚠️ Chatbot IA non configuré. Utilisez le chatbot simple.');
        return false;
    }

    // Vérifier si la clé API est configurée
    if (CHATBOT_CONFIG.geminiApiKey === 'VOTRE_CLE_API_ICI') {
        console.warn('⚠️ Clé API Gemini non configurée. Utilisez le chatbot simple.');
        return false;
    }

    // Initialiser le chatbot IA
    try {
        chatbotAI = new ChatbotAI(CHATBOT_CONFIG.geminiApiKey);
        console.log('✅ Chatbot IA initialisé avec succès !');
        return true;
    } catch (error) {
        console.error('❌ Erreur lors de l\'initialisation du chatbot IA:', error);
        return false;
    }
}

/**
 * Obtenir une réponse du chatbot (IA ou simple)
 */
async function getChatbotResponseAI(message) {
    // Si le chatbot IA est disponible, l'utiliser
    if (chatbotAI) {
        try {
            // Afficher un indicateur de chargement
            const loadingMessage = '💭 Je réfléchis à votre question...';
            
            // Appeler l'IA
            const response = await chatbotAI.ask(message);
            
            // Formater la réponse pour l'affichage HTML
            return formatAIResponse(response);
            
        } catch (error) {
            console.error('Erreur chatbot IA:', error);
            // Fallback sur le chatbot simple
            return getChatbotResponseSimple(message);
        }
    } else {
        // Utiliser le chatbot simple
        return getChatbotResponseSimple(message);
    }
}

/**
 * Formater la réponse de l'IA pour l'affichage HTML
 */
function formatAIResponse(response) {
    // Convertir les sauts de ligne en <br>
    let formatted = response.replace(/\n/g, '<br>');
    
    // Convertir les listes à puces (- item) en HTML
    formatted = formatted.replace(/^- (.+)$/gm, '<li>$1</li>');
    formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Convertir les liens en hyperliens cliquables
    formatted = formatted.replace(
        /(https?:\/\/[^\s<]+)/g, 
        '<a href="$1" target="_blank" style="color: #667eea; text-decoration: underline;">$1</a>'
    );
    
    // Convertir le texte en gras (**texte**)
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    return formatted;
}

/**
 * Chatbot simple (fallback si l'IA n'est pas disponible)
 */
function getChatbotResponseSimple(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('naturalisation') || lowerMessage.includes('nationalité')) {
        return `Pour obtenir la nationalité française par naturalisation, vous devez :
        <ul>
            <li>✅ Résider en France depuis au moins 5 ans</li>
            <li>✅ Avoir un niveau B1 en français (oral et écrit)</li>
            <li>✅ Réussir le test civique (connaissance de l'histoire, culture et société françaises)</li>
            <li>✅ Avoir des revenus stables</li>
            <li>✅ Ne pas avoir de condamnations pénales</li>
        </ul>
        <p>🔗 Plus d'infos : <a href="https://www.service-public.fr/particuliers/vosdroits/F2213" target="_blank">service-public.fr</a></p>
        <p>Notre plateforme vous prépare au test civique avec 200+ questions ! 🎓</p>`;
    }
    
    if (lowerMessage.includes('test civique') || lowerMessage.includes('test')) {
        return `Le test civique évalue vos connaissances sur :
        <ul>
            <li>📚 L'histoire de France</li>
            <li>🇫🇷 Les valeurs et symboles de la République</li>
            <li>🏛️ Les institutions françaises</li>
            <li>⚖️ Les droits et devoirs du citoyen</li>
        </ul>
        <p>🔗 Plus d'infos : <a href="https://www.service-public.fr/particuliers/vosdroits/F34740" target="_blank">service-public.fr</a></p>
        <p>Commencez par notre version DÉMO gratuite avec 40 questions ! 🚀</p>`;
    }
    
    if (lowerMessage.includes('niveau') || lowerMessage.includes('français') || lowerMessage.includes('b1') || lowerMessage.includes('a2') || lowerMessage.includes('b2')) {
        return `Pour la naturalisation, vous devez justifier d'un niveau B1 en français :
        <ul>
            <li>📝 B1 = Niveau intermédiaire (requis pour naturalisation)</li>
            <li>📝 A2 = Niveau élémentaire (requis pour carte de résident)</li>
            <li>📝 B2 = Niveau avancé (recommandé pour certains emplois)</li>
        </ul>
        <p>🔗 Plus d'infos : <a href="https://www.service-public.fr/particuliers/vosdroits/F11926" target="_blank">service-public.fr</a></p>
        <p>Notre plateforme propose des tests de préparation ! 📖</p>`;
    }
    
    if (lowerMessage.includes('document') || lowerMessage.includes('dossier') || lowerMessage.includes('pièce')) {
        return `📄 Documents nécessaires pour la naturalisation :
        <ul>
            <li>📄 Copie intégrale de l'acte de naissance</li>
            <li>📄 Justificatifs de résidence (5 ans minimum)</li>
            <li>📄 Diplôme DELF B1 ou attestation de français</li>
            <li>📄 Certificat de réussite au test civique</li>
            <li>📄 Bulletins de salaire et avis d'imposition</li>
            <li>📄 Carte de séjour en cours de validité</li>
        </ul>
        <p>🔗 Liste complète : <a href="https://www.service-public.fr/particuliers/vosdroits/F2213" target="_blank">service-public.fr</a></p>
        <p>💡 Notre formule Excellence vous accompagne dans la préparation de votre dossier !</p>`;
    }
    
    // Réponse par défaut
    return `Merci pour votre question ! Pour des informations détaillées :
    <ul>
        <li>🔍 Explorer notre Espace Membre avec 200+ questions</li>
        <li>📧 Contacter notre équipe : <a href="mailto:contact@integrationplus.eu">contact@integrationplus.eu</a></li>
        <li>📞 Appeler le <a href="tel:0615282362">06 15 28 23 62</a></li>
    </ul>
    <p>🔗 Consultez aussi : <a href="https://www.service-public.fr" target="_blank">service-public.fr</a></p>
    <p>Vous pouvez aussi essayer notre version DÉMO gratuite ! 🎉</p>`;
}

// Initialiser le chatbot au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const aiEnabled = initChatbotAI();
    if (aiEnabled) {
        console.log('🤖 Chatbot IA activé - Réponses intelligentes disponibles !');
    } else {
        console.log('🤖 Chatbot simple activé - Configurez l\'IA pour des réponses avancées.');
    }
});
