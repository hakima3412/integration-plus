// ============================================================================
// SESSION 1 - QUESTIONS GÉNÉRALES (35 questions)
// Principes et Valeurs de la République française
// ============================================================================

const quizQuestions = [
    {
        question: "Quelle est la devise de la République française ?",
        answers: [
            "Travail, Famille, Patrie",
            "Liberté, Égalité, Fraternité",
            "Honneur et Patrie",
            "Force et Honneur"
        ],
        correct: 1,
        explanation: "La devise de la République française est 'Liberté, Égalité, Fraternité'. Elle apparaît dans la Constitution de 1958 et symbolise les valeurs fondamentales de la République."
    },
    {
        question: "Qu'est-ce que la laïcité ?",
        answers: [
            "L'interdiction de toutes les religions",
            "La séparation de l'État et des religions",
            "La religion officielle de l'État",
            "L'obligation d'être catholique"
        ],
        correct: 1,
        explanation: "La laïcité est le principe de séparation de l'État et des religions. Elle garantit la liberté de conscience et le respect de toutes les croyances, inscrit dans la loi de 1905."
    },
    {
        question: "Quel est le principe fondamental de l'égalité en France ?",
        answers: [
            "Tous les citoyens ont les mêmes droits",
            "Seuls les hommes ont des droits",
            "Les droits dépendent de l'origine",
            "Les droits dépendent de la religion"
        ],
        correct: 0,
        explanation: "L'égalité signifie que tous les citoyens français ont les mêmes droits et devoirs, sans distinction d'origine, de sexe ou de religion. C'est un principe constitutionnel."
    },
    {
        question: "Qu'est-ce que la liberté d'expression ?",
        answers: [
            "On peut tout dire sans limite",
            "On peut exprimer ses opinions dans le respect des lois",
            "Seuls les journalistes peuvent s'exprimer",
            "Il faut l'autorisation du gouvernement"
        ],
        correct: 1,
        explanation: "La liberté d'expression permet d'exprimer ses opinions mais avec des limites légales : pas d'appel à la haine, de diffamation ou d'atteinte à la dignité humaine."
    },
    {
        question: "La France est une République :",
        answers: [
            "Monarchique",
            "Démocratique",
            "Théocratique",
            "Impériale"
        ],
        correct: 1,
        explanation: "La France est une République démocratique où le pouvoir appartient au peuple qui l'exerce par ses représentants élus au suffrage universel."
    },
    {
        question: "Quel est le symbole de la justice en France ?",
        answers: [
            "Une épée",
            "Une balance",
            "Un lion",
            "Un coq"
        ],
        correct: 1,
        explanation: "La balance est le symbole universel de la justice. Elle représente l'équité, l'impartialité et l'équilibre dans le jugement."
    },
    {
        question: "Qu'est-ce que la fraternité ?",
        answers: [
            "L'obligation d'aider sa famille uniquement",
            "La solidarité entre tous les citoyens",
            "Un parti politique",
            "Une religion"
        ],
        correct: 1,
        explanation: "La fraternité est la solidarité et l'entraide entre tous les citoyens. Elle encourage la cohésion sociale et le respect mutuel au-delà des différences."
    },
    {
        question: "La langue officielle de la République française est :",
        answers: [
            "Le latin",
            "Le français",
            "L'anglais",
            "Toutes les langues sont égales"
        ],
        correct: 1,
        explanation: "Selon l'article 2 de la Constitution de 1958, le français est la seule langue officielle de la République française."
    },
    {
        question: "Marianne symbolise :",
        answers: [
            "La monarchie",
            "La République française",
            "L'Église",
            "L'armée"
        ],
        correct: 1,
        explanation: "Marianne est l'allégorie de la République française. Elle incarne la liberté et la raison, et est représentée avec un bonnet phrygien."
    },
    {
        question: "Le principe de laïcité s'applique :",
        answers: [
            "Uniquement aux musulmans",
            "À toutes les religions",
            "Uniquement aux catholiques",
            "Uniquement aux écoles"
        ],
        correct: 1,
        explanation: "Le principe de laïcité s'applique à toutes les religions de manière égale. L'État est neutre et garantit la liberté de conscience pour tous."
    },
    {
        question: "La République française garantit :",
        answers: [
            "La liberté religieuse",
            "Une religion d'État",
            "L'interdiction des religions",
            "Le catholicisme obligatoire"
        ],
        correct: 0,
        explanation: "La République garantit la liberté religieuse : chacun peut pratiquer la religion de son choix ou n'en pratiquer aucune, dans le respect de la loi."
    },
    {
        question: "Le drapeau français est composé de :",
        answers: [
            "Rouge, blanc, vert",
            "Bleu, blanc, rouge",
            "Bleu, jaune, rouge",
            "Vert, blanc, rouge"
        ],
        correct: 1,
        explanation: "Le drapeau tricolore bleu, blanc, rouge a été adopté lors de la Révolution française. Le bleu et le rouge sont les couleurs de Paris, le blanc celle du roi."
    },
    {
        question: "L'hymne national français est :",
        answers: [
            "Le Chant des Partisans",
            "La Marseillaise",
            "La Marche Consulaire",
            "Le Chant du Départ"
        ],
        correct: 1,
        explanation: "La Marseillaise est l'hymne national français depuis 1795. Elle a été composée par Rouget de Lisle en 1792 pendant la Révolution française."
    },
    {
        question: "La devise 'Liberté, Égalité, Fraternité' date de :",
        answers: [
            "La Révolution française",
            "Napoléon Bonaparte",
            "Louis XIV",
            "Charles de Gaulle"
        ],
        correct: 0,
        explanation: "La devise 'Liberté, Égalité, Fraternité' trouve son origine dans la Révolution française de 1789 et devient devise officielle en 1848."
    },
    {
        question: "En France, l'État et les religions sont :",
        answers: [
            "Unis",
            "Séparés",
            "Identiques",
            "Complémentaires"
        ],
        correct: 1,
        explanation: "Depuis la loi de 1905, l'État et les religions sont séparés en France. L'État ne reconnaît ni ne subventionne aucun culte."
    },
    {
        question: "Le respect de la dignité humaine signifie :",
        answers: [
            "Respecter uniquement les Français",
            "Respecter tous les êtres humains",
            "Respecter uniquement sa famille",
            "Respecter uniquement sa religion"
        ],
        correct: 1,
        explanation: "Le respect de la dignité humaine est un principe fondamental qui s'applique à tous les êtres humains, sans distinction d'origine, de religion ou de nationalité."
    },
    {
        question: "La liberté de conscience permet :",
        answers: [
            "De choisir ou non une religion",
            "D'imposer sa religion aux autres",
            "De critiquer les religions",
            "D'interdire les religions"
        ],
        correct: 0,
        explanation: "La liberté de conscience garantit à chacun le droit de choisir ou non une religion, et de la pratiquer librement dans le respect de la loi."
    },
    {
        question: "L'égalité femmes-hommes en France signifie :",
        answers: [
            "Les femmes ont plus de droits",
            "Les hommes et les femmes ont les mêmes droits",
            "Seuls les hommes votent",
            "Les femmes ne travaillent pas"
        ],
        correct: 1,
        explanation: "L'égalité femmes-hommes est inscrite dans la Constitution. Hommes et femmes ont les mêmes droits politiques, économiques et sociaux."
    },
    {
        question: "La solidarité nationale s'exprime par :",
        answers: [
            "La Sécurité sociale",
            "L'armée",
            "La police",
            "Les impôts uniquement"
        ],
        correct: 0,
        explanation: "La solidarité nationale s'exprime notamment par la Sécurité sociale qui protège tous les citoyens contre les risques de la vie (maladie, chômage, retraite)."
    },
    {
        question: "Le coq gaulois est :",
        answers: [
            "L'emblème officiel de la France",
            "Un symbole traditionnel de la France",
            "Le symbole de la monarchie",
            "Le symbole de l'Église"
        ],
        correct: 1,
        explanation: "Le coq gaulois est un symbole traditionnel de la France, notamment utilisé dans le sport et sur les monuments. Ce n'est pas un emblème officiel."
    },
    {
        question: "La liberté d'association permet :",
        answers: [
            "De créer librement des associations",
            "De créer uniquement des partis politiques",
            "De manifester sans autorisation",
            "De ne payer aucun impôt"
        ],
        correct: 0,
        explanation: "La liberté d'association, garantie par la loi de 1901, permet à tout citoyen de créer librement une association sans autorisation préalable."
    },
    {
        question: "La République française est :",
        answers: [
            "Indivisible",
            "Divisible",
            "Fédérale",
            "Confédérale"
        ],
        correct: 0,
        explanation: "La République française est indivisible : la loi est la même sur tout le territoire, l'unité du pays ne peut être remise en cause."
    },
    {
        question: "La liberté de la presse signifie :",
        answers: [
            "Les journalistes peuvent tout écrire",
            "Les journalistes peuvent informer librement dans le respect de la loi",
            "Seul l'État peut publier des journaux",
            "Il faut l'autorisation pour publier"
        ],
        correct: 1,
        explanation: "La liberté de la presse permet aux journalistes d'informer librement, mais dans le respect des lois (pas de diffamation, d'appel à la haine, etc.)."
    },
    {
        question: "Le droit à l'éducation en France est :",
        answers: [
            "Réservé aux Français",
            "Payant pour tous",
            "Gratuit et obligatoire jusqu'à 16 ans",
            "Facultatif"
        ],
        correct: 2,
        explanation: "L'éducation est gratuite, laïque et obligatoire de 3 à 16 ans en France. C'est un droit fondamental garanti par la République."
    },
    {
        question: "La liberté de réunion permet :",
        answers: [
            "De se réunir librement dans le respect de l'ordre public",
            "De manifester sans déclaration",
            "De bloquer les routes",
            "D'occuper les bâtiments publics"
        ],
        correct: 0,
        explanation: "La liberté de réunion permet de se rassembler librement, mais les manifestations sur la voie publique doivent être déclarées à la préfecture."
    },
    {
        question: "Le principe de fraternité implique :",
        answers: [
            "La solidarité avec tous les citoyens",
            "L'aide uniquement à sa famille",
            "Le rejet des étrangers",
            "La préférence nationale"
        ],
        correct: 0,
        explanation: "La fraternité implique la solidarité entre tous les citoyens et le respect de la dignité humaine. C'est un principe d'entraide et de cohésion sociale."
    },
    {
        question: "En France, la justice est :",
        answers: [
            "Rendue au nom du Roi",
            "Rendue au nom du Peuple français",
            "Rendue au nom de Dieu",
            "Rendue au nom du Président"
        ],
        correct: 1,
        explanation: "La justice est rendue au nom du Peuple français. Les juges sont indépendants du pouvoir politique et appliquent la loi de manière impartiale."
    },
    {
        question: "La laïcité à l'école signifie :",
        answers: [
            "L'interdiction de toute religion",
            "La neutralité religieuse de l'enseignement public",
            "L'enseignement d'une religion",
            "L'interdiction des élèves croyants"
        ],
        correct: 1,
        explanation: "La laïcité à l'école signifie que l'enseignement public est neutre sur le plan religieux. Aucune religion n'est enseignée, favorisée ou discriminée."
    },
    {
        question: "Le respect de l'autre implique :",
        answers: [
            "D'accepter les différences",
            "De rejeter ce qui est différent",
            "D'imposer ses idées",
            "De vivre séparé des autres"
        ],
        correct: 0,
        explanation: "Le respect de l'autre implique d'accepter et de respecter les différences (origines, opinions, religions) dans le cadre des valeurs républicaines."
    },
    {
        question: "La liberté de circulation en France permet :",
        answers: [
            "De se déplacer librement sur le territoire",
            "De franchir les frontières sans papiers",
            "De s'installer n'importe où sans conditions",
            "De circuler sans respecter le code de la route"
        ],
        correct: 0,
        explanation: "La liberté de circulation permet à chacun de se déplacer librement sur le territoire français et de choisir son lieu de résidence."
    },
    {
        question: "Le droit de vote est :",
        answers: [
            "Un droit et un devoir civique",
            "Une obligation légale",
            "Réservé aux hommes",
            "Payant"
        ],
        correct: 0,
        explanation: "Le droit de vote est un droit fondamental mais aussi un devoir civique. En France, il n'est pas obligatoire légalement mais il est fortement encouragé."
    },
    {
        question: "La République française garantit :",
        answers: [
            "La liberté syndicale",
            "L'interdiction des syndicats",
            "Un seul syndicat autorisé",
            "Les syndicats uniquement pour l'État"
        ],
        correct: 0,
        explanation: "La République garantit la liberté syndicale : tout travailleur peut librement adhérer au syndicat de son choix ou en créer un nouveau."
    },
    {
        question: "L'égalité devant la loi signifie que :",
        answers: [
            "La loi s'applique à tous de la même façon",
            "Les riches ont plus de droits",
            "Les étrangers n'ont pas de droits",
            "Chacun choisit sa loi"
        ],
        correct: 0,
        explanation: "L'égalité devant la loi est un principe fondamental : la loi s'applique de la même manière à tous les citoyens, sans privilège ni discrimination."
    },
    {
        question: "La devise républicaine s'applique :",
        answers: [
            "À tous les domaines de la vie publique",
            "Uniquement à la politique",
            "Uniquement à l'école",
            "Uniquement aux Français de naissance"
        ],
        correct: 0,
        explanation: "La devise 'Liberté, Égalité, Fraternité' s'applique à tous les domaines de la vie publique : politique, social, économique, culturel, etc."
    },
    {
        question: "En France, la discrimination est :",
        answers: [
            "Autorisée dans certains cas",
            "Interdite et punie par la loi",
            "Tolérée dans le privé",
            "Normale"
        ],
        correct: 1,
        explanation: "Toute discrimination fondée sur l'origine, le sexe, la religion, l'orientation sexuelle, etc. est interdite et punie par la loi en France."
    }
];

// Export pour compatibilité
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizQuestions;
}