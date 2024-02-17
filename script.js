let enteredResponses = [];
let responses = []
let perso = [
  {
    "nom": "Gon",
    "genre": "Masculin",
    "age": "12 ans",
    "couleurCheveux": "Noir",
    "affiliation": "Hunter",
    "typeNen": "Renforcement",
    "armePredilection": "Canne à pêche",
    "statut": "Vivant",
    "imageURL": "images/gon.webp",
    "citation": "Si tu veux vraiment tuer quelqu'un, sois prêt à mourir aussi.",
    "emojis": ["🍃", "👊", "🎣", "😊"]
  },
  {
    "nom": "Killua",
    "genre": "Masculin",
    "age": "12 ans",
    "couleurCheveux": "Blanc",
    "affiliation": "Famille Zoldyck",
    "typeNen": "Transformation",
    "armePredilection": "Yo-yos",
    "statut": "Vivant",
    "imageURL": "images/Killua.webp",
    "citation": "Parfois, la victoire ne va pas au plus fort, mais à celui qui sait comment frapper.",
    "emojis": ["⚡", "🍦", "👥", "😐"]
  },
  {
    "nom": "Kurapika",
    "genre": "Masculin",
    "age": "17 ans",
    "couleurCheveux": "Blond",
    "affiliation": "Clan Kurta",
    "typeNen": "Matérialisation",
    "armePredilection": "Chaînes",
    "statut": "Vivant",
    "imageURL": "images/Kurapika.webp",
    "citation": "Je ne laisserai pas ma vengeance devenir un fardeau pour les autres. Je la porterai seul jusqu'à la fin.",
    "emojis": ["🔗", "👁️", "🔥", "📚"]
  },
  {
    "nom": "Hisoka",
    "genre": "Masculin",
    "age": "28 ans",
    "couleurCheveux": "Roux",
    "affiliation": "Indépendant",
    "typeNen": "Matérialisation",
    "armePredilection": "Cartes à jouer",
    "statut": "Vivant",
    "imageURL": "images/Hisoka.webp",
    "citation": "Ce qui m'excite, c'est la pensée de combattre des personnes fortes dans des duels intenses. Voilà ce qui me fait vibrer.",
    "emojis": ["🎴", "🤡", "🔪", "😈"]
  },
  {
    "nom": "Shalnark",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Blond",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Manipulation",
    "armePredilection": "Antenne Nen",
    "statut": "Vivant",
    "imageURL": "images/shalnark.webp",
    "citation": "Les humains sont comme les fourmis. On ne peut pas prédire leurs actions.",
    "emojis":  ["🐜", "📡", "💼", "🧠"]
  },
  {
    "nom": "Bonolenov Ndongo",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Chauve",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Spécialisation",
    "armePredilection": "Danse du Serpent",
    "statut": "Vivant",
    "imageURL": "images/bonolenov.webp",
    "citation": "Ma danse est mon Nen, et mon Nen est ma danse.",
    "emojis":  ["💃", "🐍", "🎶", "🌟"]
  },
  {
    "nom": "Shizuku Murasaki",
    "genre": "Féminin",
    "age": "Inconnu",
    "couleurCheveux": "Violet",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Emission",
    "armePredilection": "Aspirateur Nen",
    "statut": "Vivante",
    "imageURL": "images/shizuku.webp",
    "citation": "La propreté est essentielle.",
    "emojis": ["🧹", "🧼", "🪣", "💜"]
  },
  {
    "nom": "Kortopi",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Vert",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Spécialisation",
    "armePredilection": "Copie Nen",
    "statut": "Vivant",
    "imageURL": "images/kortopi.webp",
    "citation": "Pourquoi faire quelque chose quand on peut juste le dupliquer ?",
    "emojis": ["🔄", "🖨️", "📦", "💚"]
  },
  {
    "nom": "Pakunoda",
    "genre": "Féminin",
    "age": "Inconnu",
    "couleurCheveux": "Gris",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Spécialisation",
    "armePredilection": "Lecture des pensées",
    "statut": "Décédée",
    "imageURL": "images/pakunoda.webp",
    "citation": "Les yeux sont le miroir de l'âme, mais les souvenirs sont la clé de la vérité.",
    "emojis": ["👁️", "🔍", "📖", "💔"]
  },
  {
    "nom": "Uvoguine",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Emission",
    "armePredilection": "Bâton Nen",
    "statut": "Décédé",
    "imageURL": "images/uvoguine.webp",
    "citation": "La force brute peut écraser tout ce qui se dresse sur son chemin.",
    "emojis": ["💪", "🏋️", "🩸", "👑"]
  },
  {
    "nom": "Chrollo Lucilfer",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Manipulation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/chrollo.webp",
    "citation": "La vérité est ce que je déclare être la vérité.",
    "emojis": ["🎭", "🤔", "🔮", "😈"]
  },
  {
    "nom": "Nobunaga Hazama",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Emission",
    "armePredilection": "Katana",
    "statut": "Vivant",
    "imageURL": "images/nobunaga.webp",
    "citation": "La mort est la fin ultime de tous les voyages.",
    "emojis": ["⚔️", "🤺", "🎌", "🔪"]
  },
  {
    "nom": "Feitan Portor",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Emission",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/feitan.webp",
    "citation": "Les souffrances que tu ressens ne peuvent pas être comparées à celles que j'ai subies.",
    "emojis": ["🔥", "💀", "🗡️", "😠"]
  },
  {
    "nom": "Franklin Bordeau",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Chauve",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Emission",
    "armePredilection": "Mitraillette Nen",
    "statut": "Vivant",
    "imageURL": "images/franklin.webp",
    "citation": "Je tire seulement sur ceux que j'ai décidé de tuer.",
    "emojis": ["🔫", "💥", "💣", "😎"]
  },
  {
    "nom": "Machi Komacine",
    "genre": "Féminin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Transmutation",
    "armePredilection": "Fils Nen",
    "statut": "Vivante",
    "imageURL": "images/machi.webp",
    "citation": "Si tu fais quelque chose de mal, je te le ferai regretter.",
    "emojis": ["💉", "🕸️", "🩹", "👁️‍🗨️"]
  },
  {
    "nom": "Phinks Magcub",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Brigade Fantôme",
    "typeNen": "Emission",
    "armePredilection": "Poing Nen",
    "statut": "Vivant",
    "imageURL": "images/phinks.webp",
    "citation": "Je suis un homme qui préfère les actions aux mots.",
    "emojis": ["👊", "💢", "💥", "😏"]
  },
  {
    "nom": "Cheadle Yorkshire",
    "genre": "Féminin",
    "age": "Inconnu",
    "couleurCheveux": "Blond",
    "affiliation": "Zodiaque",
    "typeNen": "Manipulation",
    "armePredilection": "Inconnue",
    "statut": "Vivante",
    "imageURL": "images/cheadle.webp",
    "citation": "La connaissance est la clé pour prévoir l'avenir.",
    "emojis": ["📚", "🔍", "🔮", "👩‍🏫"]
  },
  {
    "nom": "Mizaisutomu Nana",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Brun",
    "affiliation": "Zodiaque",
    "typeNen": "Manipulation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/mizaisutomu.webp",
    "citation": "La justice peut parfois être aveugle, mais elle ne doit jamais être ignorée.",
    "emojis": ["⚖️", "👮", "🕵️‍♂️", "🧠"]
  },
  {
    "nom": "Kanzai",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Noir",
    "affiliation": "Zodiaque",
    "typeNen": "Emission",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/kanzai.webp",
    "citation": "La force brute peut parfois résoudre les problèmes les plus complexes.",
    "emojis": ["💪", "🤛", "🔥", "😤"]
  },
  {
    "nom": "Saccho Kobayakawa",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Chauve",
    "affiliation": "Zodiaque",
    "typeNen": "Spécialisation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/saccho.webp",
    "citation": "La patience est une vertu que peu de gens possèdent, mais elle est essentielle pour le succès.",
    "emojis": ["⏳", "🕰️", "⌛", "🧘"]
  },
  {
    "nom": "Botobai Gigante",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Blanc",
    "affiliation": "Zodiaque",
    "typeNen": "Emission",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/botobai.webp",
    "citation": "La persévérance est la clé de la réussite, peu importe les obstacles qui se dressent sur votre chemin.",
    "emojis": ["🚀", "🏋️‍♂️", "💼", "🔥"]
  },
  {
    "nom": "Ginta",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Blanc",
    "affiliation": "Zodiaque",
    "typeNen": "Manipulation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/ginta.webp",
    "citation": "La sagesse vient avec l'expérience, mais elle nécessite aussi une ouverture d'esprit pour apprendre.",
    "emojis": ["🦉", "📖", "👴", "🧠"]
  },
  {
    "nom": "Saiyu",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Gris",
    "affiliation": "Zodiaque",
    "typeNen": "Spécialisation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/saiyu.webp",
    "citation": "La vérité peut être aussi changeante que le vent, mais elle est toujours là, attendant d'être découverte.",
    "emojis": ["🌪️", "🔍", "🔮", "🌀"]
  },
  {
    "nom": "Cluck",
    "genre": "Feminin",
    "age": "Inconnu",
    "couleurCheveux": "Bleu",
    "affiliation": "Zodiaque",
    "typeNen": "Emission",
    "armePredilection": "Inconnue",
    "statut": "Vivante",
    "imageURL": "images/cluck.webp",
    "citation": "L'humilité est une vertu qui permet de grandir et d'apprendre même dans les moments de succès.",
    "emojis": ["🐔", "🌟", "📚", "🧑‍🎓"]
  },
  {
    "nom": "Gel",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Bleu",
    "affiliation": "Zodiaque",
    "typeNen": "Manipulation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/gel.webp",
    "citation": "La patience est la clé pour comprendre les mystères les plus complexes de la vie.",
    "emojis": ["⏳", "🔍", "🔑", "🤔"]
  },
  {
    "nom": "Leolio",
    "genre": "Masculin",
    "age": "19",
    "couleurCheveux": "Noir",
    "affiliation": "Hunter",
    "typeNen": "Emission",
    "armePredilection": "Poing",
    "statut": "Vivant",
    "imageURL": "images/leolio.webp",
    "citation": "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
    "emojis": ["💼", "💉", "💪", "👨‍⚕️"]
  },
  {
    "nom": "Pariston Hill",
    "genre": "Masculin",
    "age": "Inconnu",
    "couleurCheveux": "Blanc",
    "affiliation": "Zodiaque",
    "typeNen": "Manipulation",
    "armePredilection": "Inconnue",
    "statut": "Vivant",
    "imageURL": "images/pariston.webp",
    "citation": "La politique est l'art de contrôler les gens sans qu'ils s'en rendent compte.",
    "emojis": ["🎩", "👑", "📜", "🤵"]
  },  
];

