// DELF B1 - EXERCICES COMPLETS ET VARIÉS
// Basé sur les vrais formats d'examen DELF B1

const testB1Data = {
    title: "Test de Français - Niveau B1",
    description: "Exercices avancés : compréhension, grammaire, expression écrite et orale",
    duration: 60,
    totalQuestions: 40,
    exercises: [
        // ========== PARTIE 1 : COMPRÉHENSION ÉCRITE - ARTICLE DE PRESSE ==========
        {
            section: "Compréhension Écrite - Article",
            type: "reading",
            text: `Le télétravail : une révolution pour les salariés français\n\nDepuis la pandémie de 2020, le télétravail s'est imposé comme une nouvelle norme dans le monde professionnel français. Selon une étude récente, 38% des salariés français travaillent désormais au moins deux jours par semaine depuis leur domicile.\n\nCette transformation présente de nombreux avantages : gain de temps sur les trajets, meilleure conciliation vie professionnelle et vie personnelle, et réduction du stress. Cependant, certains inconvénients sont apparus : isolement social, difficulté à séparer vie privée et vie professionnelle, et problèmes de communication avec les collègues.\n\nLes entreprises doivent maintenant adapter leur management et investir dans des outils numériques performants pour maintenir la productivité et le bien-être de leurs employés.`,
            questions: [
                {
                    id: 1,
                    question: "Quel pourcentage de salariés français pratique le télétravail régulièrement ?",
                    type: "multiple_choice",
                    options: ["28%", "38%", "48%", "58%"],
                    correctAnswer: 1,
                    explanation: "Le texte indique que '38% des salariés français travaillent désormais au moins deux jours par semaine depuis leur domicile'."
                },
                {
                    id: 2,
                    question: "Quel est l'un des avantages du télétravail mentionné ?",
                    type: "multiple_choice",
                    options: [
                        "Augmentation du salaire",
                        "Plus de vacances",
                        "Gain de temps sur les trajets",
                        "Promotion plus rapide"
                    ],
                    correctAnswer: 2,
                    explanation: "Le texte mentionne 'gain de temps sur les trajets' comme avantage."
                },
                {
                    id: 3,
                    question: "Quel problème du télétravail est évoqué ?",
                    type: "multiple_choice",
                    options: [
                        "Coût trop élevé",
                        "Isolement social",
                        "Salaire réduit",
                        "Horaires trop longs"
                    ],
                    correctAnswer: 1,
                    explanation: "L'isolement social est cité comme l'un des inconvénients."
                },
                {
                    id: 4,
                    question: "Que doivent faire les entreprises selon le texte ?",
                    type: "multiple_choice",
                    options: [
                        "Interdire le télétravail",
                        "Adapter leur management",
                        "Augmenter les salaires",
                        "Réduire les effectifs"
                    ],
                    correctAnswer: 1,
                    explanation: "Le texte dit que 'les entreprises doivent maintenant adapter leur management'."
                }
            ]
        },
        
        // ========== PARTIE 2 : GRAMMAIRE - SUBJONCTIF ==========
        {
            section: "Grammaire - Subjonctif",
            type: "grammar",
            questions: [
                {
                    id: 5,
                    question: "Il faut que tu ___ (être) à l'heure demain.",
                    type: "multiple_choice",
                    options: ["es", "sois", "étais", "seras"],
                    correctAnswer: 1,
                    explanation: "Après 'il faut que', on utilise le subjonctif : 'tu sois'."
                },
                {
                    id: 6,
                    question: "Je souhaite qu'ils ___ (réussir) leur examen.",
                    type: "multiple_choice",
                    options: ["réussissent", "réussiront", "réussisent", "ont réussi"],
                    correctAnswer: 0,
                    explanation: "Après 'souhaiter que', subjonctif : 'qu'ils réussissent'."
                },
                {
                    id: 7,
                    question: "Bien que je ___ (avoir) peu de temps, je viendrai.",
                    type: "multiple_choice",
                    options: ["ai", "aie", "avais", "aurai"],
                    correctAnswer: 1,
                    explanation: "Après 'bien que', subjonctif : 'j'aie'."
                },
                {
                    id: 8,
                    question: "Il est important que nous ___ (savoir) la vérité.",
                    type: "multiple_choice",
                    options: ["savons", "sachions", "saurons", "savions"],
                    correctAnswer: 1,
                    explanation: "Après 'il est important que', subjonctif : 'nous sachions'."
                }
            ]
        },
        
        // ========== PARTIE 3 : VOCABULAIRE PROFESSIONNEL ==========
        {
            section: "Vocabulaire - Monde du Travail",
            type: "vocabulary",
            questions: [
                {
                    id: 9,
                    question: "Quel mot désigne une 'job interview' ?",
                    type: "multiple_choice",
                    options: ["Entrevue", "Entretien d'embauche", "Rencontre", "Discussion"],
                    correctAnswer: 1,
                    explanation: "'Job interview' se traduit par 'entretien d'embauche'."
                },
                {
                    id: 10,
                    question: "Comment appelle-t-on quelqu'un qui cherche du travail ?",
                    type: "multiple_choice",
                    options: ["Demandeur d'emploi", "Travailleur", "Candidat", "Employé"],
                    correctAnswer: 0,
                    explanation: "Une personne qui cherche du travail est un 'demandeur d'emploi'."
                },
                {
                    id: 11,
                    question: "Que signifie 'postuler' ?",
                    type: "multiple_choice",
                    options: [
                        "Travailler",
                        "Démissionner",
                        "Candidater pour un poste",
                        "Être promu"
                    ],
                    correctAnswer: 2,
                    explanation: "'Postuler' signifie 'candidater pour un poste'."
                },
                {
                    id: 12,
                    question: "Un 'CV' signifie :",
                    type: "multiple_choice",
                    options: [
                        "Carte de Visite",
                        "Curriculum Vitae",
                        "Contrat de Vente",
                        "Certificat de Validation"
                    ],
                    correctAnswer: 1,
                    explanation: "CV = Curriculum Vitae (parcours de vie professionnelle)."
                }
            ]
        },
        
        // ========== PARTIE 4 : COMPRÉHENSION - EMAIL FORMEL ==========
        {
            section: "Compréhension - Correspondance",
            type: "reading",
            text: `Objet : Demande de congé\n\nMadame la Directrice,\n\nJe me permets de vous écrire afin de solliciter un congé de deux semaines du 15 au 29 août prochain. Cette demande est motivée par un voyage familial que nous organisons depuis plusieurs mois.\n\nJ'ai déjà discuté avec mon collègue Pierre Durand qui a accepté de me remplacer pendant mon absence. J'ai également préparé un document récapitulatif de tous mes dossiers en cours et des tâches à effectuer.\n\nJe reste à votre disposition pour tout complément d'information.\n\nJe vous prie d'agréer, Madame la Directrice, l'expression de mes salutations distinguées.\n\nMarc Leblanc\nService Commercial`,
            questions: [
                {
                    id: 13,
                    question: "Combien de jours de congé Marc demande-t-il ?",
                    type: "multiple_choice",
                    options: ["1 semaine", "2 semaines", "3 semaines", "1 mois"],
                    correctAnswer: 1,
                    explanation: "Marc demande 'un congé de deux semaines'."
                },
                {
                    id: 14,
                    question: "Pourquoi Marc demande-t-il ce congé ?",
                    type: "multiple_choice",
                    options: [
                        "Pour raisons médicales",
                        "Pour un voyage familial",
                        "Pour déménager",
                        "Pour une formation"
                    ],
                    correctAnswer: 1,
                    explanation: "La demande est motivée par 'un voyage familial'."
                },
                {
                    id: 15,
                    question: "Qui va remplacer Marc pendant son absence ?",
                    type: "multiple_choice",
                    options: ["Sa directrice", "Pierre Durand", "Personne", "Un stagiaire"],
                    correctAnswer: 1,
                    explanation: "Pierre Durand 'a accepté de me remplacer pendant mon absence'."
                },
                {
                    id: 16,
                    question: "Quel type de document est-ce ?",
                    type: "multiple_choice",
                    options: [
                        "Email informel",
                        "Email formel professionnel",
                        "Lettre de motivation",
                        "Réclamation"
                    ],
                    correctAnswer: 1,
                    explanation: "C'est un email formel adressé à une directrice avec formules de politesse."
                }
            ]
        },
        
        // ========== PARTIE 5 : GRAMMAIRE - PRONOMS RELATIFS ==========
        {
            section: "Grammaire - Pronoms Relatifs",
            type: "grammar",
            questions: [
                {
                    id: 17,
                    question: "C'est le livre ___ je t'ai parlé.",
                    type: "multiple_choice",
                    options: ["que", "qui", "dont", "où"],
                    correctAnswer: 2,
                    explanation: "'Parler de quelque chose' → 'dont' : 'le livre dont je t'ai parlé'."
                },
                {
                    id: 18,
                    question: "La ville ___ j'habite est très agréable.",
                    type: "multiple_choice",
                    options: ["que", "qui", "où", "dont"],
                    correctAnswer: 2,
                    explanation: "'Habiter à/dans' un lieu → 'où' : 'la ville où j'habite'."
                },
                {
                    id: 19,
                    question: "L'homme ___ tu vois là-bas est mon oncle.",
                    type: "multiple_choice",
                    options: ["qui", "que", "dont", "où"],
                    correctAnswer: 1,
                    explanation: "'Tu vois l'homme' (COD) → 'que' : 'l'homme que tu vois'."
                },
                {
                    id: 20,
                    question: "Les amis ___ viennent ce soir sont sympathiques.",
                    type: "multiple_choice",
                    options: ["que", "qui", "dont", "où"],
                    correctAnswer: 1,
                    explanation: "'Les amis viennent' (sujet) → 'qui' : 'les amis qui viennent'."
                }
            ]
        },
        
        // ========== PARTIE 6 : EXPRESSION DE L'OPINION ==========
        {
            section: "Expression de l'Opinion",
            type: "communication",
            questions: [
                {
                    id: 21,
                    question: "Comment exprimer un accord total ?",
                    type: "multiple_choice",
                    options: [
                        "Peut-être.",
                        "Je suis tout à fait d'accord.",
                        "Ce n'est pas mal.",
                        "Je ne sais pas."
                    ],
                    correctAnswer: 1,
                    explanation: "'Je suis tout à fait d'accord' exprime un accord total."
                },
                {
                    id: 22,
                    question: "Quelle expression indique un désaccord poli ?",
                    type: "multiple_choice",
                    options: [
                        "C'est nul !",
                        "Tu as tort !",
                        "Je ne partage pas vraiment ce point de vue.",
                        "N'importe quoi !"
                    ],
                    correctAnswer: 2,
                    explanation: "'Je ne partage pas vraiment ce point de vue' est un désaccord poli."
                },
                {
                    id: 23,
                    question: "Comment introduire son opinion ?",
                    type: "multiple_choice",
                    options: [
                        "C'est comme ça !",
                        "À mon avis, ...",
                        "Évidemment !",
                        "Forcément !"
                    ],
                    correctAnswer: 1,
                    explanation: "'À mon avis' ou 'selon moi' introduit une opinion personnelle."
                }
            ]
        },
        
        // ========== PARTIE 7 : VOCABULAIRE - VIE SOCIALE ==========
        {
            section: "Vocabulaire - Vie Sociale",
            type: "vocabulary",
            questions: [
                {
                    id: 24,
                    question: "Que signifie 'une soirée arrosée' ?",
                    type: "multiple_choice",
                    options: [
                        "Une soirée pluvieuse",
                        "Une soirée où on boit de l'alcool",
                        "Une soirée à la piscine",
                        "Une soirée ennuyeuse"
                    ],
                    correctAnswer: 1,
                    explanation: "'Une soirée arrosée' = une soirée avec beaucoup d'alcool."
                },
                {
                    id: 25,
                    question: "Qu'est-ce qu'un 'pot de départ' ?",
                    type: "multiple_choice",
                    options: [
                        "Un début de repas",
                        "Une fête pour dire au revoir",
                        "Une pause café",
                        "Un apéritif"
                    ],
                    correctAnswer: 1,
                    explanation: "Un 'pot de départ' est une fête organisée quand quelqu'un quitte l'entreprise."
                },
                {
                    id: 26,
                    question: "Que veut dire 'passer un coup de fil' ?",
                    type: "multiple_choice",
                    options: [
                        "Envoyer un email",
                        "Téléphoner à quelqu'un",
                        "Rendre visite",
                        "Écrire une lettre"
                    ],
                    correctAnswer: 1,
                    explanation: "'Passer un coup de fil' = téléphoner."
                }
            ]
        },
        
        // ========== PARTIE 8 : GRAMMAIRE - CONDITIONNEL ==========
        {
            section: "Grammaire - Conditionnel",
            type: "grammar",
            questions: [
                {
                    id: 27,
                    question: "Si j'avais de l'argent, je ___ (voyager) dans le monde entier.",
                    type: "multiple_choice",
                    options: ["voyage", "voyagerais", "voyagerai", "ai voyagé"],
                    correctAnswer: 1,
                    explanation: "Hypothèse irréelle (si + imparfait) → conditionnel : 'je voyagerais'."
                },
                {
                    id: 28,
                    question: "Tu ___ (pouvoir) m'aider, s'il te plaît ? (demande polie)",
                    type: "multiple_choice",
                    options: ["peux", "pourrais", "pourras", "as pu"],
                    correctAnswer: 1,
                    explanation: "Pour une demande polie, on utilise le conditionnel : 'tu pourrais'."
                },
                {
                    id: 29,
                    question: "Ils ont dit qu'ils ___ (venir) demain.",
                    type: "multiple_choice",
                    options: ["viennent", "viendront", "viendraient", "sont venus"],
                    correctAnswer: 2,
                    explanation: "Concordance des temps (futur dans le passé) : 'ils viendraient'."
                },
                {
                    id: 30,
                    question: "À ta place, je ___ (accepter) cette offre.",
                    type: "multiple_choice",
                    options: ["accepte", "accepterais", "accepterai", "ai accepté"],
                    correctAnswer: 1,
                    explanation: "Pour donner un conseil : 'j'accepterais' (conditionnel)."
                }
            ]
        },
        
        // ========== PARTIE 9 : COMPRÉHENSION - PUBLICITÉ ==========
        {
            section: "Compréhension - Annonce Publicitaire",
            type: "reading",
            text: `NOUVEAU ! ABONNEMENT SPORT ILLIMITÉ\n\nDécouvrez notre offre exclusive :\n- Accès illimité à toutes nos salles en France\n- Plus de 50 cours collectifs par semaine\n- Coaching personnalisé inclus\n- Piscine olympique et spa\n- Sans engagement !\n\nTarif spécial lancement : 39€/mois au lieu de 59€\n(Offre valable jusqu'au 31 juillet)\n\nInscription en ligne : www.sport-plus.fr\nPremière séance d'essai gratuite !`,
            questions: [
                {
                    id: 31,
                    question: "Quel est le tarif promotionnel ?",
                    type: "multiple_choice",
                    options: ["29€/mois", "39€/mois", "49€/mois", "59€/mois"],
                    correctAnswer: 1,
                    explanation: "Le tarif spécial est '39€/mois au lieu de 59€'."
                },
                {
                    id: 32,
                    question: "Jusqu'à quand l'offre est-elle valable ?",
                    type: "multiple_choice",
                    options: ["30 juin", "31 juillet", "31 août", "31 décembre"],
                    correctAnswer: 1,
                    explanation: "L'offre est 'valable jusqu'au 31 juillet'."
                },
                {
                    id: 33,
                    question: "Quel avantage est mentionné ?",
                    type: "multiple_choice",
                    options: [
                        "Transport inclus",
                        "Repas gratuits",
                        "Coaching personnalisé inclus",
                        "Équipement offert"
                    ],
                    correctAnswer: 2,
                    explanation: "L'offre inclut 'Coaching personnalisé inclus'."
                }
            ]
        },
        
        // ========== PARTIE 10 : PRODUCTION ÉCRITE - LETTRE FORMELLE ==========
        {
            section: "Production Écrite - Lettre Formelle",
            type: "writing",
            instruction: "Vous avez réservé un hôtel mais vous devez annuler. Écrivez un email formel (60-80 mots) pour expliquer la situation et demander un remboursement.",
            example: "Exemple de structure :\n- Formule d'appel : Madame, Monsieur,\n- Objet de la lettre\n- Explication de la situation\n- Demande précise\n- Formule de politesse finale",
            questions: [
                {
                    id: 34,
                    question: "Dans une lettre formelle d'annulation, vous devez inclure :",
                    type: "checklist",
                    options: [
                        "La formule d'appel formelle",
                        "La raison de l'annulation",
                        "Le numéro de réservation",
                        "Une demande de remboursement",
                        "Une formule de politesse finale"
                    ],
                    correctAnswers: [0, 1, 2, 3, 4],
                    explanation: "Une lettre formelle complète doit contenir tous ces éléments."
                }
            ]
        },
        
        // ========== PARTIE 11 : VOCABULAIRE - EXPRESSION IDIOMATIQUES ==========
        {
            section: "Expressions Idiomatiques",
            type: "vocabulary",
            questions: [
                {
                    id: 35,
                    question: "Que signifie 'avoir le coup de foudre' ?",
                    type: "multiple_choice",
                    options: [
                        "Avoir peur de l'orage",
                        "Tomber amoureux immédiatement",
                        "Être en colère",
                        "Avoir de la chance"
                    ],
                    correctAnswer: 1,
                    explanation: "'Avoir le coup de foudre' = tomber amoureux au premier regard."
                },
                {
                    id: 36,
                    question: "'Casser les pieds à quelqu'un' signifie :",
                    type: "multiple_choice",
                    options: [
                        "Faire mal aux pieds",
                        "Embêter, ennuyer quelqu'un",
                        "Aider quelqu'un",
                        "Marcher sur les pieds"
                    ],
                    correctAnswer: 1,
                    explanation: "'Casser les pieds' = embêter, ennuyer fortement."
                },
                {
                    id: 37,
                    question: "'Coûter les yeux de la tête' veut dire :",
                    type: "multiple_choice",
                    options: [
                        "Être très dangereux",
                        "Être très cher",
                        "Être très beau",
                        "Être très difficile"
                    ],
                    correctAnswer: 1,
                    explanation: "'Coûter les yeux de la tête' = être extrêmement cher."
                }
            ]
        },
        
        // ========== PARTIE 12 : GRAMMAIRE - DISCOURS INDIRECT ==========
        {
            section: "Grammaire - Discours Indirect",
            type: "grammar",
            questions: [
                {
                    id: 38,
                    question: "Marie dit : 'Je suis fatiguée.' → Marie dit qu'elle ___ fatiguée.",
                    type: "multiple_choice",
                    options: ["suis", "es", "est", "était"],
                    correctAnswer: 2,
                    explanation: "Discours indirect au présent : 'elle est fatiguée'."
                },
                {
                    id: 39,
                    question: "Il a demandé : 'Où habites-tu ?' → Il a demandé où ___.",
                    type: "multiple_choice",
                    options: ["habites-tu", "tu habites", "habitais-tu", "tu habitais"],
                    correctAnswer: 3,
                    explanation: "Discours indirect au passé : concordance des temps → 'tu habitais'."
                },
                {
                    id: 40,
                    question: "Paul a dit : 'Je viendrai demain.' → Paul a dit qu'il ___ le lendemain.",
                    type: "multiple_choice",
                    options: ["viendra", "viendrait", "vient", "venait"],
                    correctAnswer: 1,
                    explanation: "Futur dans le discours indirect passé → conditionnel : 'viendrait'."
                }
            ]
        }
    ]
};

// Export pour utilisation dans l'application
window.testB1Data = testB1Data;
