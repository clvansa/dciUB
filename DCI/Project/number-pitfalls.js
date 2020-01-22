// Question: Comment your answer in your js file: What does NaN stand for?
console.log('Aufgabe 1 : ')
console.log(isNaN('home'));
console.log(isNaN(3))
console.log(typeof(NaN))

//2. Rounding
console.log('Aufgabe 2 : ')
console.log((0.1 * 0.2).toFixed(2));

// 3. Infinity
console.log('Aufgabe 3 : ')
console.log(Infinity/0);
console.log(Infinity/Infinity);
console.log(1/0);



// Bonus 
console.log((false) ? "a": "b"); 
console.log((undefined) ? "a" : "b");
console.log((NaN) ? "a" : "b");
console.log(false +1 ); // false wird zu 0 umgewandelt 
console.log(true +1 );   // true wird zu 1 umgewandelt 
