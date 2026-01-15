// ============================================================================
// INTEGRATION PLUS - JAVASCRIPT PRINCIPAL
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Fermer le menu mobile lors du clic sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (burgerMenu) {
                const icon = burgerMenu.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // Smooth Scroll pour les liens d'ancre
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Chatbot Button
    const chatbotButton = document.getElementById('chatbotButton');
    if (chatbotButton) {
        chatbotButton.addEventListener('click', function() {
            showChatbotModal();
        });
    }

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Ajouter l'animation aux cartes
    document.querySelectorAll('.card-offre, .service-card, .tarif-card, .temoignage-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                alert('✅ Merci pour votre message ! Nous vous répondrons sous 24h.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Navbar au scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll vers le bas
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Fonction pour afficher le modal du chatbot
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
    
    // Ajouter les styles du modal
    const style = document.createElement('style');
    style.textContent = `
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
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
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
        
        .chatbot-messages::-webkit-scrollbar {
            width: 6px;
        }
        
        .chatbot-messages::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
        }
        
        .chatbot-messages::-webkit-scrollbar-thumb {
            background: var(--primary-color);
            border-radius: 3px;
        }
        
        .bot-message,
        .user-message {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .user-message {
            flex-direction: row-reverse;
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
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Focus sur l'input
    setTimeout(() => {
        document.getElementById('chatbotInput').focus();
    }, 300);
    
    // Enter pour envoyer
    document.getElementById('chatbotInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

// Fermer le modal du chatbot
function closeChatbotModal() {
    const modal = document.querySelector('.chatbot-modal');
    if (modal) {
        modal.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Style pour l'animation de fermeture
const closeStyle = document.createElement('style');
closeStyle.textContent = `
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(closeStyle);

// Envoyer un message dans le chatbot
function sendChatMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        
        // Simuler la réponse du bot
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addBotMessage(response);
        }, 1000);
    }
}

// Ajouter un message utilisateur
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

// Ajouter un message du bot
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

// Poser une question suggérée
function askQuestion(question) {
    document.getElementById('chatbotInput').value = question;
    sendChatMessage();
}

// Réponses du chatbot (base de connaissances simplifiée)
function getChatbotResponse(message) {
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
        Notre plateforme vous prépare au test civique avec 200+ questions ! 🎓`;
    }
    
    if (lowerMessage.includes('test civique') || lowerMessage.includes('test')) {
        return `Le test civique évalue vos connaissances sur :
        <ul>
            <li>📚 L'histoire de France</li>
            <li>🇫🇷 Les valeurs et symboles de la République</li>
            <li>🏛️ Les institutions françaises</li>
            <li>⚖️ Les droits et devoirs du citoyen</li>
        </ul>
        Commencez par notre version DÉMO gratuite avec 40 questions ! Ensuite, accédez aux 200 questions complètes dans l'Espace Membre. 🚀`;
    }
    
    if (lowerMessage.includes('niveau') || lowerMessage.includes('français') || lowerMessage.includes('b1') || lowerMessage.includes('a2') || lowerMessage.includes('b2')) {
        return `Pour la naturalisation, vous devez justifier d'un niveau B1 en français :
        <ul>
            <li>📝 B1 = Niveau intermédiaire (requis pour naturalisation)</li>
            <li>📝 A2 = Niveau élémentaire (requis pour carte de résident)</li>
            <li>📝 B2 = Niveau avancé (recommandé pour certains emplois)</li>
        </ul>
        Notre plateforme propose des tests de préparation pour les 3 niveaux ! 📖`;
    }
    
    if (lowerMessage.includes('tarif') || lowerMessage.includes('prix') || lowerMessage.includes('coût')) {
        return `Nous proposons 3 formules :
        <ul>
            <li>💎 Essentiel : 29€/mois - Accès au test civique complet</li>
            <li>👑 Premium : 59€/mois - Test civique + français + 2 visios/mois</li>
            <li>⭐ Excellence : 99€/mois - Tout inclus + suivi personnalisé illimité</li>
        </ul>
        Essayez d'abord notre version DÉMO gratuite ! 🎁`;
    }
    
    if (lowerMessage.includes('titre de séjour') || lowerMessage.includes('carte de résident')) {
        return `Pour obtenir un titre de séjour en France :
        <ul>
            <li>📄 Titre de séjour temporaire : Valable 1 an (renouvelable)</li>
            <li>📄 Carte de résident : Valable 10 ans (nécessite niveau A2 en français)</li>
            <li>📄 Carte de résident permanent : Après 5 ans de résidence régulière</li>
        </ul>
        Notre formule Excellence inclut un accompagnement complet pour votre dossier ! 📋`;
    }
    
    if (lowerMessage.includes('visio') || lowerMessage.includes('vidéo') || lowerMessage.includes('cours')) {
        return `Nos visioconférences vous permettent de :
        <ul>
            <li>💬 Pratiquer l'oral en français avec un formateur</li>
            <li>💬 Poser vos questions sur le test civique</li>
            <li>💬 Préparer votre entretien en préfecture</li>
            <li>💬 Obtenir un suivi personnalisé de votre dossier</li>
        </ul>
        Disponibles en collectif ou individuel selon votre formule ! 📹`;
    }
    
    // Réponse par défaut
    return `Merci pour votre question ! Pour des informations détaillées, je vous invite à :
    <ul>
        <li>🔍 Explorer notre Espace Membre avec 200+ questions</li>
        <li>📧 Contacter notre équipe : contact@integrationplus.eu</li>
        <li>📞 Appeler le 06 15 28 23 62</li>
    </ul>
    Vous pouvez aussi essayer notre version DÉMO gratuite ! 🎉`;
}