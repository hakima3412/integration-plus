/**
 * 🤖 Chatbot IA Integration+ avec OpenAI ChatGPT
 * 
 * Ce chatbot utilise l'API OpenAI (ChatGPT) pour répondre intelligemment
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
        this.apiUrl = 'https://api.openai.com/v1/chat/completions';
        this.model = 'gpt-4o-mini'; // Modèle économique et performant
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
⚠️ NIVEAU DE FRANÇAIS POUR NATURALISATION (2026) :
- Le gouvernement français RECOMMANDE le niveau B2 en 2026
- Le niveau B1 est le MINIMUM accepté dans certaines situations
- Pour la carte de résident : niveau A2 minimum
- Sources : service-public.fr, interieur.gouv.fr

RÈGLES IMPORTANTES :
1. Cite TOUJOURS les sources officielles (service-public.fr, interieur.gouv.fr, ofii.fr)
2. Pour le niveau de français, précise TOUJOURS que B2 est recommandé (B1 minimum)
3. Donne des liens vers les pages officielles quand c'est pertinent
4. Si tu ne connais pas la réponse exacte, suggère de contacter Integration+ : plumeprestige@outlook.fr ou 06 15 28 23 62
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
            // Construire les messages pour OpenAI
            const messages = [
                {
                    role: 'system',
                    content: this.systemPrompt
                },
                // Ajouter l'historique de conversation
                ...this.conversationHistory,
                // Ajouter la nouvelle question
                {
                    role: 'user',
                    content: question
                }
            ];

            // Appeler l'API OpenAI
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 1000,
                    top_p: 0.9,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.6
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erreur API OpenAI:', errorData);
                throw new Error(`Erreur API: ${response.status} - ${errorData.error?.message || 'Erreur inconnue'}`);
            }

            const data = await response.json();
            
            // Extraire la réponse
            const aiResponse = data.choices[0].message.content;
            
            // Ajouter la question et la réponse à l'historique
            this.conversationHistory.push(
                { role: 'user', content: question },
                { role: 'assistant', content: aiResponse }
            );

            // Limiter l'historique à 10 messages (5 échanges) pour éviter des requêtes trop grandes
            if (this.conversationHistory.length > 10) {
                this.conversationHistory = this.conversationHistory.slice(-10);
            }

            return aiResponse;

        } catch (error) {
            console.error('Erreur chatbot IA:', error);
            
            // Réponse de secours si l'API échoue
            return `😊 Désolé, je rencontre un problème technique pour le moment.
            
📧 Pour une réponse immédiate, contactez-nous :
- Email : plumeprestige@outlook.fr
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