perso.forEach(function(perso) {
  responses.push(perso.nom);
});

function filterAutocompleteList() {
  const input = document.getElementById('responseInput');
  const filter = input.value.toLowerCase();
  const divList = document.getElementById('autocompleteList');
  divList.innerHTML = '';
  let index = 0;

  if (!filter) {
    return false;
  }

  responses.forEach(function(response) {
    if (response.toLowerCase().includes(filter) && !enteredResponses.includes(response)) {
      const div = document.createElement("div");
      div.innerHTML = response;
      div.id = 'autocompleteOption-' + index++; // Ajout d'un ID unique
      div.addEventListener("click", function() {
        input.value = this.innerText;
        divList.innerHTML = '';
      });
      divList.appendChild(div);
    }
  });
}

function submitResponse() {
  const input = document.getElementById('responseInput');
  if (input.value && !enteredResponses.includes(input.value)) {
    enteredResponses.push(input.value);
    addToHistory(input.value);
    const isCorrectGuess = input.value.toLowerCase() === currentCharacter.nom.toLowerCase();
    let message = isCorrectGuess ? "Correct! It's " + currentCharacter.nom : "Wrong! Try again.";

    document.getElementById('feedbackMessage').textContent = message;
  }
  input.value = ''; // Clear input after submission
  filterAutocompleteList(); // Update autocomplete list
}

