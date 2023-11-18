const games = {
  veryCrazyPineapple: {
	name: "Very Crazy Pineapple",
    blinds: "Blinds",
    sections: [
      {
        stack: [
          { rank: 'I', faceUp: false },
		  { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false }
        ],
        stackText: "3 DOWN",     // Text below the card stack
        bet: 'SB',
      },
      {
        cards: ['C', 'C', 'C'], // Array representing individual cards
        bet: 'SB',
      },
      {
        cards: ['C'], // Single C card
        bet: 'BB',
      },
      {
        special: 'DISCARD 1 CARD', // Special card
        cards: ['C'], // Single C card after the special card
        bet: 'BB',
      },
    ],
    finalHand: [
		'Best 5-card hand from Individual and Community'
	],
  },
  // Add more game types here
  crazyPineapple8: {
	name: "Crazy Pineapple 8",
    blinds: "Blinds * Split Pot * 8 Qualifier",
    sections: [
      {
        stack: [
          { rank: 'I', faceUp: false },
		  { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false }
        ],
        stackText: "3 DOWN",     // Text below the card stack
        bet: 'SB',
      },
      {
        cards: ['C', 'C', 'C'], // Array representing individual cards
        bet: 'SB',
      },
      {
        special: 'DISCARD 1 CARD', // Special card
        cards: ['C'], // Single C card
        bet: 'BB',
      },
      {
        cards: ['C'], // Single C card after the special card
        bet: 'BB',
      },
    ],
    finalHand: [
      '<b>Final Hand:</b> Best 5-card hand from Individual and Community',
      '<b>Split Pot:</b> High hand / Lowest 5 unique ranks A–8'
    ],
  },  
  sevenCardStud: {
    name: "7-Card Stud",
    blinds: "Antes * Low Card Bring-In * 8 Players Max",
    sections: [
      {
        stack: [
          { rank: 'I', faceUp: true },
		  { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false }
        ],
        stackText: "2 DOWN 1 UP",     // Text below the card stack
        bet: 'SB',
      },
      {
        stack: [
          { rank: 'I', faceUp: true }
        ],
        bet: 'SB',
      },
	        {
        stack: [
          { rank: 'I', faceUp: true }
        ],
        bet: 'BB',
      },
      {
        stack: [
          { rank: 'I', faceUp: true }
        ],
        bet: 'BB',
      },
	        {
        stack: [
          { rank: 'I', faceUp: false }
        ],
        bet: 'BB',
      },
    ],
    finalHand: [
      'Optional double bet if any hand is paired on Fourth Street',
      '<b>Final Hand:</b> Best 5-card hand'
    ],
  }, 
  virginiaHoldEm: {
	name: "Virginia Hold'em",
    blinds: "Blinds",
	source: "https://web.archive.org/web/20190520230650/http://www.newvariants.com/virginia-holdem/",
    sections: [
      {
        stack: [
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false }
        ],
        stackText: "2 DOWN",     // Text below the card stack
        bet: 'SB',
      },
      {
        cards: ['C', 'C'], // Array representing individual cards
        bet: 'SB',
      },
      {
        cards: ['I', 'I'], // Array representing individual cards
        bet: 'BB',
      },
      {
        cards: ['C'], // Single C card after the special card
        bet: 'BB',
      },
    ],
    finalHand: [
      '<b>Final Hand:</b> Best 5-card hand from Individual and Community',
    ],
  }, 
  a5SingleDraw: {
	name: "A–5 Single Draw",
    blinds: "Blinds * Bug * Raise to Open * 8 Players Max",
    sections: [
      {
        stack: [
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false }
        ],
        stackText: "5 DOWN",     // Text below the card stack
        bet: 'Bet',
      },
      {
        special: 'DRAW', // Special card 
        bet: 'Bet',
      },
    ],
    finalHand: [
	  'Bug is wild.',
      '<b>Final Hand:</b> Lowest 5 unique ranks (Ace is low); else, lowest 5-card poker hand with Aces being the lowest pair. Straights and flushes do not count against the hand.',
	  '<b>Best Hand:</b> 5432A'
    ],
  },   
  a5TripleDraw: {
	name: "A–5 Triple Draw",
    blinds: "Blinds * 6 Players Max",
    sections: [
      {
        stack: [
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false },
          { rank: 'I', faceUp: false }
        ],
        stackText: "5 DOWN",     // Text below the card stack
        bet: 'Bet',
      },
      {
        special: 'DRAW #1', // Special card 
        bet: 'Bet',
      },
      {
        special: 'DRAW #2', // Special card 
        bet: 'Bet',
      },
	  {
        special: 'DRAW #3', // Special card 
        bet: 'Bet',
      },
	],
    finalHand: [
      '<b>Final Hand:</b> Lowest 5 unique ranks (Ace is low); else, lowest 5-card poker hand with Aces being the lowest pair. Straights and flushes do not count against the hand.',
	  '<b>Best Hand:</b> 5432A'
    ],
  },   
};
