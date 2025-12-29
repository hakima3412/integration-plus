// SESSION 6 - SIMULATION EXAMEN (20 questions)
// Questions variées sur tous les thèmes

const quizQuestions = [
    {question: "Quelle est la devise de la République française ?", answers: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Honneur et Patrie", "Force et Honneur"], correct: 1, explanation: "La devise de la République française est 'Liberté, Égalité, Fraternité', inscrite dans la Constitution."},
    {question: "En quelle année a commencé la Révolution française ?", answers: ["1789", "1799", "1804", "1815"], correct: 0, explanation: "La Révolution française a commencé en 1789 avec la prise de la Bastille le 14 juillet."},
    {question: "Quelles sont les couleurs du drapeau français ?", answers: ["Rouge, blanc, vert", "Bleu, blanc, rouge", "Bleu, jaune, rouge", "Rouge, blanc, bleu"], correct: 1, explanation: "Le drapeau tricolore bleu, blanc, rouge a été adopté lors de la Révolution française."},
    {question: "Qui est le chef de l'État en France ?", answers: ["Le Premier ministre", "Le Président de la République", "Le Président de l'Assemblée", "Le Président du Sénat"], correct: 1, explanation: "Le Président de la République est le chef de l'État, élu pour 5 ans au suffrage universel direct."},
    {question: "À partir de quel âge peut-on voter en France ?", answers: ["16 ans", "18 ans", "21 ans", "25 ans"], correct: 1, explanation: "Le droit de vote est accordé à partir de 18 ans en France depuis 1974."},
    {question: "Quel est l'hymne national français ?", answers: ["Le Chant des Partisans", "La Marseillaise", "La Marche Consulaire", "Le Chant du Départ"], correct: 1, explanation: "La Marseillaise est l'hymne national français depuis 1795."},
    {question: "Pour combien d'années le Président est-il élu ?", answers: ["4 ans", "5 ans", "7 ans", "10 ans"], correct: 1, explanation: "Depuis 2000, le mandat présidentiel est de 5 ans (quinquennat)."},
    {question: "Qu'est-ce que la laïcité ?", answers: ["L'interdiction de toutes les religions", "La séparation de l'État et des religions", "La religion officielle", "L'obligation d'être catholique"], correct: 1, explanation: "La laïcité est la séparation de l'État et des religions, garantissant la liberté de conscience."},
    {question: "Qui a lancé l'appel du 18 juin 1940 ?", answers: ["Philippe Pétain", "Charles de Gaulle", "Winston Churchill", "Jean Moulin"], correct: 1, explanation: "Le général Charles de Gaulle a lancé l'appel du 18 juin 1940 depuis Londres."},
    {question: "Marianne symbolise :", answers: ["La monarchie", "La République française", "L'Église", "L'armée"], correct: 1, explanation: "Marianne est l'allégorie de la République française et de ses valeurs."},
    {question: "Combien y a-t-il de députés à l'Assemblée nationale ?", answers: ["348", "477", "577", "677"], correct: 2, explanation: "L'Assemblée nationale compte 577 députés élus pour 5 ans."},
    {question: "Depuis quelle année les femmes votent-elles en France ?", answers: ["1789", "1848", "1944", "1974"], correct: 2, explanation: "Les femmes ont obtenu le droit de vote en 1944 et ont voté pour la première fois en 1945."},
    {question: "Quel est le jour de la fête nationale ?", answers: ["Le 1er mai", "Le 14 juillet", "Le 11 novembre", "Le 8 mai"], correct: 1, explanation: "Le 14 juillet commémore la prise de la Bastille en 1789."},
    {question: "Qui vote les lois en France ?", answers: ["Le Président", "Le gouvernement", "Le Parlement", "Les préfets"], correct: 2, explanation: "Les lois sont votées par le Parlement (Assemblée nationale et Sénat)."},
    {question: "Le vote en France est :", answers: ["Obligatoire", "Un droit mais non obligatoire", "Réservé aux hommes", "Payant"], correct: 1, explanation: "Le vote est un droit mais n'est pas obligatoire en France."},
    {question: "La Seconde Guerre mondiale s'est terminée en :", answers: ["1944", "1945", "1946", "1947"], correct: 1, explanation: "La Seconde Guerre mondiale s'est terminée en Europe le 8 mai 1945."},
    {question: "Quelle est la langue officielle de la France ?", answers: ["Le latin", "Le français", "L'anglais", "Toutes les langues"], correct: 1, explanation: "Le français est la seule langue officielle de la République française."},
    {question: "Qui nomme le Premier ministre ?", answers: ["L'Assemblée", "Le Sénat", "Le Président de la République", "Les citoyens"], correct: 2, explanation: "Le Président de la République nomme le Premier ministre."},
    {question: "La Constitution actuelle date de :", answers: ["1789", "1848", "1958", "1981"], correct: 2, explanation: "La Constitution de la Ve République date de 1958."},
    {question: "L'école est obligatoire en France de :", answers: ["3 à 16 ans", "6 à 14 ans", "3 à 18 ans", "6 à 16 ans"], correct: 0, explanation: "L'instruction est obligatoire de 3 à 16 ans en France depuis 2019."}
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizQuestions;
}