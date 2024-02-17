let enteredResponses = [];
let responses = []
let currentEmojiIndex = 0;
let perso = [
  {
    "nom": "Gon",
    "imageURL": "images/gon.webp",
    "emojis": ["🍃", "👊", "🎣", "😊"]
  },
  {
    "nom": "Killua",
    "imageURL": "images/Killua.webp",
    "emojis": ["⚡", "🍦", "👥", "😐"]
  },
  {
    "nom": "Kurapika",
    "imageURL": "images/Kurapika.webp",
    "emojis": ["🔗", "👁️", "🔥", "📚"]
  },
  {
    "nom": "Hisoka",
    "imageURL": "images/Hisoka.webp",
    "emojis": ["🎴", "🤡", "🔪", "😈"]
  },
  {
    "nom": "Shalnark",
    "imageURL": "images/shalnark.webp",
    "emojis":  ["🐜", "📡", "💼", "🧠"]
  },
  {
    "nom": "Bonolenov Ndongo",
    "imageURL": "images/bonolenov.webp",
    "emojis":  ["💃", "🐍", "🎶", "🌟"]
  },
  {
    "nom": "Shizuku Murasaki",
    "imageURL": "images/shizuku.webp",
    "citation": "La propreté est essentielle.",
    "emojis": ["🧹", "🧼", "🪣", "💜"]
  },
  {
    "nom": "Kortopi",
    "imageURL": "images/kortopi.webp",
    "citation": "Pourquoi faire quelque chose quand on peut juste le dupliquer ?",
    "emojis": ["🔄", "🖨️", "📦", "💚"]
  },
  {
    "nom": "Pakunoda",
    "imageURL": "images/pakunoda.webp",
    "citation": "Les yeux sont le miroir de l'âme, mais les souvenirs sont la clé de la vérité.",
    "emojis": ["👁️", "🔍", "📖", "💔"]
  },
  {
    "nom": "Uvoguine",
    "imageURL": "images/uvoguine.webp",
    "citation": "La force brute peut écraser tout ce qui se dresse sur son chemin.",
    "emojis": ["💪", "🏋️", "🩸", "👑"]
  },
  {
    "nom": "Chrollo Lucilfer",
    "imageURL": "images/chrollo.webp",
    "citation": "La vérité est ce que je déclare être la vérité.",
    "emojis": ["🎭", "🤔", "🔮", "😈"]
  },
  {
    "nom": "Nobunaga Hazama",
    "imageURL": "images/nobunaga.webp",
    "citation": "La mort est la fin ultime de tous les voyages.",
    "emojis": ["⚔️", "🤺", "🎌", "🔪"]
  },
  {
    "nom": "Feitan Portor",
    "imageURL": "images/feitan.webp",
    "citation": "Les souffrances que tu ressens ne peuvent pas être comparées à celles que j'ai subies.",
    "emojis": ["🔥", "💀", "🗡️", "😠"]
  },
  {
    "nom": "Franklin Bordeau",
    "imageURL": "images/franklin.webp",
    "citation": "Je tire seulement sur ceux que j'ai décidé de tuer.",
    "emojis": ["🔫", "💥", "💣", "😎"]
  },
  {
    "nom": "Machi Komacine",
    "imageURL": "images/machi.webp",
    "citation": "Si tu fais quelque chose de mal, je te le ferai regretter.",
    "emojis": ["💉", "🕸️", "🩹", "👁️‍🗨️"]
  },
  {
    "nom": "Phinks Magcub",
    "imageURL": "images/phinks.webp",
    "citation": "Je suis un homme qui préfère les actions aux mots.",
    "emojis": ["👊", "💢", "💥", "😏"]
  },
  {
    "nom": "Cheadle Yorkshire",
    "imageURL": "images/cheadle.webp",
    "citation": "La connaissance est la clé pour prévoir l'avenir.",
    "emojis": ["📚", "🔍", "🔮", "👩‍🏫"]
  },
  {
    "nom": "Mizaisutomu Nana",
    "imageURL": "images/mizaisutomu.webp",
    "citation": "La justice peut parfois être aveugle, mais elle ne doit jamais être ignorée.",
    "emojis": ["⚖️", "👮", "🕵️‍♂️", "🧠"]
  },
  {
    "nom": "Kanzai",
    "imageURL": "images/kanzai.webp",
    "citation": "La force brute peut parfois résoudre les problèmes les plus complexes.",
    "emojis": ["💪", "🤛", "🔥", "😤"]
  },
  {
    "nom": "Saccho Kobayakawa",
    "imageURL": "images/saccho.webp",
    "citation": "La patience est une vertu que peu de gens possèdent, mais elle est essentielle pour le succès.",
    "emojis": ["⏳", "🕰️", "⌛", "🧘"]
  },
  {
    "nom": "Botobai Gigante",
    "imageURL": "images/botobai.webp",
    "citation": "La persévérance est la clé de la réussite, peu importe les obstacles qui se dressent sur votre chemin.",
    "emojis": ["🚀", "🏋️‍♂️", "💼", "🔥"]
  },
  {
    "nom": "Ginta",
    "imageURL": "images/ginta.webp",
    "citation": "La sagesse vient avec l'expérience, mais elle nécessite aussi une ouverture d'esprit pour apprendre.",
    "emojis": ["🦉", "📖", "👴", "🧠"]
  },
  {
    "nom": "Saiyu",
    "imageURL": "images/saiyu.webp",
    "citation": "La vérité peut être aussi changeante que le vent, mais elle est toujours là, attendant d'être découverte.",
    "emojis": ["🌪️", "🔍", "🔮", "🌀"]
  },
  {
    "nom": "Cluck",
    "imageURL": "images/cluck.webp",
    "citation": "L'humilité est une vertu qui permet de grandir et d'apprendre même dans les moments de succès.",
    "emojis": ["🐔", "🌟", "📚", "🧑‍🎓"]
  },
  {
    "nom": "Gel",
    "imageURL": "images/gel.webp",
    "citation": "La patience est la clé pour comprendre les mystères les plus complexes de la vie.",
    "emojis": ["⏳", "🔍", "🔑", "🤔"]
  },
  {
    "nom": "Leolio",
    "imageURL": "images/leolio.webp",
    "citation": "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
    "emojis": ["💼", "💉", "💪", "👨‍⚕️"]
  },
  {
    "nom": "Pariston Hill",
    "imageURL": "images/pariston.webp",
    "citation": "La politique est l'art de contrôler les gens sans qu'ils s'en rendent compte.",
    "emojis": ["🎩", "👑", "📜", "🤵"]
  }
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
      let message;
      
      if (isCorrectGuess) {
        message = "Correct! It's " + currentCharacter.nom;
      } 
      else {
        message = "Wrong! Try again.";
        // Si la réponse est incorrecte, on affiche un emoji supplémentaire
        if (currentEmojiIndex < currentCharacter.emojis.length - 1) {
            currentEmojiIndex++;
        }
        displayCurrentEmoji();
      }
    
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

// Affiche le ou les emojis actuels pour le personnage
function displayCurrentEmoji() {
    const emojiDisplay = document.getElementById('emojiDisplay');
    if (currentEmojiIndex < currentCharacter.emojis.length) {
        emojiDisplay.textContent = currentCharacter.emojis.slice(0, currentEmojiIndex + 1).join(' ');
    } else {
        emojiDisplay.textContent = ''; // N'affiche aucun emoji si tous ont été montrés
    }
}

// Affichez le nombre spécifié d'emojis du personnage courant.
function updateEmojiDisplay(numberOfEmojis) {
    const emojiDisplay = document.getElementById('emojiDisplay');
    emojiDisplay.textContent = currentCharacter.emojis.slice(0, numberOfEmojis).join(' ');
}
// Fonction pour initialiser le jeu et afficher le premier emoji
function initGame() {
    currentCharacter = selectRandomCharacter();
    currentEmojiIndex = 0;
    displayCurrentEmoji();
    document.getElementById('responseInput').addEventListener('input', filterAutocompleteList);
    document.getElementById('submitButton').addEventListener('click', submitResponse);
}

document.addEventListener('DOMContentLoaded', initGame);