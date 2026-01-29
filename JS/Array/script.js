let arr=[2,"Arsh",true]; //Js allows you to enter any data type in the array.

let arr1=[["Arsh",1],["Bonzo",2]];
console.log(arr1[1][0]);

arr1.push("Dhillon"); //Push helps to insert elements to the end of array
console.log(arr1[2]);

let val=arr1.pop(); //Remove the last element
console.log(arr1[2]);
console.log(val);

let removeFirst=arr1.shift(); //It removes the First element of the array
console.log(removeFirst);

let addFirst=arr1.unshift(["Arsh",1]); //Add the element in the first positon of the array
console.log(arr1[0]);
