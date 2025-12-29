// DELF A2 - EXERCICES COMPLETS ET VARIÉS
// Basé sur les vrais formats d'examen DELF

const testA2Data = {
    title: "Test de Français - Niveau A2",
    description: "Exercices variés de compréhension, grammaire, vocabulaire et production écrite",
    duration: 45,
    totalQuestions: 30,
    exercises: [
        // ========== PARTIE 1 : COMPRÉHENSION ÉCRITE ==========
        {
            section: "Compréhension Écrite",
            type: "reading",
            text: `Bonjour,\n\nJe m'appelle Marie et j'habite à Lyon depuis trois ans. Je suis professeure de français dans une école internationale. Tous les matins, je me réveille à 7h00, je prends mon petit-déjeuner et je vais au travail en vélo. J'aime beaucoup mon travail parce que mes élèves sont sympas et motivés.\n\nLe week-end, j'aime faire du sport. Je fais du yoga le samedi matin et je vais à la piscine le dimanche après-midi. J'aime aussi lire des romans et écouter de la musique.\n\nCordialement,\nMarie`,
            questions: [
                {
                    id: 1,
                    question: "Où habite Marie ?",
                    type: "multiple_choice",
                    options: ["À Paris", "À Lyon", "À Marseille", "À Nice"],
                    correctAnswer: 1,
                    explanation: "Marie dit : 'J'habite à Lyon depuis trois ans.'"
                },
                {
                    id: 2,
                    question: "Quel est le métier de Marie ?",
                    type: "multiple_choice",
                    options: ["Médecin", "Avocate", "Professeure", "Infirmière"],
                    correctAnswer: 2,
                    explanation: "Marie est 'professeure de français dans une école internationale'."
                },
                {
                    id: 3,
                    question: "Comment va-t-elle au travail ?",
                    type: "multiple_choice",
                    options: ["En voiture", "En métro", "En vélo", "À pied"],
                    correctAnswer: 2,
                    explanation: "Marie dit : 'je vais au travail en vélo'."
                },
                {
                    id: 4,
                    question: "Que fait Marie le samedi matin ?",
                    type: "multiple_choice",
                    options: ["Du vélo", "Du yoga", "De la natation", "De la lecture"],
                    correctAnswer: 1,
                    explanation: "Marie fait 'du yoga le samedi matin'."
                }
            ]
        },
        
        // ========== PARTIE 2 : GRAMMAIRE - CONJUGAISON ==========
        {
            section: "Grammaire - Conjugaison",
            type: "grammar",
            questions: [
                {
                    id: 5,
                    question: "Je ___ (aller) au cinéma demain.",
                    type: "multiple_choice",
                    options: ["vais", "allais", "irai", "irais"],
                    correctAnswer: 0,
                    explanation: "Au présent avec 'demain', on utilise le présent : 'je vais'."
                },
                {
                    id: 6,
                    question: "Hier, nous ___ (manger) au restaurant.",
                    type: "multiple_choice",
                    options: ["mangeons", "avons mangé", "mangions", "mangerons"],
                    correctAnswer: 1,
                    explanation: "'Hier' indique le passé composé : 'nous avons mangé'."
                },
                {
                    id: 7,
                    question: "Ils ___ (être) contents de vous voir.",
                    type: "multiple_choice",
                    options: ["sont", "étaient", "seront", "soient"],
                    correctAnswer: 0,
                    explanation: "Au présent, 3e personne du pluriel : 'ils sont'."
                },
                {
                    id: 8,
                    question: "Tu ___ (finir) tes devoirs ce soir ?",
                    type: "multiple_choice",
                    options: ["finis", "finiras", "as fini", "finissais"],
                    correctAnswer: 0,
                    explanation: "Question au présent avec 'ce soir' : 'tu finis'."
                }
            ]
        },
        
        // ========== PARTIE 3 : GRAMMAIRE - ARTICLES ET PRONOMS ==========
        {
            section: "Grammaire - Articles et Pronoms",
            type: "grammar",
            questions: [
                {
                    id: 9,
                    question: "J'ai acheté ___ pain et ___ fruits.",
                    type: "multiple_choice",
                    options: ["le, les", "du, des", "un, des", "le, des"],
                    correctAnswer: 1,
                    explanation: "Articles partitifs : 'du pain' (non comptable) et 'des fruits' (pluriel)."
                },
                {
                    id: 10,
                    question: "Tu connais Marie ? Oui, je ___ connais bien.",
                    type: "multiple_choice",
                    options: ["le", "la", "les", "l'"],
                    correctAnswer: 1,
                    explanation: "Pronom COD féminin : 'je la connais'."
                },
                {
                    id: 11,
                    question: "Il parle ___ ses enfants tous les jours.",
                    type: "multiple_choice",
                    options: ["à", "de", "avec", "pour"],
                    correctAnswer: 0,
                    explanation: "'Parler à quelqu'un' : 'il parle à ses enfants'."
                },
                {
                    id: 12,
                    question: "___ appartement est grand et lumineux.",
                    type: "multiple_choice",
                    options: ["Mon", "Ma", "Mes", "Notre"],
                    correctAnswer: 0,
                    explanation: "Adjectif possessif masculin singulier : 'mon appartement'."
                }
            ]
        },
        
        // ========== PARTIE 4 : VOCABULAIRE - VIE QUOTIDIENNE ==========
        {
            section: "Vocabulaire - Vie Quotidienne",
            type: "vocabulary",
            questions: [
                {
                    id: 13,
                    question: "Quel mot correspond à 'meal' en anglais ?",
                    type: "multiple_choice",
                    options: ["Repas", "Pain", "Viande", "Légume"],
                    correctAnswer: 0,
                    explanation: "'Meal' se traduit par 'repas' en français."
                },
                {
                    id: 14,
                    question: "Complétez : 'Je vais à la ___ pour acheter des médicaments.'",
                    type: "multiple_choice",
                    options: ["boulangerie", "pharmacie", "boucherie", "librairie"],
                    correctAnswer: 1,
                    explanation: "On achète des médicaments à la pharmacie."
                },
                {
                    id: 15,
                    question: "Quel est le contraire de 'chaud' ?",
                    type: "multiple_choice",
                    options: ["Tiède", "Froid", "Frais", "Glacé"],
                    correctAnswer: 1,
                    explanation: "Le contraire de 'chaud' est 'froid'."
                },
                {
                    id: 16,
                    question: "Comment dit-on 'weather' en français ?",
                    type: "multiple_choice",
                    options: ["Temps", "Saison", "Climat", "Température"],
                    correctAnswer: 0,
                    explanation: "'Weather' se traduit par 'temps' (le temps qu'il fait)."
                }
            ]
        },
        
        // ========== PARTIE 5 : COMPRÉHENSION - ANNONCES ==========
        {
            section: "Compréhension - Annonces",
            type: "reading",
            text: `LOCATION APPARTEMENT\n\nAppartement F3 à louer dans le centre-ville de Bordeaux.\n- 65 m²\n- 2 chambres\n- Cuisine équipée\n- Salle de bain avec baignoire\n- Parking inclus\n- 850€/mois + 100€ de charges\n- Disponible le 1er septembre\n\nContact : 06 12 34 56 78`,
            questions: [
                {
                    id: 17,
                    question: "Combien de chambres y a-t-il ?",
                    type: "multiple_choice",
                    options: ["1", "2", "3", "4"],
                    correctAnswer: 1,
                    explanation: "L'annonce indique '2 chambres'."
                },
                {
                    id: 18,
                    question: "Quel est le loyer total par mois (loyer + charges) ?",
                    type: "multiple_choice",
                    options: ["850€", "900€", "950€", "1000€"],
                    correctAnswer: 2,
                    explanation: "850€ (loyer) + 100€ (charges) = 950€ au total."
                },
                {
                    id: 19,
                    question: "Quand l'appartement est-il disponible ?",
                    type: "multiple_choice",
                    options: ["Immédiatement", "Le 1er août", "Le 1er septembre", "Le 1er octobre"],
                    correctAnswer: 2,
                    explanation: "L'annonce précise 'Disponible le 1er septembre'."
                }
            ]
        },
        
        // ========== PARTIE 6 : SITUATIONS DE COMMUNICATION ==========
        {
            section: "Situations de Communication",
            type: "communication",
            questions: [
                {
                    id: 20,
                    question: "Vous voulez demander l'heure poliment. Que dites-vous ?",
                    type: "multiple_choice",
                    options: [
                        "Quelle heure ?",
                        "Excusez-moi, vous avez l'heure s'il vous plaît ?",
                        "Dis-moi l'heure !",
                        "L'heure, c'est quoi ?"
                    ],
                    correctAnswer: 1,
                    explanation: "La formule polie est 'Excusez-moi, vous avez l'heure s'il vous plaît ?'"
                },
                {
                    id: 21,
                    question: "Au restaurant, comment demandez-vous l'addition ?",
                    type: "multiple_choice",
                    options: [
                        "Je veux payer !",
                        "L'addition, s'il vous plaît.",
                        "Combien je dois ?",
                        "Donnez-moi la facture !"
                    ],
                    correctAnswer: 1,
                    explanation: "On demande poliment 'L'addition, s'il vous plaît.'"
                },
                {
                    id: 22,
                    question: "Comment répondez-vous à 'Comment allez-vous ?' de manière formelle ?",
                    type: "multiple_choice",
                    options: [
                        "Ça va.",
                        "Très bien, merci. Et vous ?",
                        "Super !",
                        "Pas mal."
                    ],
                    correctAnswer: 1,
                    explanation: "La réponse formelle est 'Très bien, merci. Et vous ?'"
                }
            ]
        },
        
        // ========== PARTIE 7 : VOCABULAIRE - FAMILLE ET RELATIONS ==========
        {
            section: "Vocabulaire - Famille",
            type: "vocabulary",
            questions: [
                {
                    id: 23,
                    question: "Le frère de mon père est mon ___.",
                    type: "multiple_choice",
                    options: ["cousin", "oncle", "neveu", "grand-père"],
                    correctAnswer: 1,
                    explanation: "Le frère de votre père est votre oncle."
                },
                {
                    id: 24,
                    question: "La mère de ma mère est ma ___.",
                    type: "multiple_choice",
                    options: ["tante", "cousine", "grand-mère", "belle-mère"],
                    correctAnswer: 2,
                    explanation: "La mère de votre mère est votre grand-mère."
                },
                {
                    id: 25,
                    question: "Les enfants de mon frère sont mes ___.",
                    type: "multiple_choice",
                    options: ["cousins", "neveux", "fils", "petits-enfants"],
                    correctAnswer: 1,
                    explanation: "Les enfants de votre frère sont vos neveux (ou nièces)."
                }
            ]
        },
        
        // ========== PARTIE 8 : GRAMMAIRE - NÉGATION ==========
        {
            section: "Grammaire - Négation",
            type: "grammar",
            questions: [
                {
                    id: 26,
                    question: "Je ___ parle ___ français.",
                    type: "multiple_choice",
                    options: ["ne...pas", "ne...jamais", "ne...plus", "ne...rien"],
                    correctAnswer: 0,
                    explanation: "Pour dire 'I don't speak' : 'Je ne parle pas français'."
                },
                {
                    id: 27,
                    question: "Il n'y a ___ dans le frigo.",
                    type: "multiple_choice",
                    options: ["pas", "jamais", "rien", "personne"],
                    correctAnswer: 2,
                    explanation: "'Il n'y a rien' signifie 'there is nothing'."
                },
                {
                    id: 28,
                    question: "Nous ne mangeons ___ de viande.",
                    type: "multiple_choice",
                    options: ["pas", "jamais", "plus", "rien"],
                    correctAnswer: 2,
                    explanation: "'Ne...plus' indique l'arrêt d'une habitude : 'nous ne mangeons plus de viande'."
                }
            ]
        },
        
        // ========== PARTIE 9 : PRODUCTION ÉCRITE GUIDÉE ==========
        {
            section: "Production Écrite",
            type: "writing",
            instruction: "Écrivez un court message (40-50 mots) pour inviter un ami à votre anniversaire. Indiquez la date, l'heure et le lieu.",
            example: "Exemple :\nSalut Pierre,\nC'est mon anniversaire samedi prochain ! Je t'invite à ma fête chez moi à 19h00. On va manger, danser et s'amuser. J'espère que tu peux venir !\nBises,\nSophie",
            questions: [
                {
                    id: 29,
                    question: "Dans votre message, vous devez mentionner :",
                    type: "checklist",
                    options: [
                        "La date de l'anniversaire",
                        "L'heure de la fête",
                        "Le lieu",
                        "Les activités prévues"
                    ],
                    correctAnswers: [0, 1, 2],
                    explanation: "Un message d'invitation doit contenir : date, heure et lieu (minimum)."
                }
            ]
        },
        
        // ========== PARTIE 10 : COMPRÉHENSION - HORAIRES ==========
        {
            section: "Compréhension - Horaires",
            type: "reading",
            text: `HORAIRES DE LA BIBLIOTHÈQUE MUNICIPALE\n\nLundi : Fermé\nMardi - Vendredi : 10h00 - 18h00\nSamedi : 9h00 - 17h00\nDimanche : 14h00 - 18h00\n\nServices :\n- Prêt de livres (gratuit avec carte)\n- Accès Internet (30 min gratuites)\n- Espace enfants\n- Salle de travail`,
            questions: [
                {
                    id: 30,
                    question: "La bibliothèque est fermée quel jour ?",
                    type: "multiple_choice",
                    options: ["Dimanche", "Lundi", "Samedi", "Vendredi"],
                    correctAnswer: 1,
                    explanation: "Les horaires indiquent 'Lundi : Fermé'."
                }
            ]
        }
    ]
};

// Export pour utilisation dans l'application
window.testA2Data = testA2Data;
