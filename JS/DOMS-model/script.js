// getElementById helps you to get id of HTML element
let playground=document.getElementById('playground');
playground.append("Wizard");


// querySelector helps you to get id using CSS format
let a=document.querySelector(`#playground`);
a.append("is my name");


//How to create element in Js
const magicalOrb=document.createElement('div');
magicalOrb.textContent='Hello my name is Arsh dhillon';
playground.append(magicalOrb);


//How to modify textContent when a selector is already created
const scrollOfWisdom=document.createElement('p');
playground.append(scrollOfWisdom);
scrollOfWisdom.innerText="HahahHahahahahahah";
console.log(scrollOfWisdom.innerText); 

setTimeout(() => {
    
}, timeout);
