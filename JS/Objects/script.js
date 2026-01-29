let dog={
    "name":"Bonzo",
    "paws":4,
    "tails":1,
    "friends":["everything"]
};

let name=dog.name;
let friends=dog.friends;
console.log(name);
console.log(friends);


//For the keys with spaces, use the following below
let doggy={
    "First name":"Bonzo",
    "How many tails":1
};
console.log(firstname=doggy["First name"]);
console.log(doggy["How many tails"]);
doggy.bark="woof";
console.log(doggy["bark"]);


//How to delete a property from an object
delete doggy.bark;
console.log(doggy.bark); 