const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

  const dog = {
      "name": "Spot",
      "legs": 4,
      "tails": 1,
      "enemies": ["fleas", "cats"]
  }

  const human = {
    "name": "Alex",
    "legs": 2,
    "tails": 0,
    "enemies": ["Hedgfund Managers", "Politicians"]
}

var Kitty = cat;
var Doggy = dog;
var Person = human;

const nameValue = cat.name;
const nameValue = dog.name;
const nameValue = human.name;

const warriors = ["apache", "samurai", "viking", "spartan", "high-lander"];
for (let i = 0; i < warriors.length; i++) {
  console.log(warriors[i])
};