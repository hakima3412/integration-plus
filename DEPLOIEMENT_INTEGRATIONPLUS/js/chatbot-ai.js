/**
 * 🤖 Chatbot IA Integration+ avec Google Gemini
 * 
 * Ce chatbot utilise l'API Google Gemini pour répondre intelligemment
 * aux questions sur l'intégration en France avec des sources officielles.
 * 
 * Sources officielles :
 * - service-public.fr
 * - interieur.gouv.fr
 * - ofii.fr (Office Français de l'Immigration et de l'Intégration)
 */

class ChatbotAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.conversationHistory = [];
        
        // Prompt système qui guide l'IA
        this.systemPrompt = `Tu es un assistant virtuel expert pour Integration+, une plateforme d'aide à l'intégration en France.

Tu dois répondre aux questions sur :
- La naturalisation française
- Les démarches administratives
- Les tests de français (DELF, TCF)
- Le test civique
- Les documents nécessaires
- Les délais de traitement
- Les conditions de résidence

INFORMATIONS OFFICIELLES IMPORTANTES :
⚠️ NIVEAU DE FRANÇAIS POUR NATURALISATION :
- Le gouvernement français RECOMMANDE le niveau B2 depuis 2024
- Le niveau B1 est le MINIMUM accepté dans certaines situations
- Pour la carte de résident : niveau A2 minimum
- Sources : service-public.fr, interieur.gouv.fr

RÈGLES IMPORTANTES :
1. Cite TOUJOURS les sources officielles (service-public.fr, interieur.gouv.fr, ofii.fr)
2. Pour le niveau de français, précise TOUJOURS que B2 est recommandé (B1 minimum)
3. Donne des liens vers les pages officielles quand c'est pertinent
4. Si tu ne connais pas la réponse exacte, suggère de contacter Integration+ : contact@integrationplus.eu ou 06 15 28 23 62
5. Mentionne les formules Integration+ (Essentiel 49€, Premium 79€ avec tests A2/B1/B2, Excellence 149€) quand c'est pertinent
6. Sois précis, professionnel et bienveillant
7. Utilise des emojis pour rendre la réponse plus lisible (📄 🎯 ✅ etc.)
8. Structure tes réponses avec des listes à puces ou numérotées
9. Indique toujours si une information peut changer et recommande de vérifier sur service-public.fr

FORMAT DE RÉPONSE :
- Réponse claire et structurée
- Émojis pertinents
- Sources officielles citées
- Liens vers les pages officielles
- Mention d'Integration+ si pertinent

Réponds en français de manière professionnelle et précise.`;
    }

    /**
     * Envoyer une question au chatbot IA
     */
    async ask(question) {
        try {
            // Ajouter la question à l'historique
            this.conversationHistory.push({
                role: 'user',
                content: question
            });

            // Préparer le prompt complet
            const fullPrompt = `${this.systemPrompt}\n\nQuestion : ${question}`;

            // Appeler l'API Gemini
            const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: fullPrompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    },
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error(`Erreur API: ${response.status}`);
            }

            const data = await response.json();
            
            // Extraire la réponse
            const aiResponse = data.candidates[0].content.parts[0].text;
            
            // Ajouter la réponse à l'historique
            this.conversationHistory.push({
                role: 'assistant',
                content: aiResponse
            });

            return aiResponse;

        } catch (error) {
            console.error('Erreur chatbot IA:', error);
            
            // Réponse de secours si l'API échoue
            return `😊 Désolé, je rencontre un problème technique pour le moment.
            
📧 Pour une réponse immédiate, contactez-nous :
- Email : contact@integrationplus.eu
- Téléphone : 06 15 28 23 62

🔍 Vous pouvez aussi :
- Explorer notre Espace Membre avec 200+ questions
- Consulter service-public.fr pour les informations officielles

💡 Notre équipe vous répondra dans les plus brefs délais !`;
        }
    }

    /**
     * Réinitialiser la conversation
     */
    reset() {
        this.conversationHistory = [];
    }

    /**
     * Obtenir l'historique de la conversation
     */
    getHistory() {
        return this.conversationHistory;
    }
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChatbotAI;
}
