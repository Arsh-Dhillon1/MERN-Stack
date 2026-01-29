let age;
function ageChecker(age){
    if(age<5) return "Go Away Kid";
    else if(age<10) return "You have not grown yet";
    else if(age<18) return "You are a teen currently"
    else return "You are adult, go do your work";
}
console.log(ageChecker(18));