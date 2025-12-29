// DELF B2 - EXERCICES COMPLETS ET AVANCÉS
// Basé sur les vrais formats d'examen DELF B2

const testB2Data = {
    title: "Test de Français - Niveau B2",
    description: "Exercices avancés : analyse, argumentation, grammaire complexe et production structurée",
    duration: 75,
    totalQuestions: 45,
    exercises: [
        // ========== PARTIE 1 : COMPRÉHENSION ÉCRITE - ARTICLE ARGUMENTATIF ==========
        {
            section: "Compréhension Écrite - Débat de Société",
            type: "reading",
            text: `L'intelligence artificielle : menace ou opportunité pour l'emploi ?\n\nL'essor fulgurant de l'intelligence artificielle (IA) soulève de nombreuses interrogations quant à son impact sur le marché du travail. Certains experts prédisent une vague de suppressions d'emplois sans précédent, notamment dans les secteurs administratifs et industriels. D'autres, au contraire, estiment que l'IA créera davantage d'opportunités qu'elle n'en détruira.\n\nLes pessimistes soulignent que 47% des emplois actuels pourraient être automatisés d'ici 2030. Les métiers répétitifs, comme la saisie de données ou la comptabilité basique, sont particulièrement vulnérables. Cette transformation risque d'accentuer les inégalités sociales, laissant de nombreux travailleurs peu qualifiés sur le carreau.\n\nÀ l'inverse, les optimistes arguent que l'IA libérera les humains des tâches les plus ingrates pour les orienter vers des activités à plus forte valeur ajoutée. L'histoire montre que chaque révolution technologique a finalement créé plus d'emplois qu'elle n'en a supprimé. De nouveaux métiers émergeront, nécessitant des compétences en gestion de l'IA, en data science ou en éthique numérique.\n\nLe défi majeur réside donc dans l'accompagnement des travailleurs : formation continue, reconversion professionnelle et adaptation des systèmes éducatifs seront essentiels pour réussir cette transition.`,
            questions: [
                {
                    id: 1,
                    question: "Quel est le thème principal de cet article ?",
                    type: "multiple_choice",
                    options: [
                        "Les avantages de l'IA",
                        "L'impact de l'IA sur l'emploi",
                        "L'histoire de l'IA",
                        "Les métiers du futur"
                    ],
                    correctAnswer: 1,
                    explanation: "L'article débat de l'impact de l'intelligence artificielle sur l'emploi."
                },
                {
                    id: 2,
                    question: "Selon les pessimistes, quel pourcentage d'emplois pourrait être automatisé ?",
                    type: "multiple_choice",
                    options: ["37%", "47%", "57%", "67%"],
                    correctAnswer: 1,
                    explanation: "Le texte indique '47% des emplois actuels pourraient être automatisés d'ici 2030'."
                },
                {
                    id: 3,
                    question: "Quel argument avancent les optimistes ?",
                    type: "multiple_choice",
                    options: [
                        "L'IA supprimera tous les emplois",
                        "L'IA créera plus d'emplois qu'elle n'en détruira",
                        "L'IA n'aura aucun impact",
                        "L'IA est dangereuse"
                    ],
                    correctAnswer: 1,
                    explanation: "Les optimistes 'estiment que l'IA créera davantage d'opportunités qu'elle n'en détruira'."
                },
                {
                    id: 4,
                    question: "Quelle solution est proposée pour réussir la transition ?",
                    type: "multiple_choice",
                    options: [
                        "Interdire l'IA",
                        "Ne rien changer",
                        "Formation continue et reconversion",
                        "Augmenter les salaires"
                    ],
                    correctAnswer: 2,
                    explanation: "Le texte mentionne 'formation continue, reconversion professionnelle' comme solutions."
                },
                {
                    id: 5,
                    question: "Le ton de l'article est :",
                    type: "multiple_choice",
                    options: [
                        "Totalement négatif",
                        "Totalement positif",
                        "Nuancé et équilibré",
                        "Ironique"
                    ],
                    correctAnswer: 2,
                    explanation: "L'article présente les deux points de vue (pessimiste et optimiste) de manière équilibrée."
                }
            ]
        },
        
        // ========== PARTIE 2 : GRAMMAIRE - CONCORDANCE DES TEMPS ==========
        {
            section: "Grammaire - Concordance des Temps",
            type: "grammar",
            questions: [
                {
                    id: 6,
                    question: "Si j'avais su, je ___ (ne pas venir).",
                    type: "multiple_choice",
                    options: [
                        "ne viendrais pas",
                        "ne serais pas venu",
                        "ne viens pas",
                        "n'étais pas venu"
                    ],
                    correctAnswer: 1,
                    explanation: "Hypothèse irréelle au passé (si + plus-que-parfait) → conditionnel passé : 'je ne serais pas venu'."
                },
                {
                    id: 7,
                    question: "Il a affirmé qu'il ___ (terminer) le projet la semaine précédente.",
                    type: "multiple_choice",
                    options: [
                        "a terminé",
                        "terminait",
                        "avait terminé",
                        "terminerait"
                    ],
                    correctAnswer: 2,
                    explanation: "Antériorité dans le passé → plus-que-parfait : 'avait terminé'."
                },
                {
                    id: 8,
                    question: "Bien qu'il ___ (pleuvoir), nous sommes sortis.",
                    type: "multiple_choice",
                    options: [
                        "pleuve",
                        "pleuvait",
                        "ait plu",
                        "a plu"
                    ],
                    correctAnswer: 2,
                    explanation: "Après 'bien que' + action passée → subjonctif passé : 'ait plu'."
                },
                {
                    id: 9,
                    question: "Dès que tu ___ (arriver), appelle-moi !",
                    type: "multiple_choice",
                    options: [
                        "arrives",
                        "arriveras",
                        "seras arrivé",
                        "es arrivé"
                    ],
                    correctAnswer: 2,
                    explanation: "Après 'dès que' + action future antérieure → futur antérieur : 'seras arrivé'."
                }
            ]
        },
        
        // ========== PARTIE 3 : VOCABULAIRE ACADÉMIQUE ==========
        {
            section: "Vocabulaire Académique et Formel",
            type: "vocabulary",
            questions: [
                {
                    id: 10,
                    question: "Quel mot signifie 'rendre plus intense' ?",
                    type: "multiple_choice",
                    options: ["Atténuer", "Exacerber", "Modérer", "Apaiser"],
                    correctAnswer: 1,
                    explanation: "'Exacerber' signifie 'rendre plus intense, aggraver'."
                },
                {
                    id: 11,
                    question: "Une 'conjoncture' désigne :",
                    type: "multiple_choice",
                    options: [
                        "Une connexion",
                        "Une situation économique",
                        "Une hypothèse",
                        "Une conjonction"
                    ],
                    correctAnswer: 1,
                    explanation: "'La conjoncture' = la situation économique du moment."
                },
                {
                    id: 12,
                    question: "Que signifie 'prégnant' ?",
                    type: "multiple_choice",
                    options: [
                        "Enceinte",
                        "Qui s'impose fortement",
                        "Qui prépare",
                        "Qui est prévoyant"
                    ],
                    correctAnswer: 1,
                    explanation: "'Prégnant' = qui s'impose fortement à l'esprit."
                },
                {
                    id: 13,
                    question: "'Dichotomie' signifie :",
                    type: "multiple_choice",
                    options: [
                        "Répétition",
                        "Opposition binaire",
                        "Démocratie",
                        "Dictature"
                    ],
                    correctAnswer: 1,
                    explanation: "'Dichotomie' = division en deux parties opposées."
                }
            ]
        },
        
        // ========== PARTIE 4 : COMPRÉHENSION - TEXTE LITTÉRAIRE ==========
        {
            section: "Compréhension - Extrait Littéraire",
            type: "reading",
            text: `Extrait adapté d'un roman contemporain :\n\n"La ville s'éveillait lentement, engourdie par la chaleur de juillet. Dans les rues désertes, seuls quelques passants pressés bravaient le soleil de plomb. Marie observait ce spectacle depuis sa fenêtre, en proie à une mélancolie diffuse qu'elle ne parvenait pas à s'expliquer. Était-ce le poids des années accumulées, ces décisions non prises qui hantaient ses nuits ? Ou simplement cette impression tenace que la vie lui échappait, qu'elle n'était que spectatrice de son propre destin ?\n\nElle se détourna de la fenêtre, incapable de soutenir plus longtemps cette confrontation avec elle-même. Les murs de son appartement, jadis réconfortants, lui semblaient désormais oppressants, témoins silencieux d'une existence qui s'écoulait sans éclat."`,
            questions: [
                {
                    id: 14,
                    question: "Quelle est l'ambiance dominante de cet extrait ?",
                    type: "multiple_choice",
                    options: [
                        "Joyeuse et optimiste",
                        "Mélancolique et introspective",
                        "Angoissante et terrifiante",
                        "Énergique et dynamique"
                    ],
                    correctAnswer: 1,
                    explanation: "L'extrait dégage une atmosphère mélancolique, avec la solitude et l'introspection de Marie."
                },
                {
                    id: 15,
                    question: "Que ressent Marie ?",
                    type: "multiple_choice",
                    options: [
                        "De la joie",
                        "De la colère",
                        "Une mélancolie inexpliquée",
                        "De l'excitation"
                    ],
                    correctAnswer: 2,
                    explanation: "Marie est 'en proie à une mélancolie diffuse qu'elle ne parvenait pas à s'expliquer'."
                },
                {
                    id: 16,
                    question: "Comment Marie perçoit-elle sa vie ?",
                    type: "multiple_choice",
                    options: [
                        "Comme une aventure passionnante",
                        "Comme une vie qui lui échappe",
                        "Comme un succès",
                        "Comme une tragédie"
                    ],
                    correctAnswer: 1,
                    explanation: "Marie a 'l'impression que la vie lui échappait, qu'elle n'était que spectatrice de son propre destin'."
                },
                {
                    id: 17,
                    question: "Le style de cet extrait est :",
                    type: "multiple_choice",
                    options: [
                        "Journalistique",
                        "Scientifique",
                        "Littéraire et introspectif",
                        "Humoristique"
                    ],
                    correctAnswer: 2,
                    explanation: "L'extrait utilise un style littéraire avec une analyse psychologique profonde."
                }
            ]
        },
        
        // ========== PARTIE 5 : ARGUMENTATION ==========
        {
            section: "Argumentation et Connecteurs Logiques",
            type: "grammar",
            questions: [
                {
                    id: 18,
                    question: "Choisissez le connecteur approprié : 'Il pleut. ___, nous irons nous promener.'",
                    type: "multiple_choice",
                    options: [
                        "C'est pourquoi",
                        "Néanmoins",
                        "Par conséquent",
                        "De ce fait"
                    ],
                    correctAnswer: 1,
                    explanation: "'Néanmoins' (concession) introduit une idée opposée : malgré la pluie, on sort."
                },
                {
                    id: 19,
                    question: "Complétez : 'Les résultats sont décevants. ___, il faut repenser notre stratégie.'",
                    type: "multiple_choice",
                    options: [
                        "Cependant",
                        "En outre",
                        "Dès lors",
                        "Tandis que"
                    ],
                    correctAnswer: 2,
                    explanation: "'Dès lors' (conséquence) : puisque les résultats sont mauvais, il faut changer."
                },
                {
                    id: 20,
                    question: "'___ ses efforts, il n'a pas réussi.'",
                    type: "multiple_choice",
                    options: [
                        "Grâce à",
                        "En dépit de",
                        "À cause de",
                        "En raison de"
                    ],
                    correctAnswer: 1,
                    explanation: "'En dépit de' (concession) : malgré les efforts, pas de succès."
                },
                {
                    id: 21,
                    question: "'Non seulement il est compétent, ___ il est sympathique.'",
                    type: "multiple_choice",
                    options: [
                        "mais",
                        "mais encore",
                        "cependant",
                        "or"
                    ],
                    correctAnswer: 1,
                    explanation: "'Non seulement...mais encore' renforce l'addition de deux qualités."
                }
            ]
        },
        
        // ========== PARTIE 6 : VOCABULAIRE - NUANCES ==========
        {
            section: "Vocabulaire - Nuances et Synonymes",
            type: "vocabulary",
            questions: [
                {
                    id: 22,
                    question: "Quelle différence entre 'évoquer' et 'invoquer' ?",
                    type: "multiple_choice",
                    options: [
                        "Aucune différence",
                        "'Évoquer' = mentionner ; 'Invoquer' = faire appel à",
                        "'Évoquer' = appeler ; 'Invoquer' = rappeler",
                        "Ce sont des antonymes"
                    ],
                    correctAnswer: 1,
                    explanation: "'Évoquer' = mentionner, faire penser à ; 'Invoquer' = faire appel à une autorité."
                },
                {
                    id: 23,
                    question: "Quel mot est le plus formel ?",
                    type: "multiple_choice",
                    options: [
                        "Demander",
                        "Solliciter",
                        "Réclamer",
                        "Vouloir"
                    ],
                    correctAnswer: 1,
                    explanation: "'Solliciter' est le terme le plus formel pour demander quelque chose."
                },
                {
                    id: 24,
                    question: "Quelle nuance entre 'affirmer' et 'prétendre' ?",
                    type: "multiple_choice",
                    options: [
                        "Aucune",
                        "'Prétendre' implique un doute",
                        "'Affirmer' implique un doute",
                        "Ils sont identiques"
                    ],
                    correctAnswer: 1,
                    explanation: "'Affirmer' = dire avec assurance ; 'Prétendre' = dire (avec doute sur la vérité)."
                }
            ]
        },
        
        // ========== PARTIE 7 : GRAMMAIRE - PARTICIPE PRÉSENT ET GÉRONDIF ==========
        {
            section: "Grammaire - Participe et Gérondif",
            type: "grammar",
            questions: [
                {
                    id: 25,
                    question: "'___ (marcher) dans la rue, j'ai rencontré Paul.'",
                    type: "multiple_choice",
                    options: [
                        "Marchant",
                        "En marchant",
                        "Marché",
                        "Ayant marché"
                    ],
                    correctAnswer: 1,
                    explanation: "Gérondif (simultanéité) : 'En marchant dans la rue'."
                },
                {
                    id: 26,
                    question: "'Les personnes ___ (habiter) à Paris paient plus cher.'",
                    type: "multiple_choice",
                    options: [
                        "en habitant",
                        "habitant",
                        "habitées",
                        "ayant habité"
                    ],
                    correctAnswer: 1,
                    explanation: "Participe présent (qualification) : 'les personnes habitant à Paris'."
                },
                {
                    id: 27,
                    question: "'___ (finir) son travail, il est parti.'",
                    type: "multiple_choice",
                    options: [
                        "Finissant",
                        "En finissant",
                        "Ayant fini",
                        "Fini"
                    ],
                    correctAnswer: 2,
                    explanation: "Participe passé composé (antériorité) : 'Ayant fini son travail'."
                }
            ]
        },
        
        // ========== PARTIE 8 : COMPRÉHENSION - ARTICLE SCIENTIFIQUE ==========
        {
            section: "Compréhension - Texte Scientifique",
            type: "reading",
            text: `Le réchauffement climatique : comprendre les mécanismes\n\nLe réchauffement climatique résulte principalement de l'augmentation des gaz à effet de serre (GES) dans l'atmosphère. Ces gaz, notamment le CO2, le méthane et le protoxyde d'azote, piègent la chaleur solaire et provoquent une élévation progressive des températures terrestres.\n\nLes activités humaines sont responsables de 75% de ces émissions : combustion d'énergies fossiles (charbon, pétrole, gaz), déforestation massive et agriculture intensive. Les conséquences sont multiples : fonte des glaciers, élévation du niveau des mers, multiplication des événements climatiques extrêmes et perturbation des écosystèmes.\n\nLa communauté scientifique est unanime : sans action rapide, la température mondiale pourrait augmenter de 3°C d'ici 2100, entraînant des bouleversements irréversibles. La transition énergétique vers les énergies renouvelables constitue l'une des solutions prioritaires.`,
            questions: [
                {
                    id: 28,
                    question: "Quelle est la cause principale du réchauffement climatique ?",
                    type: "multiple_choice",
                    options: [
                        "Le soleil",
                        "Les volcans",
                        "Les gaz à effet de serre",
                        "La lune"
                    ],
                    correctAnswer: 2,
                    explanation: "Le texte explique que le réchauffement résulte de 'l'augmentation des gaz à effet de serre'."
                },
                {
                    id: 29,
                    question: "Quel pourcentage des émissions est dû aux activités humaines ?",
                    type: "multiple_choice",
                    options: ["50%", "65%", "75%", "85%"],
                    correctAnswer: 2,
                    explanation: "'Les activités humaines sont responsables de 75% de ces émissions'."
                },
                {
                    id: 30,
                    question: "Quelle conséquence n'est PAS mentionnée ?",
                    type: "multiple_choice",
                    options: [
                        "Fonte des glaciers",
                        "Élévation du niveau des mers",
                        "Disparition du soleil",
                        "Événements climatiques extrêmes"
                    ],
                    correctAnswer: 2,
                    explanation: "La 'disparition du soleil' n'est pas mentionnée dans les conséquences."
                },
                {
                    id: 31,
                    question: "Le ton de ce texte est :",
                    type: "multiple_choice",
                    options: [
                        "Poétique",
                        "Scientifique et informatif",
                        "Humoristique",
                        "Narratif"
                    ],
                    correctAnswer: 1,
                    explanation: "Le texte utilise un ton scientifique avec des données factuelles."
                }
            ]
        },
        
        // ========== PARTIE 9 : EXPRESSION ÉCRITE STRUCTURÉE ==========
        {
            section: "Production Écrite - Essai Argumenté",
            type: "writing",
            instruction: "Rédigez un essai argumenté (150-180 mots) sur le thème : 'Les réseaux sociaux sont-ils bénéfiques ou nuisibles pour la société ?' Présentez les deux points de vue et donnez votre opinion.",
            example: "Structure attendue :\n1. Introduction (présentation du sujet)\n2. Arguments POUR (2-3 arguments)\n3. Arguments CONTRE (2-3 arguments)\n4. Votre opinion personnelle\n5. Conclusion",
            questions: [
                {
                    id: 32,
                    question: "Dans un essai argumenté, vous devez :",
                    type: "checklist",
                    options: [
                        "Présenter une introduction claire",
                        "Donner des arguments pour",
                        "Donner des arguments contre",
                        "Utiliser des connecteurs logiques",
                        "Exprimer votre opinion personnelle",
                        "Conclure"
                    ],
                    correctAnswers: [0, 1, 2, 3, 4, 5],
                    explanation: "Un essai complet doit contenir tous ces éléments structurels."
                }
            ]
        },
        
        // ========== PARTIE 10 : VOCABULAIRE - REGISTRE DE LANGUE ==========
        {
            section: "Registres de Langue",
            type: "vocabulary",
            questions: [
                {
                    id: 33,
                    question: "Quelle expression est FAMILIÈRE ?",
                    type: "multiple_choice",
                    options: [
                        "J'ai faim",
                        "J'ai la dalle",
                        "Je suis affamé",
                        "J'éprouve de l'appétit"
                    ],
                    correctAnswer: 1,
                    explanation: "'J'ai la dalle' est une expression familière pour dire 'j'ai faim'."
                },
                {
                    id: 34,
                    question: "Version SOUTENUE de 'Il a beaucoup d'argent' :",
                    type: "multiple_choice",
                    options: [
                        "Il est plein aux as",
                        "Il possède une fortune considérable",
                        "Il a plein de fric",
                        "Il est riche"
                    ],
                    correctAnswer: 1,
                    explanation: "'Il possède une fortune considérable' est la version soutenue."
                },
                {
                    id: 35,
                    question: "Registre COURANT de 'se restaurer' :",
                    type: "multiple_choice",
                    options: [
                        "Bouffer",
                        "Manger",
                        "Se sustenter",
                        "Casser la croûte"
                    ],
                    correctAnswer: 1,
                    explanation: "'Manger' est le terme courant pour 'se restaurer' (soutenu)."
                }
            ]
        },
        
        // ========== PARTIE 11 : GRAMMAIRE - MISE EN RELIEF ==========
        {
            section: "Grammaire - Mise en Relief",
            type: "grammar",
            questions: [
                {
                    id: 36,
                    question: "Mettez en relief le complément : 'J'aime le chocolat.'",
                    type: "multiple_choice",
                    options: [
                        "Le chocolat, je l'aime.",
                        "C'est le chocolat que j'aime.",
                        "Ce que j'aime, c'est le chocolat.",
                        "Toutes les réponses"
                    ],
                    correctAnswer: 3,
                    explanation: "Les trois formes sont correctes pour mettre en relief."
                },
                {
                    id: 37,
                    question: "'Marie a cassé le vase.' (Mise en relief du sujet)",
                    type: "multiple_choice",
                    options: [
                        "Le vase, Marie l'a cassé.",
                        "C'est Marie qui a cassé le vase.",
                        "C'est le vase que Marie a cassé.",
                        "Marie, elle a cassé le vase."
                    ],
                    correctAnswer: 1,
                    explanation: "Pour mettre en relief le sujet : 'C'est... qui'."
                },
                {
                    id: 38,
                    question: "'Je parle de ce film.' (Mise en relief)",
                    type: "multiple_choice",
                    options: [
                        "Ce film, j'en parle.",
                        "C'est de ce film dont je parle.",
                        "Les deux réponses",
                        "Aucune réponse"
                    ],
                    correctAnswer: 2,
                    explanation: "Les deux formes sont correctes : 'j'en parle' ou 'c'est...dont'."
                }
            ]
        },
        
        // ========== PARTIE 12 : COMPRÉHENSION - CRITIQUE CULTURELLE ==========
        {
            section: "Compréhension - Critique",
            type: "reading",
            text: `Critique du film "Voyage au bout de la nuit"\n\nCette adaptation cinématographique déçoit autant qu'elle fascine. Si la photographie est indéniablement somptueuse et la bande-son envoûtante, le scénario peine à retranscrire la profondeur du roman original. Les dialogues, parfois lourds, manquent de subtilité, et certaines ellipses narratives laissent le spectateur perplexe.\n\nToutefois, la performance de l'acteur principal force l'admiration. Son interprétation nuancée parvient à insuffler vie à un personnage complexe, sauvant in extremis un film qui aurait pu sombrer dans la médiocrité. Le réalisateur démontre néanmoins un talent certain pour la mise en scène, alternant avec brio plans larges contemplatifs et gros plans intimistes.\n\nEn définitive, une œuvre imparfaite mais ambitieuse, qui mérite le détour malgré ses défauts.`,
            questions: [
                {
                    id: 39,
                    question: "Quel est le ton général de cette critique ?",
                    type: "multiple_choice",
                    options: [
                        "Entièrement positif",
                        "Entièrement négatif",
                        "Mitigé et nuancé",
                        "Neutre"
                    ],
                    correctAnswer: 2,
                    explanation: "La critique présente à la fois des aspects positifs et négatifs."
                },
                {
                    id: 40,
                    question: "Quel élément est critiqué négativement ?",
                    type: "multiple_choice",
                    options: [
                        "La photographie",
                        "Le scénario",
                        "La bande-son",
                        "L'acteur principal"
                    ],
                    correctAnswer: 1,
                    explanation: "'Le scénario peine à retranscrire la profondeur du roman original'."
                },
                {
                    id: 41,
                    question: "Que signifie 'in extremis' ?",
                    type: "multiple_choice",
                    options: [
                        "Au début",
                        "Au dernier moment",
                        "Complètement",
                        "Partiellement"
                    ],
                    correctAnswer: 1,
                    explanation: "'In extremis' = au dernier moment, de justesse."
                },
                {
                    id: 42,
                    question: "La conclusion du critique est :",
                    type: "multiple_choice",
                    options: [
                        "Le film est nul",
                        "Le film est parfait",
                        "Le film mérite d'être vu malgré ses défauts",
                        "Le film est moyen"
                    ],
                    correctAnswer: 2,
                    explanation: "'Une œuvre imparfaite mais ambitieuse, qui mérite le détour malgré ses défauts'."
                }
            ]
        },
        
        // ========== PARTIES FINALES : SYNTHÈSE ET ANALYSE ==========
        {
            section: "Analyse et Synthèse",
            type: "analysis",
            questions: [
                {
                    id: 43,
                    question: "Dans un texte argumentatif, l'objectif est de :",
                    type: "multiple_choice",
                    options: [
                        "Raconter une histoire",
                        "Décrire un paysage",
                        "Convaincre le lecteur",
                        "Informer factuellement"
                    ],
                    correctAnswer: 2,
                    explanation: "Un texte argumentatif vise à convaincre par des arguments."
                },
                {
                    id: 44,
                    question: "Quel connecteur introduit une CONCESSION ?",
                    type: "multiple_choice",
                    options: [
                        "Par conséquent",
                        "Bien que",
                        "C'est pourquoi",
                        "De plus"
                    ],
                    correctAnswer: 1,
                    explanation: "'Bien que' introduit une concession (contraste)."
                },
                {
                    id: 45,
                    question: "Pour analyser un texte littéraire, il faut :",
                    type: "multiple_choice",
                    options: [
                        "Seulement résumer l'histoire",
                        "Identifier le style, les thèmes et les procédés",
                        "Copier le texte",
                        "Donner son avis sans justification"
                    ],
                    correctAnswer: 1,
                    explanation: "L'analyse littéraire examine le style, les thèmes et les procédés d'écriture."
                }
            ]
        }
    ]
};

// Export pour utilisation dans l'application
window.testB2Data = testB2Data;
