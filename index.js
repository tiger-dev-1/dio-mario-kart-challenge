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

  let player1Score = 0;
  let player2Score = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`\nዙ Round ${round} ዙ`);

    // Draw a track block
    const trackBlock = await getRandomTrackBlock();
    console.log(`Track type: ${trackBlock.name}`);

    // Roll the dice
    const diceResult1 = await rollDice();
    const diceResult2 = await rollDice();

    // Check the total skill
    let player1Skill = 0;
    let player2Skill = 0;
    let skillType = "";

    switch (trackBlock.name) {
      case "STRAIGHT":
        player1Skill = player1.speed;
        player2Skill = player2.speed;
        skillType = "speed";
        break;
      case "CURVE":
        player1Skill = player1.handling;
        player2Skill = player2.handling;
        skillType = "handling";
        break;
      case "CLASH":
        player1Skill = player1.power;
        player2Skill = player2.power;
        skillType = "power";
        break;
    }

    let totalTestSkill1 = player1Skill + diceResult1;
    let totalTestSkill2 = player2Skill + diceResult2;

    console.log(`  🎲 ${player1.name} rolled a dice of ${diceResult1} + ${skillType} ${player1Skill} = ${totalTestSkill1}`);
    console.log(`  🎲 ${player2.name} rolled a dice of ${diceResult2} + ${skillType} ${player2Skill} = ${totalTestSkill2}`);

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`  ${player1.name} won the round! 🎉`);
      if (trackBlock.name === "CLASH") {
        console.log(`  ${player2.name} lost a point! 🐢`);
        player2Score--;
      } else {
        player1Score++;
      }
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`  ${player2.name} won the round! 🎉`);
      if (trackBlock.name === "CLASH") {
        console.log(`  ${player1.name} lost a point! 🐢`);
        player1Score--;
      } else {
        player2Score++;
      }
    } else {
      console.log("  It's a draw for this round!");
    }
    console.log("---------------------------------");
  }

  console.log("\n🏆 Final Result 🏆");
  console.log(`${player1.name} (Player 1): ${player1Score} point(s)`);
  console.log(`${player2.name} (Player 2): ${player2Score} point(s)`);

  if (player1Score > player2Score) {
    console.log(`\nCongratulations, ${player1.name} (Player 1)! You are the grand winner! 🥇`);
  } else if (player2Score > player1Score) {
    console.log(`\nCongratulations, ${player2.name} (Player 2)! You are the grand winner! 🥇`);
  } else {
    console.log("\nThe race ended in a tie! What a dispute!");
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
