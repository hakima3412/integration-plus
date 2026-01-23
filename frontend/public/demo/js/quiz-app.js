// ============================================================================
// APPLICATION QUIZ - LOGIQUE PRINCIPALE
// ============================================================================

let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le tableau des réponses
    userAnswers = new Array(quizQuestions.length).fill(null);
});

// Démarrer le quiz
function startQuiz() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    
    currentQuestionIndex = 0;
    quizStartTime = new Date();
    
    displayQuestion();
}

// Afficher une question
function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Mettre à jour le compteur
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Mettre à jour la barre de progression
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Afficher la question
    document.getElementById('questionText').textContent = question.question;
    
    // Afficher les réponses
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        
        // Si une réponse a déjà été sélectionnée pour cette question
        if (userAnswers[currentQuestionIndex] === index) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <div class="answer-radio">
                <input type="radio" 
                       name="answer" 
                       id="answer${index}" 
                       value="${index}"
                       ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
                <label for="answer${index}"></label>
            </div>
            <div class="answer-text">${answer}</div>
        `;
        
        answerDiv.addEventListener('click', function() {
            selectAnswer(index);
        });
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Gérer les boutons de navigation
    updateNavigationButtons();
}

// Sélectionner une réponse
function selectAnswer(answerIndex) {
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Mettre à jour l'affichage
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        if (index === answerIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    
    // Cocher le radio button
    document.getElementById(`answer${answerIndex}`).checked = true;
}

// Question suivante
function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Question précédente
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Mettre à jour les boutons de navigation
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Bouton précédent
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Dernière question ?
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

// Soumettre le quiz
function submitQuiz() {
    // Vérifier si toutes les questions ont une réponse
    const unansweredCount = userAnswers.filter(answer => answer === null).length;
    
    if (unansweredCount > 0) {
        const confirm = window.confirm(
            `Attention ! Vous n'avez pas répondu à ${unansweredCount} question(s).\n\nVoulez-vous quand même soumettre le test ?`
        );
        
        if (!confirm) {
            return;
        }
    }
    
    // Calculer les résultats
    calculateResults();
}

// Calculer les résultats
function calculateResults() {
    let correctCount = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            correctCount++;
        }
    });
    
    const incorrectCount = quizQuestions.length - correctCount - userAnswers.filter(a => a === null).length;
    const scorePercent = Math.round((correctCount / quizQuestions.length) * 100);
    
    // Afficher les résultats
    displayResults(correctCount, incorrectCount, scorePercent);
}

// Afficher les résultats
function displayResults(correctCount, incorrectCount, scorePercent) {
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'block';
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // En-tête des résultats
    const resultsHeader = document.getElementById('resultsHeader');
    
    let headerClass = '';
    let headerIcon = '';
    let headerTitle = '';
    let headerMessage = '';
    
    if (scorePercent >= 80) {
        headerClass = 'success';
        headerIcon = '🎉';
        headerTitle = 'Excellent !';
        headerMessage = `Félicitations ! Vous avez obtenu ${scorePercent}% de bonnes réponses. Vous êtes prêt pour le test officiel !`;
    } else if (scorePercent >= 60) {
        headerClass = 'good';
        headerIcon = '👍';
        headerTitle = 'Très bien !';
        headerMessage = `Bon travail ! Vous avez obtenu ${scorePercent}%. Encore un peu d'entraînement et ce sera parfait.`;
    } else if (scorePercent >= 40) {
        headerClass = 'medium';
        headerIcon = '📚';
        headerTitle = 'À améliorer';
        headerMessage = `Vous avez obtenu ${scorePercent}%. Continuez à vous entraîner avec les 200+ questions de l'Espace Membre.`;
    } else {
        headerClass = 'low';
        headerIcon = '💪';
        headerTitle = 'Continuez !';
        headerMessage = `Vous avez obtenu ${scorePercent}%. Ne vous découragez pas ! Avec plus d'entraînement, vous réussirez.`;
    }
    
    resultsHeader.className = `results-header ${headerClass}`;
    resultsHeader.innerHTML = `
        <div class="results-icon">${headerIcon}</div>
        <h2>${headerTitle}</h2>
        <p>${headerMessage}</p>
    `;
    
    // Statistiques
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('scorePercent').textContent = scorePercent + '%';
    
    // Corrections détaillées
    displayCorrections();
}

// Afficher les corrections
function displayCorrections() {
    const correctionsContainer = document.getElementById('correctionsContainer');
    correctionsContainer.innerHTML = '<h3>📝 Corrections Détaillées</h3>';
    
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const isUnanswered = userAnswer === null;
        
        const correctionDiv = document.createElement('div');
        correctionDiv.className = `correction-item ${isCorrect ? 'correct' : (isUnanswered ? 'unanswered' : 'incorrect')}`;
        
        // Icône de statut
        let statusIcon = '';
        if (isCorrect) {
            statusIcon = '<i class="fas fa-check-circle"></i>';
        } else if (isUnanswered) {
            statusIcon = '<i class="fas fa-question-circle"></i>';
        } else {
            statusIcon = '<i class="fas fa-times-circle"></i>';
        }
        
        // Afficher la question et les réponses
        let answersHTML = '';
        question.answers.forEach((answer, answerIndex) => {
            let answerClass = '';
            let answerIcon = '';
            
            if (answerIndex === question.correct) {
                answerClass = 'correct-answer';
                answerIcon = '<i class="fas fa-check"></i>';
            } else if (answerIndex === userAnswer && !isCorrect) {
                answerClass = 'wrong-answer';
                answerIcon = '<i class="fas fa-times"></i>';
            }
            
            answersHTML += `
                <div class="answer-review ${answerClass}">
                    ${answerIcon}
                    <span>${answer}</span>
                </div>
            `;
        });
        
        correctionDiv.innerHTML = `
            <div class="correction-header">
                ${statusIcon}
                <h4>Question ${index + 1}</h4>
            </div>
            <p class="correction-question">${question.question}</p>
            <div class="correction-answers">
                ${answersHTML}
            </div>
            <div class="correction-explanation">
                <strong>💡 Explication :</strong>
                <p>${question.explanation}</p>
            </div>
        `;
        
        correctionsContainer.appendChild(correctionDiv);
    });
}

// Recommencer le quiz
function retryQuiz() {
    // Réinitialiser
    currentQuestionIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    
    // Afficher la page de démarrage
    document.getElementById('resultsPage').style.display = 'none';
    document.getElementById('startPage').style.display = 'block';
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}