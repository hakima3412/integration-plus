// MOTEUR DE TEST UNIVERSEL - SUPPORT DE TOUS LES TYPES D'EXERCICES
// Compatible avec A2, B1, B2 et tous les formats (QCM, textes, production écrite, etc.)

class TestEngine {
    constructor(testData) {
        this.testData = testData;
        this.currentExerciseIndex = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.totalQuestions = 0;
        this.startTime = null;
        
        // Calculer le nombre total de questions
        this.calculateTotalQuestions();
    }
    
    calculateTotalQuestions() {
        this.totalQuestions = 0;
        this.testData.exercises.forEach(exercise => {
            this.totalQuestions += exercise.questions.length;
        });
    }
    
    start() {
        this.startTime = Date.now();
        this.renderCurrentQuestion();
    }
    
    getCurrentExercise() {
        return this.testData.exercises[this.currentExerciseIndex];
    }
    
    getCurrentQuestion() {
        const exercise = this.getCurrentExercise();
        return exercise.questions[this.currentQuestionIndex];
    }
    
    getAbsoluteQuestionNumber() {
        let count = 0;
        for (let i = 0; i < this.currentExerciseIndex; i++) {
            count += this.testData.exercises[i].questions.length;
        }
        return count + this.currentQuestionIndex + 1;
    }
    
