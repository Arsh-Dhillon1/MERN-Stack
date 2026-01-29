// function greet(){
//     console.log("Hello lil bro");
// }
// greet();

// let sum=function(a,b){
//     console.log(a+b);
//     return a+b;
// };

// function sumi(a,b){
//     console.log(a+b);
// }

// sum(4,5);
// sumi(4,5);

// let square = x => x*x;
// console.log(square(4));

function nextInLine(arr,item){
    arr.push(item);
    arr.shift();
}

let arr=[1,2,3,4,5];
console.log("Before: " + JSON.stringify(arr));
nextInLine(arr,6);
console.log("After: " + JSON.stringify(arr));