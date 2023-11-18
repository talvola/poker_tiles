

// Function to create a card or stack of cards
function createCardSection(sectionData) {
  const section = document.createElement('div');
  section.className = 'card-section';

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';
  section.appendChild(cardContainer);

	// If there's a stack, add it first
	if (sectionData.stack) {
	  const stackContainer = document.createElement('div');
	  stackContainer.className = 'card-stack-container';
	  cardContainer.appendChild(stackContainer); // Add the container to the cardContainer

	  const stackDiv = document.createElement('div');
	  stackDiv.className = 'card-stack';
	  
	  sectionData.stack.forEach((cardData, index) => {
		  const card = document.createElement('div');
		  card.className = `stacked card-base ${cardData.faceUp ? 'face-up' : 'face-down'}`;
		  card.innerHTML = `<span>${cardData.rank}</span>`;
		  
		  // Dynamically set the position of each card in the stack
		  const offset = index * 10; // Adjust the offset as needed
		  const negative_offset = index * -10; // Adjust the offset as needed 
		  card.style.top = `${negative_offset}px`;
		  card.style.right = `${offset}px`;
		  card.style.zIndex = sectionData.stack.length - index; // Ensures the top card has the highest z-index

		  stackDiv.appendChild(card);
	  });
	  
	  stackContainer.appendChild(stackDiv); // Add the stack to the stackContainer

	  // Add the text below the stack if it's defined
	  if (sectionData.stackText) {
		const stackTextDiv = document.createElement('div');
		stackTextDiv.className = 'stack-text';
		stackTextDiv.textContent = sectionData.stackText;
		stackContainer.appendChild(stackTextDiv); // Add the text below the stack within the container
	  }
	}

  // If there's a special card, add it before the individual cards
  if (sectionData.special) {
    const specialCard = document.createElement('div');
    specialCard.className = 'card discard card-base';
    specialCard.innerHTML = `<span>${sectionData.special}</span>`;
    cardContainer.appendChild(specialCard);
  }

  // Add individual cards after the special card
  if (sectionData.cards) {
    sectionData.cards.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card card-base';
      cardDiv.setAttribute('data-letter', card);
      cardDiv.innerHTML = `<span>${card}</span>`;
      cardContainer.appendChild(cardDiv);
    });
  }

  // Finally, add the bet button if it exists
  if (sectionData.bet) {
    const betButton = document.createElement('button');
    betButton.className = `bet-button ${sectionData.bet.toLowerCase()}`;
    betButton.textContent = sectionData.bet;
    section.appendChild(betButton);
  }

  return section;
}


function buildGameLayout(gameType) {
  const gameData = games[gameType];
  const gameContainer = document.querySelector('.game-container');

  // Set the page title
  document.title = gameData.name;
  
  // Set game title and blinds
  const gameTitle = document.createElement('h1');
  gameTitle.textContent = gameData.name;
  gameTitle.id = 'game-title'; // This line sets the ID
  
  const gameBlinds = document.createElement('h2');
  gameBlinds.textContent = gameData.blinds;
  gameBlinds.id = 'game-blinds'; // This line sets the ID

  const handContainer = document.createElement('div');
  handContainer.className = 'hand';

  gameData.sections.forEach(sectionData => {
    handContainer.appendChild(createCardSection(sectionData));
  });

  const finalHand = document.createElement('div');
  finalHand.className = 'final-hand';

  // Loop over each line of the final hand description
  gameData.finalHand.forEach(line => {
    const finalHandLine = document.createElement('div');
    finalHandLine.innerHTML = line; // Set the HTML content
    finalHand.appendChild(finalHandLine);
  });

  // Clear existing content and append new content
  gameContainer.innerHTML = '';
  gameContainer.appendChild(gameTitle);
  gameContainer.appendChild(gameBlinds);
  gameContainer.appendChild(handContainer);
  gameContainer.appendChild(finalHand);
}

document.addEventListener('DOMContentLoaded', function() {
// Populate the game selector dropdown.
const gameSelector = document.getElementById('game-selector');
Object.keys(games).forEach(gameKey => {
  const option = document.createElement('option');
  option.value = gameKey;
  option.textContent = games[gameKey].name;
  gameSelector.appendChild(option);
});

// Function to build the game layout based on the selected game.
function buildSelectedGameLayout(selectedGame) {
  const gameContainer = document.querySelector('.game-container');
  
  gameContainer.innerHTML = ''; // Clear the previous game layout.
  buildGameLayout(selectedGame); // This is your function to build the game layout.
}

// Event listener for changes in the game selector dropdown.
gameSelector.addEventListener('change', function() {
  buildSelectedGameLayout(this.value);
});

// Initially build the layout for the default game.
buildSelectedGameLayout('virginiaHoldEm');
});
  