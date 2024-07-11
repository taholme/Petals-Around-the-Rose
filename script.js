// DOM
const dicesEl = document.getElementById("dices");
const scoreEl = document.getElementById("petalscore");
const rollbtnEl = document.getElementById("rollbtn");

// Puzzle Logic
const getColorValue = () => ["Blue", "Red", "Green"][Math.floor(Math.random() * 3)];
const getDiceValue = () => Math.ceil(Math.random() * 6);
const generateDices = (count) => new Array(count).fill().map(() => ({"color": getColorValue(), "value": getDiceValue()}));
const calculatePetals = (dices) => dices.filter(({value}) => value % 2 == 1).reduce((acc, {value}) => acc + value-1,0);


// Game Logic
function setup(count) {
    let dices = generateDices(5);
    let petals = calculatePetals(dices);

    dicesEl.innerHTML = dices.map((dice) => `<img class="dice" src="./src/${dice.color}${dice.value}.jpg">`).join('');
    scoreEl.innerText = petals;
}

rollbtnEl.addEventListener('click', setup);
setup();