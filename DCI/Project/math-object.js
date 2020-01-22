//Print out the lowest number between -1 and 4.
console.log('Aufgabe 1.1 : ')
let lowerNum = Math.min(-1,1,2,3,4);
console.log(lowerNum);

//Print out the highest number between -1 and 4.
console.log('Aufgabe 1.b : ')
let heightNum = Math.max(-1,1,2,3,4);
console.log(heightNum);

// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
console.log('Aufgabe 2.a : ')
let roundUp = [3321.32321, 326.76, 76788.7, -9.78, 43.342];
for (i = 0 ; i < roundUp.length  ;i++){
    let num = Math.ceil(roundUp[i])
    console.log(num);
}
 // Round down the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
 console.log('Aufgabe 2.b : ')
let roundDown = [3321.32321, 326.76, 76788.7, -9.78, 28.329]
for (i =0 ; i < roundDown.length ;i++){
    let num2 = Math.floor(roundDown[i]);
    console.log(num2);
}

//Create a program that prints a random integer from 1 - 6.
/*
console.log('Aufgabe 3 : ')
let randomNum = Math.floor(Math.random()*5)+1;
console.log(randomNum); */

console.log('Aufgabe 3 : ')
let randomNum = Math.floor(Math.random()*6);
console.log(randomNum <= 0 ? randomNum+1 : randomNum);

