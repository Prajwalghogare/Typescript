// Object creation
const person = {
    name: 'Virat',
    nation: 'India',
    jersey: 23
};
console.log(person);
var newPlayer = Object.create(person);
newPlayer.name = 'Rohit';
newPlayer.nation = 'India';
newPlayer.jersey = 45;
console.log(newPlayer);
