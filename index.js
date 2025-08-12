// --- Setup for reading user input from the terminal ---
import readline from "readline";

const characters = [
  {
    id: 1,
    name: "Mario",
    speed: 4,
    handling: 3,
    power: 3,
  },
  {
    id: 2,
    name: "Peach",
    speed: 3,
    handling: 4,
    power: 2,
  },
  {
    id: 3,
    name: "Yoshi",
    speed: 2,
    handling: 4,
    power: 3,
  },
  {
    id: 4,
    name: "Bowser",
    speed: 5,
    handling: 2,
    power: 5,
  },
  {
    id: 5,
    name: "Luigi",
    speed: 3,
    handling: 4,
    power: 4,
  },
  {
    id: 6,
    name: "Donkey Kong",
    speed: 2,
    handling: 2,
    power: 5,
  },
];

const trackBlocks = [
  {
    id: 1,
    name: "STRAIGHT",
  },
  {
    id: 2,
    name: "CURVE",
  },
  {
    id: 3,
    name: "CLASH",
  },
];

const dice = [1, 2, 3, 4, 5, 6];

// Creates the communication "bridge" to the terminal
const rl = readline.createInterface({
  input: process.stdin, // Where to listen for input (the keyboard)
  output: process.stdout, // Where to send output (the screen)
});

// Displays the character list cleanly, showing only ID and name.
function displayCharacters(characterList) {
  console.log("\nAvailable Characters:");
  characterList.forEach((char) => {
    console.log(`  [${char.id}] ${char.name}`);
  });
}

// A helper function to ask a question and wait for the answer.
// It wraps readline's callback in a Promise, which works well with async/await.
function askWhichChar(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Temporary call to test the function. We will move this later.
//displayCharacters();

// The main game function will be called here in the future.

// --- Game Logic Functions ---
async function rollDice() {
  // Returns a random integer from 1 to 6
  const randomIndex = Math.floor(Math.random() * dice.length);
  return dice[randomIndex];
}

async function getRandomTrackBlock() {
  // Returns a random track block object
  const randomIndex = Math.floor(Math.random() * trackBlocks.length);
  return trackBlocks[randomIndex];
}

async function chooseCharacter(prompt, availableCharacters) {
  for (let i = 0; i < 3; i++) {
    const id = await askWhichChar(prompt);
    const selectedChar = availableCharacters.find((char) => char.id === parseInt(id));

    if (!selectedChar) {
      console.log("Invalid Character Number! Please, try again.");
      continue;
    }

    return selectedChar;
  }
  return null;
}

async function playRaceEngine(player1, player2) {
  console.log("\n🏁 Race starting! 🏁\n");

  for (let round = 1; round <= 5; round++) {
    console.log(`\nዙ Round ${round} ዙ`);
    // The round's logic (track draw, dice, etc.) will go here.
  }
}

(async function main() {
  console.log("Welcome to Mario Kart JS!");

  displayCharacters(characters);
  const player1 = await chooseCharacter("\nPlayer 1, choose your character by their number: ", characters);
  if (!player1) {
    console.log("\nToo many invalid attempts for Player 1. \nEnding Game... \nRestart whenever you like It! =)");
    rl.close();
    return;
  }
  console.log(`Player 1 selected: ${player1.name}`);

  const availableForP2 = characters.filter((char) => char.id !== player1.id);
  displayCharacters(availableForP2);
  const player2 = await chooseCharacter("Player 2, choose your character by their number: ", availableForP2);
  if (!player2) {
    console.log("\nToo many invalid attempts for Player 2. \nEnding Game... \nRestart whenever you like It! =)");
    rl.close();
    return;
  }
  console.log(`Player 2 selected: ${player2.name}`);

  await playRaceEngine(player1, player2);

  rl.close();
})();
