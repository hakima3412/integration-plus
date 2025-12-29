// ============================================================================
// SESSION 2 - HISTOIRE DE FRANCE (40 questions)
// Les Grands Événements Historiques
// ============================================================================

const quizQuestions = [
    // La Révolution française et l'Empire (10 questions)
    {
        question: "En quelle année a commencé la Révolution française ?",
        answers: ["1789", "1799", "1804", "1815"],
        correct: 0,
        explanation: "La Révolution française a commencé en 1789 avec la prise de la Bastille le 14 juillet et la Déclaration des droits de l'homme et du citoyen le 26 août."
    },
    {
        question: "Qu'est-ce que la prise de la Bastille ?",
        answers: [
            "Un événement sportif",
            "Le début de la Révolution française",
            "Une fête nationale",
            "Une bataille militaire"
        ],
        correct: 1,
        explanation: "La prise de la Bastille le 14 juillet 1789 marque le début de la Révolution française. C'est aujourd'hui la fête nationale."
    },
    {
        question: "Qui a écrit la Déclaration des droits de l'homme et du citoyen ?",
        answers: [
            "Napoléon Bonaparte",
            "Louis XVI",
            "L'Assemblée nationale constituante",
            "Voltaire"
        ],
        correct: 2,
        explanation: "La Déclaration des droits de l'homme et du citoyen a été rédigée par l'Assemblée nationale constituante en août 1789."
    },
    {
        question: "Napoléon Bonaparte est devenu empereur en :",
        answers: ["1789", "1799", "1804", "1815"],
        correct: 2,
        explanation: "Napoléon Bonaparte s'est proclamé empereur des Français en 1804, sous le nom de Napoléon Ier."
    },
    {
        question: "La bataille de Waterloo a eu lieu en :",
        answers: ["1789", "1804", "1815", "1848"],
        correct: 2,
        explanation: "La bataille de Waterloo (1815) marque la défaite définitive de Napoléon face aux armées européennes coalisées."
    },
    {
        question: "Qui était le roi de France pendant la Révolution ?",
        answers: ["Louis XIV", "Louis XV", "Louis XVI", "Charles X"],
        correct: 2,
        explanation: "Louis XVI était roi de France au moment de la Révolution. Il a été guillotiné en 1793."
    },
    {
        question: "Le Code civil français a été créé par :",
        answers: ["Louis XIV", "Napoléon Bonaparte", "Charles de Gaulle", "François Mitterrand"],
        correct: 1,
        explanation: "Le Code civil, appelé aussi Code Napoléon, a été promulgué en 1804. Il organise le droit civil français et est toujours en vigueur."
    },
    {
        question: "La devise 'Liberté, Égalité, Fraternité' vient de :",
        answers: [
            "La monarchie",
            "La Révolution française",
            "Napoléon",
            "La Ve République"
        ],
        correct: 1,
        explanation: "La devise 'Liberté, Égalité, Fraternité' trouve son origine dans la Révolution française et devient officielle en 1848."
    },
    {
        question: "Qu'est-ce que la Terreur pendant la Révolution ?",
        answers: [
            "Une période de répression violente",
            "Une fête",
            "Une bataille",
            "Un traité de paix"
        ],
        correct: 0,
        explanation: "La Terreur (1793-1794) est une période de répression violente pendant la Révolution, marquée par de nombreuses exécutions."
    },
    {
        question: "Le Premier Empire français a duré de :",
        answers: ["1789 à 1799", "1799 à 1804", "1804 à 1814/1815", "1815 à 1830"],
        correct: 2,
        explanation: "Le Premier Empire français, sous Napoléon Ier, a duré de 1804 à 1814 (puis brièvement en 1815 pendant les Cent-Jours)."
    },

    // Les Républiques et Monarchies (10 questions)
    {
        question: "La IIe République a été proclamée en :",
        answers: ["1789", "1848", "1870", "1958"],
        correct: 1,
        explanation: "La IIe République a été proclamée en 1848 après la révolution de février qui renverse la monarchie de Juillet."
    },
    {
        question: "La IIIe République a été proclamée en :",
        answers: ["1848", "1870", "1945", "1958"],
        correct: 1,
        explanation: "La IIIe République a été proclamée le 4 septembre 1870, après la défaite de Sedan et la chute du Second Empire."
    },
    {
        question: "Qui a instauré le Second Empire ?",
        answers: ["Napoléon Bonaparte", "Napoléon III", "Louis-Philippe", "Charles de Gaulle"],
        correct: 1,
        explanation: "Napoléon III (Louis-Napoléon Bonaparte) a instauré le Second Empire en 1852, qui dure jusqu'en 1870."
    },
    {
        question: "Depuis quelle année les femmes ont-elles le droit de vote en France ?",
        answers: ["1789", "1848", "1944", "1974"],
        correct: 2,
        explanation: "Les femmes françaises ont obtenu le droit de vote en 1944 et ont voté pour la première fois en 1945."
    },
    {
        question: "La loi de séparation des Églises et de l'État date de :",
        answers: ["1789", "1848", "1905", "1958"],
        correct: 2,
        explanation: "La loi de séparation des Églises et de l'État a été votée en 1905. Elle instaure la laïcité en France."
    },
    {
        question: "L'école publique gratuite et obligatoire a été instaurée par :",
        answers: ["Napoléon", "Jules Ferry", "Charles de Gaulle", "François Mitterrand"],
        correct: 1,
        explanation: "Jules Ferry a fait voter les lois sur l'école publique gratuite, laïque et obligatoire en 1881-1882."
    },
    {
        question: "Le droit de grève a été reconnu en France en :",
        answers: ["1789", "1848", "1864", "1946"],
        correct: 2,
        explanation: "Le droit de grève a été légalisé en France en 1864, sous le Second Empire. Il sera inscrit dans la Constitution en 1946."
    },
    {
        question: "L'abolition définitive de l'esclavage en France date de :",
        answers: ["1789", "1794", "1848", "1905"],
        correct: 2,
        explanation: "L'esclavage a été définitivement aboli en France en 1848 sous l'impulsion de Victor Schœlcher."
    },
    {
        question: "Le suffrage universel masculin a été instauré en :",
        answers: ["1789", "1848", "1870", "1944"],
        correct: 1,
        explanation: "Le suffrage universel masculin a été instauré en 1848 en France. Avant, seuls les hommes les plus riches pouvaient voter."
    },
    {
        question: "La Tour Eiffel a été construite pour :",
        answers: [
            "La Révolution française",
            "L'Exposition universelle de 1889",
            "La victoire de 1918",
            "Les Jeux Olympiques"
        ],
        correct: 1,
        explanation: "La Tour Eiffel a été construite pour l'Exposition universelle de 1889, qui célébrait le centenaire de la Révolution française."
    },

    // La Première Guerre mondiale (5 questions)
    {
        question: "La Première Guerre mondiale a duré de :",
        answers: ["1914 à 1918", "1939 à 1945", "1870 à 1871", "1789 à 1799"],
        correct: 0,
        explanation: "La Première Guerre mondiale s'est déroulée de 1914 à 1918. Elle est aussi appelée la Grande Guerre."
    },
    {
        question: "L'armistice de la Première Guerre mondiale a été signé le :",
        answers: ["14 juillet 1918", "11 novembre 1918", "8 mai 1945", "1er septembre 1939"],
        correct: 1,
        explanation: "L'armistice mettant fin à la Première Guerre mondiale a été signé le 11 novembre 1918. C'est aujourd'hui un jour férié."
    },
    {
        question: "La bataille de Verdun a eu lieu en :",
        answers: ["1914", "1916", "1918", "1939"],
        correct: 1,
        explanation: "La bataille de Verdun (1916) est l'une des plus longues et meurtrières batailles de la Première Guerre mondiale."
    },
    {
        question: "Qui était président de la République pendant la Première Guerre mondiale ?",
        answers: ["Georges Clemenceau", "Raymond Poincaré", "Charles de Gaulle", "René Coty"],
        correct: 1,
        explanation: "Raymond Poincaré était président de la République de 1913 à 1920. Georges Clemenceau était président du Conseil (Premier ministre)."
    },
    {
        question: "Le Poilu désigne :",
        answers: [
            "Un soldat français de 14-18",
            "Un résistant",
            "Un révolutionnaire",
            "Un explorateur"
        ],
        correct: 0,
        explanation: "Le Poilu désigne le soldat français combattant dans les tranchées pendant la Première Guerre mondiale."
    },

    // La Seconde Guerre mondiale (10 questions)
    {
        question: "La Seconde Guerre mondiale a duré de :",
        answers: ["1914 à 1918", "1939 à 1945", "1870 à 1871", "1950 à 1953"],
        correct: 1,
        explanation: "La Seconde Guerre mondiale s'est déroulée de 1939 à 1945 en Europe."
    },
    {
        question: "Qui a lancé l'appel du 18 juin 1940 ?",
        answers: ["Philippe Pétain", "Charles de Gaulle", "Winston Churchill", "Jean Moulin"],
        correct: 1,
        explanation: "Le général Charles de Gaulle a lancé l'appel du 18 juin 1940 depuis Londres pour appeler les Français à résister."
    },
    {
        question: "Le régime de Vichy était dirigé par :",
        answers: ["Charles de Gaulle", "Philippe Pétain", "Jean Moulin", "Georges Clemenceau"],
        correct: 1,
        explanation: "Le régime de Vichy (1940-1944) était dirigé par le maréchal Philippe Pétain et collaborait avec l'Allemagne nazie."
    },
    {
        question: "Le débarquement en Normandie a eu lieu le :",
        answers: ["18 juin 1940", "8 mai 1945", "6 juin 1944", "11 novembre 1918"],
        correct: 2,
        explanation: "Le débarquement allié en Normandie (Jour J) a eu lieu le 6 juin 1944. C'est le début de la libération de la France."
    },
    {
        question: "La France a été libérée en :",
        answers: ["1940", "1942", "1944", "1945"],
        correct: 2,
        explanation: "La France a été progressivement libérée en 1944, avec la libération de Paris le 25 août 1944."
    },
    {
        question: "Qu'est-ce que la Résistance ?",
        answers: [
            "Un parti politique",
            "Un mouvement de lutte contre l'occupation",
            "Une armée régulière",
            "Un syndicat"
        ],
        correct: 1,
        explanation: "La Résistance était un mouvement clandestin de lutte contre l'occupation allemande et le régime de Vichy pendant la guerre."
    },
    {
        question: "Jean Moulin était :",
        answers: [
            "Un collaborateur",
            "Un résistant",
            "Un maréchal",
            "Un ministre"
        ],
        correct: 1,
        explanation: "Jean Moulin était un grand résistant français. Il a unifié la Résistance sous l'autorité du général de Gaulle."
    },
    {
        question: "La Seconde Guerre mondiale s'est terminée en Europe le :",
        answers: ["6 juin 1944", "8 mai 1945", "11 novembre 1918", "14 juillet 1945"],
        correct: 1,
        explanation: "La Seconde Guerre mondiale s'est terminée en Europe le 8 mai 1945 avec la capitulation de l'Allemagne nazie."
    },
    {
        question: "La Shoah désigne :",
        answers: [
            "Une bataille",
            "Le génocide des Juifs par les nazis",
            "Un traité de paix",
            "Une résistance"
        ],
        correct: 1,
        explanation: "La Shoah est le génocide des Juifs d'Europe perpétré par l'Allemagne nazie pendant la Seconde Guerre mondiale."
    },
    {
        question: "Les camps de concentration étaient :",
        answers: [
            "Des camps militaires",
            "Des camps de vacances",
            "Des lieux de détention et d'extermination",
            "Des prisons ordinaires"
        ],
        correct: 2,
        explanation: "Les camps de concentration et d'extermination nazis étaient des lieux où des millions de personnes ont été déportées et assassinées."
    },

    // La Ve République (5 questions)
    {
        question: "La Ve République a été fondée en :",
        answers: ["1945", "1958", "1968", "1981"],
        correct: 1,
        explanation: "La Ve République a été fondée en 1958 par le général de Gaulle, avec l'adoption d'une nouvelle Constitution."
    },
    {
        question: "Qui a été le premier président de la Ve République ?",
        answers: ["François Mitterrand", "Charles de Gaulle", "Georges Pompidou", "Valéry Giscard d'Estaing"],
        correct: 1,
        explanation: "Charles de Gaulle a été le premier président de la Ve République, de 1959 à 1969."
    },
    {
        question: "Depuis 2000, le mandat présidentiel dure :",
        answers: ["4 ans", "5 ans", "7 ans", "10 ans"],
        correct: 1,
        explanation: "Depuis 2000, le mandat présidentiel est de 5 ans (quinquennat). Avant c'était 7 ans (septennat)."
    },
    {
        question: "Mai 1968 en France était :",
        answers: [
            "Une guerre",
            "Un mouvement social et étudiant",
            "Une élection",
            "Un traité européen"
        ],
        correct: 1,
        explanation: "Mai 1968 a été marqué par un important mouvement social et étudiant, avec des manifestations et des grèves générales."
    },
    {
        question: "L'abolition de la peine de mort en France date de :",
        answers: ["1945", "1968", "1981", "2000"],
        correct: 2,
        explanation: "La peine de mort a été abolie en France en 1981 sous la présidence de François Mitterrand, à l'initiative de Robert Badinter."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizQuestions;
}