function addToHistory(response) {
  const historyList = document.getElementById('responseHistory');
  const listItem = document.createElement('div');
  listItem.classList.add('history-item');

  const persoDetails = perso.find(p => p.nom.toLowerCase() === response.toLowerCase());
  
  if (persoDetails) {
    listItem.innerHTML = `
    <div class="characteristic ${persoDetails.nom.toLowerCase() === currentCharacter.nom.toLowerCase() ? 'correct' : 'incorrect'}"> ${persoDetails.nom}</div>
    <div class="characteristic ${persoDetails.genre === currentCharacter.genre ? 'correct' : 'incorrect'}">${persoDetails.genre}</div>
    <div class="characteristic ${persoDetails.age === currentCharacter.age ? 'correct' : 'incorrect'}">${persoDetails.age}</div>
    <div class="characteristic ${persoDetails.couleurCheveux === currentCharacter.couleurCheveux ? 'correct' : 'incorrect'}">${persoDetails.couleurCheveux}</div>
    <div class="characteristic ${persoDetails.affiliation === currentCharacter.affiliation ? 'correct' : 'incorrect'}">${persoDetails.affiliation}</div>
    <div class="characteristic ${persoDetails.typeNen === currentCharacter.typeNen ? 'correct' : 'incorrect'}">${persoDetails.typeNen}</div>
    <div class="characteristic ${persoDetails.armePredilection === currentCharacter.armePredilection ? 'correct' : 'incorrect'}">${persoDetails.armePredilection}</div>
    <div class="characteristic ${persoDetails.statut === currentCharacter.statut ? 'correct' : 'incorrect'}">${persoDetails.statut}</div>
    <img src="${persoDetails.imageURL}" alt="" class="history-image">
    `;
  } else {
    listItem.textContent = response; // Affiche juste le nom si les détails ne sont pas trouvés
  }
  if (historyList.firstChild) {
    historyList.insertBefore(listItem, historyList.firstChild);
  } else {
    historyList.appendChild(listItem);
  }
}
// Ajout d'un gestionnaire d'événements pour la touche "Entrée"
document.getElementById('responseInput').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Empêcher le comportement par défaut
      submitFirstAutocompleteOption();
    }
  });

// Fonction pour soumettre la première option de la liste d'autocomplétion
function submitFirstAutocompleteOption() {
    const firstOption = document.getElementById('autocompleteOption-0');
    if (firstOption) {
      document.getElementById('responseInput').value = firstOption.textContent;
      submitResponse();
    }
  }

// Select a random character
function selectRandomCharacter() {
  return perso[Math.floor(Math.random() * perso.length)];
}

// Global variable to store the current character to guess
var currentCharacter = selectRandomCharacter();
console.log(currentCharacter)