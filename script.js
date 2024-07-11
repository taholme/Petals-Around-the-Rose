const NUM_OF_DICE = parseInt(prompt("How many dice would you like to play with? default: 5", 5));

// DOM
const dicesEl = document.getElementById("dices");
const scoreEl = document.getElementById("petalscore");
const rollbtnEl = document.getElementById("rollbtn");
const numwordEl = document.getElementById("numword");

// Puzzle Logic
const getColorValue = () =>
  ["Blue", "Red", "Green"][Math.floor(Math.random() * 3)];
const getDiceValue = () => Math.ceil(Math.random() * 6);
const generateDices = (count) =>
  new Array(count)
    .fill()
    .map(() => ({ color: getColorValue(), value: getDiceValue() }));
const calculatePetals = (dices) =>
  dices
    .filter(({ value }) => value % 2 == 1)
    .reduce((acc, { value }) => acc + value - 1, 0);

// Game Logic
function setup(count) {
  let dices = generateDices(count);
  let petals = calculatePetals(dices);

  dicesEl.innerHTML = dices
    .map(
      (dice) => `<img class="dice" src="./src/${dice.color}${dice.value}.jpg">`
    )
    .join("");
  scoreEl.innerText = petals;
}

rollbtnEl.addEventListener("click", () => setup(NUM_OF_DICE));
setup(NUM_OF_DICE);

const numbersToWords = new Map([
  [0, "Zero"],
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"],
  [6, "Six"],
  [7, "Seven"],
  [8, "Eight"],
  [9, "Nine"],
  [10, "Ten"],
  [11, "Eleven"],
  [12, "Twelve"],
  [13, "Thirteen"],
  [14, "Fourteen"],
  [15, "Fifteen"],
  [16, "Sixteen"],
  [17, "Seventeen"],
  [18, "Eighteen"],
  [19, "Nineteen"],
  [20, "Twenty"],
  [30, "Thirty"],
  [40, "Forty"],
  [50, "Fifty"],
  [60, "Sixty"],
  [70, "Seventy"],
  [80, "Eighty"],
  [90, "Ninety"],
]);

function convertNumberToWords(number) {
  if (numbersToWords.has(number)) return numbersToWords.get(number).toLowerCase();

  let words = [];

  if (number >= 100) {
    words.push(`${convertNumberToWords(Math.floor(number / 100))} hundred`);
    number %= 100;
  }

  if (number > 0) {
    if (words.length) words.push(" and ");
    if (number < 20) words.push(numbersToWords.get(number));
    else {
      words.push(numbersToWords.get(Math.floor(number / 10) * 10));
      if (number % 10) {
        words.push(`-${numbersToWords.get(number % 10)}`);
      }
    }
  }

  return words.map((word) => word.toLowerCase()).join('');
}


numwordEl.innerText = convertNumberToWords(NUM_OF_DICE);