    renderCurrentQuestion() {
        const exercise = this.getCurrentExercise();
        const question = this.getCurrentQuestion();
        const questionNumber = this.getAbsoluteQuestionNumber();
        
        // Afficher le titre de la section
        document.getElementById('section-title').textContent = exercise.section || 'Test';
        
        // Afficher le texte de contexte si présent
        const contextContainer = document.getElementById('context-container');
        if (exercise.text) {
            contextContainer.style.display = 'block';
            document.getElementById('context-text').textContent = exercise.text;
        } else {
            contextContainer.style.display = 'none';
        }
        
        // Afficher l'instruction d'exercice si présente
        const instructionContainer = document.getElementById('instruction-container');
        if (exercise.instruction) {
            instructionContainer.style.display = 'block';
            document.getElementById('instruction-text').textContent = exercise.instruction;
            if (exercise.example) {
                document.getElementById('example-text').textContent = exercise.example;
                document.getElementById('example-text').style.display = 'block';
            } else {
                document.getElementById('example-text').style.display = 'none';
            }
        } else {
            instructionContainer.style.display = 'none';
        }
        
        // Afficher la question
        document.getElementById('question-number').textContent = `Question ${questionNumber}/${this.totalQuestions}`;
        document.getElementById('question-text').textContent = question.question;
        
        // Afficher les options selon le type
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        if (question.type === 'multiple_choice') {
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option;
                button.onclick = () => this.selectAnswer(index);
                optionsContainer.appendChild(button);
            });
        } else if (question.type === 'checklist') {
            question.options.forEach((option, index) => {
                const label = document.createElement('label');
                label.className = 'checkbox-option';
                label.innerHTML = `
                    <input type="checkbox" data-index="${index}">
                    <span>${option}</span>
                `;
                optionsContainer.appendChild(label);
            });
        }
        
        // Mettre à jour la barre de progression
        this.updateProgressBar();
        
        // Gérer les boutons de navigation
        this.updateNavigationButtons();
    }
    
    selectAnswer(answerIndex) {
        const question = this.getCurrentQuestion();
        const questionNumber = this.getAbsoluteQuestionNumber();
        
        if (question.type === 'multiple_choice') {
            // Enregistrer la réponse
            this.userAnswers[questionNumber - 1] = answerIndex;
            
            // Mettre à jour l'interface
            document.querySelectorAll('.option-btn').forEach((btn, index) => {
                btn.classList.remove('selected');
                if (index === answerIndex) {
                    btn.classList.add('selected');
                }
            });
        }
    }
    
    nextQuestion() {
        const exercise = this.getCurrentExercise();
        const question = this.getCurrentQuestion();
        const questionNumber = this.getAbsoluteQuestionNumber();
        
        // Pour les checklists, récupérer les réponses cochées
        if (question.type === 'checklist') {
            const checked = [];
            document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                checked.push(parseInt(cb.dataset.index));
            });
            this.userAnswers[questionNumber - 1] = checked;
        }
        
        // Passer à la question suivante
        if (this.currentQuestionIndex < exercise.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderCurrentQuestion();
        } else if (this.currentExerciseIndex < this.testData.exercises.length - 1) {
            // Passer à l'exercice suivant
            this.currentExerciseIndex++;
            this.currentQuestionIndex = 0;
            this.renderCurrentQuestion();
        } else {
            // Fin du test
            this.finishTest();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderCurrentQuestion();
        } else if (this.currentExerciseIndex > 0) {
            // Revenir à l'exercice précédent
            this.currentExerciseIndex--;
            const prevExercise = this.getCurrentExercise();
            this.currentQuestionIndex = prevExercise.questions.length - 1;
            this.renderCurrentQuestion();
        }
    }
    
    updateProgressBar() {
        const questionNumber = this.getAbsoluteQuestionNumber();
        const percentage = (questionNumber / this.totalQuestions) * 100;
        document.getElementById('progress-bar-fill').style.width = percentage + '%';
        document.getElementById('progress-text').textContent = `${questionNumber}/${this.totalQuestions}`;
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');
        
        // Bouton Précédent
        if (this.currentExerciseIndex === 0 && this.currentQuestionIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
        
        // Boutons Suivant/Terminer
        const exercise = this.getCurrentExercise();
        const isLastQuestion = this.currentQuestionIndex === exercise.questions.length - 1;
        const isLastExercise = this.currentExerciseIndex === this.testData.exercises.length - 1;
        
        if (isLastQuestion && isLastExercise) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            finishBtn.style.display = 'none';
        }
    }
    
    finishTest() {
        // Calculer le score
        this.calculateScore();
        
        // Calculer le temps écoulé
        const endTime = Date.now();
        const timeSpent = Math.floor((endTime - this.startTime) / 1000 / 60); // en minutes
        
        // Sauvegarder les résultats
        this.saveResults(timeSpent);
        
        // Afficher les résultats
        this.showResults(timeSpent);
    }
    
    calculateScore() {
        this.score = 0;
        let questionIndex = 0;
        
        this.testData.exercises.forEach(exercise => {
            exercise.questions.forEach(question => {
                const userAnswer = this.userAnswers[questionIndex];
                
                if (question.type === 'multiple_choice') {
                    if (userAnswer === question.correctAnswer) {
                        this.score++;
                    }
                } else if (question.type === 'checklist') {
                    // Vérifier que toutes les bonnes réponses sont cochées
                    if (userAnswer && Array.isArray(userAnswer)) {
                        const correctSet = new Set(question.correctAnswers);
                        const userSet = new Set(userAnswer);
                        
                        if (correctSet.size === userSet.size && 
                            [...correctSet].every(val => userSet.has(val))) {
                            this.score++;
                        }
                    }
                }
                
                questionIndex++;
            });
        });
    }
    
    saveResults(timeSpent) {
        const testName = this.testData.title.includes('A2') ? 'test-a2' :
                         this.testData.title.includes('B1') ? 'test-b1' : 'test-b2';
        
        const result = {
            testName: testName,
            date: new Date().toISOString(),
            score: this.score,
            total: this.totalQuestions,
            percentage: Math.round((this.score / this.totalQuestions) * 100),
            timeSpent: timeSpent
        };
        
        // Sauvegarder dans localStorage
        let history = JSON.parse(localStorage.getItem('testHistory') || '[]');
        history.push(result);
        localStorage.setItem('testHistory', JSON.stringify(history));
        
        // Mettre à jour les stats globales
        this.updateStats(testName, this.score, this.totalQuestions);
    }
    
    updateStats(testName, score, total) {
        let stats = JSON.parse(localStorage.getItem('testStats') || '{}');
        
        if (!stats[testName]) {
            stats[testName] = {
                attempts: 0,
                totalScore: 0,
                totalQuestions: 0,
                bestScore: 0
            };
        }
        
        stats[testName].attempts++;
        stats[testName].totalScore += score;
        stats[testName].totalQuestions += total;
        
        const currentPercentage = Math.round((score / total) * 100);
        if (currentPercentage > stats[testName].bestScore) {
            stats[testName].bestScore = currentPercentage;
        }
        
        localStorage.setItem('testStats', JSON.stringify(stats));
    }
    
    showResults(timeSpent) {
        // Masquer le conteneur de questions
        document.getElementById('question-container').style.display = 'none';
        
        // Afficher les résultats
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.style.display = 'block';
        
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        
        // Déterminer le message selon le score
        let message, emoji, resultClass;
        if (percentage >= 90) {
            message = "Excellent ! 🎉 Vous maîtrisez parfaitement ce niveau !";
            emoji = "🏆";
            resultClass = "excellent";
        } else if (percentage >= 75) {
            message = "Très bien ! 👏 Vous avez un très bon niveau !";
            emoji = "⭐";
            resultClass = "good";
        } else if (percentage >= 60) {
            message = "Bien ! 👍 Continuez vos efforts !";
            emoji = "✅";
            resultClass = "average";
        } else {
            message = "À améliorer 📚 Révisez et réessayez !";
            emoji = "📖";
            resultClass = "needs-improvement";
        }
        
        document.getElementById('result-emoji').textContent = emoji;
        document.getElementById('result-message').textContent = message;
        document.getElementById('result-score').textContent = `${this.score}/${this.totalQuestions}`;
        document.getElementById('result-percentage').textContent = `${percentage}%`;
        document.getElementById('time-spent').textContent = `${timeSpent} min`;
        
        // Ajouter la classe de style
        resultsContainer.className = `results-card ${resultClass}`;
        
        // Afficher les corrections
        this.showCorrections();
    }
    
    showCorrections() {
        const correctionsContainer = document.getElementById('corrections-list');
        correctionsContainer.innerHTML = '';
        
        let questionIndex = 0;
        
        this.testData.exercises.forEach((exercise, exIndex) => {
            // Ajouter un titre de section
            const sectionTitle = document.createElement('h3');
            sectionTitle.className = 'correction-section-title';
            sectionTitle.textContent = exercise.section;
            correctionsContainer.appendChild(sectionTitle);
            
            exercise.questions.forEach((question, qIndex) => {
                questionIndex++;
                const userAnswer = this.userAnswers[questionIndex - 1];
                let isCorrect = false;
                
                if (question.type === 'multiple_choice') {
                    isCorrect = userAnswer === question.correctAnswer;
                } else if (question.type === 'checklist') {
                    if (userAnswer && Array.isArray(userAnswer)) {
                        const correctSet = new Set(question.correctAnswers);
                        const userSet = new Set(userAnswer);
                        isCorrect = correctSet.size === userSet.size && 
                                    [...correctSet].every(val => userSet.has(val));
                    }
                }
                
                const correctionItem = document.createElement('div');
                correctionItem.className = `correction-item ${isCorrect ? 'correct' : 'incorrect'}`;
                
                let userAnswerText = '';
                let correctAnswerText = '';
                
                if (question.type === 'multiple_choice') {
                    userAnswerText = userAnswer !== undefined ? question.options[userAnswer] : 'Pas de réponse';
                    correctAnswerText = question.options[question.correctAnswer];
                } else if (question.type === 'checklist') {
                    if (userAnswer && Array.isArray(userAnswer)) {
                        userAnswerText = userAnswer.map(i => question.options[i]).join(', ');
                    } else {
                        userAnswerText = 'Pas de réponse';
                    }
                    correctAnswerText = question.correctAnswers.map(i => question.options[i]).join(', ');
                }
                
                correctionItem.innerHTML = `
                    <div class="correction-header">
                        <span class="correction-icon">${isCorrect ? '✅' : '❌'}</span>
                        <span class="correction-number">Question ${questionIndex}</span>
                    </div>
                    <p class="correction-question">${question.question}</p>
                    <p class="correction-your-answer">
                        <strong>Votre réponse :</strong> ${userAnswerText}
                    </p>
                    ${!isCorrect ? `<p class="correction-correct-answer">
                        <strong>Bonne réponse :</strong> ${correctAnswerText}
                    </p>` : ''}
                    <p class="correction-explanation">
                        <strong>Explication :</strong> ${question.explanation}
                    </p>
                `;
                
                correctionsContainer.appendChild(correctionItem);
            });
        });
    }
    
    restartTest() {
        // Réinitialiser
        this.currentExerciseIndex = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        
        // Masquer les résultats
        document.getElementById('results-container').style.display = 'none';
        
        // Afficher les questions
        document.getElementById('question-container').style.display = 'block';
        
        // Recommencer
        this.start();
    }
}

// Export global
window.TestEngine = TestEngine;
