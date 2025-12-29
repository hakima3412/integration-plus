// ============================================================================
// ESPACE MEMBRE - JAVASCRIPT
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Chatbot Button
    const chatbotButton = document.getElementById('chatbotButton');
    if (chatbotButton) {
        chatbotButton.addEventListener('click', function() {
            showChatbotModal();
        });
    }
});

// Afficher modal pour une session
function showSessionModal(sessionId) {
    const sessions = {
        'session1': {
            title: '📚 Session 1 - Questions Générales',
            icon: '📚',
            message: 'Cette session sera bientôt disponible !',
            description: 'Nous ajoutons actuellement les 35 questions sur les principes et valeurs de la République française.'
        },
        'session2': {
            title: '🏛️ Session 2 - Histoire de France',
            icon: '🏛️',
            message: 'Cette session sera bientôt disponible !',
            description: 'Nous ajoutons actuellement les 40 questions sur les grands événements de l\'histoire de France.'
        },
        'session3': {
            title: '🇫🇷 Session 3 - Valeurs & Symboles',
            icon: '🇫🇷',
            message: 'Cette session sera bientôt disponible !',
            description: 'Nous ajoutons actuellement les 30 questions sur les symboles et valeurs de la République.'
        },
        'session4': {
            title: '🏛️ Session 4 - Institutions',
            icon: '🏛️',
            message: 'Cette session sera bientôt disponible !',
            description: 'Nous ajoutons actuellement les 35 questions sur les institutions françaises.'
        },
        'session5': {
            title: '⚖️ Session 5 - Droits & Devoirs',
            icon: '⚖️',
            message: 'Cette session sera bientôt disponible !',
            description: 'Nous ajoutons actuellement les 40 questions sur les droits et devoirs du citoyen.'
        },
        'exam': {
            title: '🎓 Simulation Examen',
            icon: '🎓',
            message: 'La simulation d\'examen sera bientôt disponible !',
            description: 'Nous préparons un test complet avec 20 questions dans les conditions réelles de l\'examen officiel.'
        }
    };

    const session = sessions[sessionId];
    if (!session) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-icon">${session.icon}</div>
            <h2>${session.title}</h2>
            <p><strong>${session.message}</strong></p>
            <p>${session.description}</p>
            <div class="modal-buttons">
                <button class="btn-modal btn-modal-primary" onclick="closeModal()">
                    <i class="fas fa-check"></i> Compris
                </button>
                <button class="btn-modal btn-modal-secondary" onclick="window.location.href='../'">
                    <i class="fas fa-home"></i> Retour à l'accueil
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Fermer au clic sur l'overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Fermer modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Animation fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Fonction pour afficher le modal du chatbot (reprise du main.js)
function showChatbotModal() {
    const modal = document.createElement('div');
    modal.className = 'chatbot-modal';
    modal.innerHTML = `
        <div class="chatbot-modal-content">
            <div class="chatbot-header">
                <div class="chatbot-header-info">
                    <i class="fas fa-robot"></i>
                    <div>
                        <h3>Assistant IA Integration Plus</h3>
                        <span class="status-online">En ligne</span>
                    </div>
                </div>
                <button class="chatbot-close" onclick="closeChatbotModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chatbot-messages" id="chatbotMessages">
                <div class="bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">
                        <p>👋 Bonjour ! Je suis votre assistant virtuel Integration Plus.</p>
                        <p>Je peux répondre à vos questions sur :</p>
                        <ul>
                            <li>✅ Le test civique et la naturalisation</li>
                            <li>✅ Les titres de séjour</li>
                            <li>✅ Les niveaux de français (A2, B1, B2)</li>
                            <li>✅ Les démarches d'intégration</li>
                        </ul>
                        <p>Comment puis-je vous aider aujourd'hui ?</p>
                    </div>
                </div>
            </div>
            <div class="chatbot-input-area">
                <input type="text" id="chatbotInput" placeholder="Posez votre question..." />
                <button onclick="sendChatMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
            <div class="chatbot-suggestions">
                <button onclick="askQuestion('Quelles sont les conditions pour la naturalisation ?')">
                    Naturalisation
                </button>
                <button onclick="askQuestion('Comment préparer le test civique ?')">
                    Test civique
                </button>
                <button onclick="askQuestion('Quel niveau de français pour la naturalisation ?')">
                    Niveau français
                </button>
            </div>
        </div>
    `;
    
    // Ajouter les styles du modal (repris du main.js)
    const chatStyle = document.createElement('style');
    chatStyle.textContent = `
        .chatbot-modal {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 400px;
            max-height: 600px;
            background: var(--dark-card);
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideUp 0.3s ease-out;
            display: flex;
            flex-direction: column;
        }
        
        .chatbot-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
            border-radius: 16px 16px 0 0;
        }
        
        .chatbot-header-info {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .chatbot-header-info i {
            font-size: 2rem;
            color: white;
        }
        
        .chatbot-header h3 {
            color: white;
            font-size: 1.1rem;
            margin: 0;
        }
        
        .status-online {
            color: #10b981;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .status-online::before {
            content: '';
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            display: inline-block;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        .chatbot-close {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }
        
        .chatbot-close:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(90deg);
        }
        
        .chatbot-close i {
            color: white;
            font-size: 1.2rem;
        }
        
        .chatbot-messages {
            flex: 1;
            padding: 1.5rem;
            overflow-y: auto;
            max-height: 400px;
            background: var(--dark-bg);
        }
        
        .bot-message {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            animation: fadeIn 0.3s ease-out;
        }
        
        .user-message {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-direction: row-reverse;
            animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .message-avatar {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .user-message .message-avatar {
            background: var(--secondary-color);
        }
        
        .message-avatar i {
            color: white;
            font-size: 1.2rem;
        }
        
        .message-content {
            background: rgba(99, 102, 241, 0.1);
            padding: 1rem;
            border-radius: 12px;
            max-width: 80%;
        }
        
        .user-message .message-content {
            background: var(--primary-color);
        }
        
        .message-content p {
            margin: 0.5rem 0;
            color: var(--text-light);
            line-height: 1.6;
        }
        
        .message-content ul {
            margin: 0.5rem 0;
            padding-left: 1.5rem;
        }
        
        .message-content li {
            color: var(--text-light);
            margin: 0.25rem 0;
        }
        
        .chatbot-input-area {
            display: flex;
            gap: 0.5rem;
            padding: 1rem;
            background: var(--dark-card);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .chatbot-input-area input {
            flex: 1;
            padding: 0.75rem 1rem;
            background: var(--dark-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: var(--text-light);
            font-size: 0.95rem;
        }
        
        .chatbot-input-area input:focus {
            outline: none;
            border-color: var(--primary-color);
        }
        
        .chatbot-input-area button {
            background: var(--primary-color);
            border: none;
            width: 45px;
            height: 45px;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }
        
        .chatbot-input-area button:hover {
            background: var(--primary-dark);
        }
        
        .chatbot-input-area button i {
            color: white;
            font-size: 1.1rem;
        }
        
        .chatbot-suggestions {
            display: flex;
            gap: 0.5rem;
            padding: 1rem;
            background: var(--dark-card);
            border-radius: 0 0 16px 16px;
            flex-wrap: wrap;
        }
        
        .chatbot-suggestions button {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.3);
            color: var(--text-light);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .chatbot-suggestions button:hover {
            background: var(--primary-color);
            border-color: var(--primary-color);
        }
        
        @media (max-width: 480px) {
            .chatbot-modal {
                width: calc(100% - 40px);
                right: 20px;
                bottom: 80px;
            }
        }
    `;
    
    document.head.appendChild(chatStyle);
    document.body.appendChild(modal);
    
    setTimeout(() => {
        document.getElementById('chatbotInput').focus();
    }, 300);
    
    document.getElementById('chatbotInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

function closeChatbotModal() {
    const modal = document.querySelector('.chatbot-modal');
    if (modal) {
        modal.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addBotMessage(response);
        }, 1000);
    }
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function askQuestion(question) {
    document.getElementById('chatbotInput').value = question;
    sendChatMessage();
}

function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('naturalisation') || lowerMessage.includes('nationalité')) {
        return `Pour obtenir la nationalité française par naturalisation, vous devez :<ul><li>✅ Résider en France depuis au moins 5 ans</li><li>✅ Avoir un niveau B1 en français (oral et écrit)</li><li>✅ Réussir le test civique</li><li>✅ Avoir des revenus stables</li><li>✅ Ne pas avoir de condamnations pénales</li></ul>Notre plateforme vous prépare au test civique avec 200+ questions ! 🎓`;
    }
    
    if (lowerMessage.includes('test civique') || lowerMessage.includes('test')) {
        return `Le test civique évalue vos connaissances sur :<ul><li>📚 L'histoire de France</li><li>🇫🇷 Les valeurs et symboles de la République</li><li>🏛️ Les institutions françaises</li><li>⚖️ Les droits et devoirs du citoyen</li></ul>Accédez aux 6 sessions thématiques dans votre Espace Membre ! 🚀`;
    }
    
    if (lowerMessage.includes('niveau') || lowerMessage.includes('français') || lowerMessage.includes('b1') || lowerMessage.includes('a2') || lowerMessage.includes('b2')) {
        return `Pour la naturalisation, vous devez justifier d'un niveau B1 en français :<ul><li>📝 B1 = Niveau intermédiaire (requis pour naturalisation)</li><li>📝 A2 = Niveau élémentaire (requis pour carte de résident)</li><li>📝 B2 = Niveau avancé (recommandé pour certains emplois)</li></ul>Notre plateforme propose des tests de préparation pour les 3 niveaux ! 📖`;
    }
    
    return `Merci pour votre question ! Pour des informations détaillées :<ul><li>🔍 Explorez votre Espace Membre avec 200+ questions</li><li>📧 Contactez notre équipe : contact@integrationplus.eu</li><li>📞 Appelez le +33 1 23 45 67 89</li></ul>`;
}