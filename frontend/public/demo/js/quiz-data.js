// ============================================================================
// 40 QUESTIONS DU TEST CIVIQUE FRANÇAIS - VERSION DÉMO
// ============================================================================

const quizQuestions = [
    // HISTOIRE DE FRANCE
    {
        question: "Quelle est la devise de la République française ?",
        answers: [
            "Travail, Famille, Patrie",
            "Liberté, Égalité, Fraternité",
            "Honneur et Patrie",
            "Force et Honneur"
        ],
        correct: 1,
        explanation: "La devise de la République française est 'Liberté, Égalité, Fraternité'. Elle apparaît dans la Constitution de 1958."
    },
    {
        question: "Quel est le jour de la fête nationale française ?",
        answers: [
            "Le 1er mai",
            "Le 14 juillet",
            "Le 11 novembre",
            "Le 8 mai"
        ],
        correct: 1,
        explanation: "Le 14 juillet commémore la prise de la Bastille en 1789, symbole de la fin de l'Ancien Régime et du début de la Révolution française."
    },
    {
        question: "Quelles sont les couleurs du drapeau français ?",
        answers: [
            "Rouge, blanc, vert",
            "Bleu, blanc, rouge",
            "Bleu, jaune, rouge",
            "Rouge, blanc, bleu"
        ],
        correct: 1,
        explanation: "Le drapeau tricolore bleu, blanc, rouge a été adopté lors de la Révolution française en 1794."
    },
    {
        question: "Quel roi a fait construire le château de Versailles ?",
        answers: [
            "François Ier",
            "Henri IV",
            "Louis XIV",
            "Napoléon Bonaparte"
        ],
        correct: 2,
        explanation: "Louis XIV, le 'Roi Soleil', a transformé le pavillon de chasse de son père en un magnifique palais à Versailles, symbole de l'absolutisme royal."
    },
    {
        question: "En quelle année la Révolution française a-t-elle commencé ?",
        answers: [
            "1789",
            "1799",
            "1804",
            "1815"
        ],
        correct: 0,
        explanation: "La Révolution française a commencé en 1789 avec la prise de la Bastille le 14 juillet et la Déclaration des droits de l'homme et du citoyen le 26 août."
    },
    {
        question: "Qui a écrit la Déclaration des droits de l'homme et du citoyen en 1789 ?",
        answers: [
            "Voltaire",
            "Jean-Jacques Rousseau",
            "L'Assemblée nationale constituante",
            "Napoléon Bonaparte"
        ],
        correct: 2,
        explanation: "La Déclaration des droits de l'homme et du citoyen a été rédigée par l'Assemblée nationale constituante en août 1789."
    },
    {
        question: "Quand la Première Guerre mondiale s'est-elle terminée ?",
        answers: [
            "1914",
            "1916",
            "1918",
            "1920"
        ],
        correct: 2,
        explanation: "La Première Guerre mondiale s'est terminée le 11 novembre 1918 avec la signature de l'armistice."
    },
    {
        question: "Quel général a lancé l'appel du 18 juin 1940 ?",
        answers: [
            "Philippe Pétain",
            "Charles de Gaulle",
            "Napoléon Bonaparte",
            "Georges Clemenceau"
        ],
        correct: 1,
        explanation: "Le général Charles de Gaulle a lancé l'appel du 18 juin 1940 depuis Londres pour appeler les Français à résister face à l'occupation allemande."
    },
    {
        question: "Quand la Seconde Guerre mondiale s'est-elle terminée en Europe ?",
        answers: [
            "Le 8 mai 1944",
            "Le 6 juin 1944",
            "Le 8 mai 1945",
            "Le 11 novembre 1945"
        ],
        correct: 2,
        explanation: "La Seconde Guerre mondiale s'est terminée en Europe le 8 mai 1945 avec la capitulation de l'Allemagne nazie."
    },
    {
        question: "Qu'est-ce que la Résistance pendant la Seconde Guerre mondiale ?",
        answers: [
            "Une association sportive",
            "Un mouvement de lutte contre l'occupation allemande",
            "Un parti politique",
            "Un syndicat de travailleurs"
        ],
        correct: 1,
        explanation: "La Résistance était un mouvement clandestin de lutte contre l'occupation allemande et le régime de Vichy pendant la Seconde Guerre mondiale."
    },

    // VALEURS ET SYMBOLES
    {
        question: "Quel est l'hymne national français ?",
        answers: [
            "Le Chant des Partisans",
            "La Marseillaise",
            "La Marche Consulaire",
            "Le Chant du Départ"
        ],
        correct: 1,
        explanation: "La Marseillaise est l'hymne national français depuis 1795. Elle a été composée par Rouget de Lisle en 1792."
    },
    {
        question: "Marianne est le symbole de :",
        answers: [
            "La monarchie française",
            "La République française",
            "L'Église catholique",
            "L'armée française"
        ],
        correct: 1,
        explanation: "Marianne est l'allégorie de la République française. Elle symbolise la liberté et la raison."
    },
    {
        question: "Quel symbole représente la justice en France ?",
        answers: [
            "Une épée",
            "Une balance",
            "Un lion",
            "Un coq"
        ],
        correct: 1,
        explanation: "La balance est le symbole universel de la justice. Elle représente l'équité et l'impartialité."
    },
    {
        question: "Le coq est un symbole :",
        answers: [
            "De la monarchie",
            "De l'Église",
            "De la France",
            "De l'armée"
        ],
        correct: 2,
        explanation: "Le coq gaulois est un des symboles traditionnels de la France, notamment utilisé dans le sport."
    },
    {
        question: "Quelle est la langue officielle de la République française ?",
        answers: [
            "Le latin",
            "Le français",
            "L'anglais",
            "Toutes les langues"
        ],
        correct: 1,
        explanation: "Selon l'article 2 de la Constitution, le français est la seule langue officielle de la République française."
    },

    // INSTITUTIONS
    {
        question: "Qui est le chef de l'État en France ?",
        answers: [
            "Le Premier ministre",
            "Le Président de la République",
            "Le Président de l'Assemblée nationale",
            "Le Président du Sénat"
        ],
        correct: 1,
        explanation: "Le Président de la République est le chef de l'État. Il est élu pour 5 ans au suffrage universel direct."
    },
    {
        question: "Pour combien d'années le Président de la République est-il élu ?",
        answers: [
            "4 ans",
            "5 ans",
            "7 ans",
            "10 ans"
        ],
        correct: 1,
        explanation: "Depuis 2000, le mandat présidentiel est de 5 ans (quinquennat). Avant, il était de 7 ans (septennat)."
    },
    {
        question: "Comment le Président de la République est-il élu ?",
        answers: [
            "Par le Parlement",
            "Par le gouvernement",
            "Au suffrage universel direct",
            "Par les maires"
        ],
        correct: 2,
        explanation: "Le Président est élu au suffrage universel direct, c'est-à-dire directement par les citoyens français."
    },
    {
        question: "Qui nomme le Premier ministre en France ?",
        answers: [
            "L'Assemblée nationale",
            "Le Sénat",
            "Le Président de la République",
            "Les citoyens"
        ],
        correct: 2,
        explanation: "Le Président de la République nomme le Premier ministre, qui forme ensuite le gouvernement."
    },
    {
        question: "Qu'est-ce que l'Assemblée nationale ?",
        answers: [
            "Le gouvernement",
            "Une des deux chambres du Parlement",
            "Le conseil des ministres",
            "La Cour de Justice"
        ],
        correct: 1,
        explanation: "L'Assemblée nationale est la chambre basse du Parlement français. Elle vote les lois avec le Sénat."
    },
    {
        question: "Combien y a-t-il de députés à l'Assemblée nationale ?",
        answers: [
            "348",
            "477",
            "577",
            "677"
        ],
        correct: 2,
        explanation: "L'Assemblée nationale compte 577 députés élus pour 5 ans au suffrage universel direct."
    },
    {
        question: "Qu'est-ce que le Sénat ?",
        answers: [
            "Le conseil des ministres",
            "Une des deux chambres du Parlement",
            "Le tribunal administratif",
            "Le conseil d'État"
        ],
        correct: 1,
        explanation: "Le Sénat est la chambre haute du Parlement français. Il représente les collectivités territoriales."
    },
    {
        question: "Qui vote les lois en France ?",
        answers: [
            "Le Président de la République",
            "Le gouvernement",
            "Le Parlement (Assemblée nationale et Sénat)",
            "Les préfets"
        ],
        correct: 2,
        explanation: "Les lois sont votées par le Parlement, composé de l'Assemblée nationale et du Sénat."
    },
    {
        question: "Quelle est la plus haute juridiction de l'ordre judiciaire ?",
        answers: [
            "Le Conseil d'État",
            "La Cour de cassation",
            "Le Conseil constitutionnel",
            "La Cour des comptes"
        ],
        correct: 1,
        explanation: "La Cour de cassation est la plus haute juridiction de l'ordre judiciaire français."
    },
    {
        question: "Quel est le rôle du Conseil constitutionnel ?",
        answers: [
            "Voter les lois",
            "Vérifier la conformité des lois à la Constitution",
            "Juger les criminels",
            "Gérer les finances publiques"
        ],
        correct: 1,
        explanation: "Le Conseil constitutionnel vérifie que les lois votées sont conformes à la Constitution."
    },

    // DROITS ET DEVOIRS
    {
        question: "À partir de quel âge peut-on voter en France ?",
        answers: [
            "16 ans",
            "18 ans",
            "21 ans",
            "25 ans"
        ],
        correct: 1,
        explanation: "Le droit de vote est accordé à partir de 18 ans en France depuis 1974 (avant c'était 21 ans)."
    },
    {
        question: "Le vote en France est :",
        answers: [
            "Obligatoire",
            "Un droit mais non obligatoire",
            "Réservé aux hommes",
            "Payant"
        ],
        correct: 1,
        explanation: "Le vote est un droit mais n'est pas obligatoire en France. C'est un devoir civique mais pas une obligation légale."
    },
    {
        question: "Depuis quelle année les femmes ont-elles le droit de vote en France ?",
        answers: [
            "1789",
            "1848",
            "1944",
            "1974"
        ],
        correct: 2,
        explanation: "Les femmes ont obtenu le droit de vote en France en 1944 et ont voté pour la première fois en 1945."
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
        explanation: "La laïcité est la séparation de l'État et des religions, garantissant la liberté de conscience et le respect de toutes les croyances."
    },
    {
        question: "La liberté d'expression en France signifie :",
        answers: [
            "On peut tout dire sans limite",
            "On peut exprimer ses opinions dans le respect des lois",
            "Seuls les journalistes peuvent s'exprimer",
            "Il faut l'autorisation du gouvernement"
        ],
        correct: 1,
        explanation: "La liberté d'expression permet d'exprimer ses opinions mais avec des limites légales (pas d'appel à la haine, de diffamation, etc.)."
    },
    {
        question: "Quel service est obligatoire pour tous les jeunes Français ?",
        answers: [
            "Le service militaire",
            "La Journée Défense et Citoyenneté (JDC)",
            "Le service civil",
            "Le bénévolat"
        ],
        correct: 1,
        explanation: "Tous les jeunes Français, filles et garçons, doivent participer à la Journée Défense et Citoyenneté (JDC) avant 18 ans."
    },
    {
        question: "Qu'est-ce que la Sécurité sociale ?",
        answers: [
            "La police",
            "Un système d'assurance maladie et de protection sociale",
            "L'armée",
            "Un service de sécurité privée"
        ],
        correct: 1,
        explanation: "La Sécurité sociale est le système français d'assurance maladie et de protection sociale, créé en 1945."
    },
    {
        question: "Le travail des enfants de moins de 16 ans est :",
        answers: [
            "Autorisé sans limite",
            "Interdit sauf exceptions",
            "Obligatoire",
            "Autorisé seulement le week-end"
        ],
        correct: 1,
        explanation: "Le travail des enfants de moins de 16 ans est interdit en France, sauf exceptions très encadrées (spectacle, mannequinat...)."
    },
    {
        question: "Qu'est-ce que le SMIC ?",
        answers: [
            "Un diplôme",
            "Le Salaire Minimum Interprofessionnel de Croissance",
            "Un service public",
            "Une assurance"
        ],
        correct: 1,
        explanation: "Le SMIC est le salaire minimum légal en France. Il est réévalué chaque année."
    },
    {
        question: "Quelle est la durée légale du travail en France ?",
        answers: [
            "30 heures par semaine",
            "35 heures par semaine",
            "40 heures par semaine",
            "50 heures par semaine"
        ],
        correct: 1,
        explanation: "La durée légale du travail en France est de 35 heures par semaine depuis 2000."
    },

    // UNION EUROPÉENNE
    {
        question: "Combien y a-t-il de pays dans l'Union européenne ?",
        answers: [
            "15",
            "20",
            "27",
            "35"
        ],
        correct: 2,
        explanation: "L'Union européenne compte 27 pays membres depuis le Brexit (départ du Royaume-Uni en 2020)."
    },
    {
        question: "Quelle est la monnaie commune de l'Union européenne ?",
        answers: [
            "Le franc",
            "La livre",
            "Le dollar",
            "L'euro"
        ],
        correct: 3,
        explanation: "L'euro est la monnaie commune de 20 pays de l'Union européenne (zone euro), mise en circulation en 2002."
    },
    {
        question: "Quel est le symbole du drapeau européen ?",
        answers: [
            "Un aigle",
            "Une étoile",
            "12 étoiles dorées en cercle",
            "Une couronne"
        ],
        correct: 2,
        explanation: "Le drapeau européen représente 12 étoiles dorées disposées en cercle sur fond bleu, symbolisant l'union et la solidarité."
    },
    {
        question: "Où siège le Parlement européen ?",
        answers: [
            "À Paris et Bruxelles",
            "À Strasbourg et Bruxelles",
            "À Londres et Berlin",
            "À Rome et Madrid"
        ],
        correct: 1,
        explanation: "Le Parlement européen siège principalement à Strasbourg (France) et à Bruxelles (Belgique)."
    },
    {
        question: "Qu'est-ce que l'espace Schengen ?",
        answers: [
            "Une zone commerciale",
            "Un espace de libre circulation sans contrôles aux frontières",
            "Une monnaie",
            "Un traité économique"
        ],
        correct: 1,
        explanation: "L'espace Schengen permet la libre circulation des personnes entre les pays membres sans contrôle aux frontières intérieures."
    },
    {
        question: "Tout citoyen de l'Union européenne peut :",
        answers: [
            "Voter uniquement dans son pays d'origine",
            "Circuler et travailler librement dans l'UE",
            "Voter uniquement aux élections nationales",
            "Résider seulement dans son pays d'origine"
        ],
        correct: 1,
        explanation: "Les citoyens européens peuvent circuler, travailler et résider librement dans tous les pays de l'Union européenne."
    }
];

// Export des données pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizQuestions;
}