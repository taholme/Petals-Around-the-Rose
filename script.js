const getColorValue = () => ["Blue", "Red", "Green"][Math.floor(Math.random() * 3)];
const getDiceValue = () => Math.ceil(Math.random() * 6);
const generateDices = (count) => new Array(count).fill().map(() => ({"color": getColorValue(), "value": getDiceValue()}));
const calculatePetals = (dices) => dices.filter(({value}) => value == 3 || value == 5).reduce((acc, {value}) => acc + value-1,0);


let dices = generateDices(5);

let petals = calculatePetals(dices);