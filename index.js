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
  characters.forEach((char) => {
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
    // Returns a random integer from 1 to 3
  const randomIndex = Math.floor(Math.random() * trackBlocks.length);
  return trackBlocks[randomIndex];
}
