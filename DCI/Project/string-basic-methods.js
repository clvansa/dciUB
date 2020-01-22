// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
console.log('aufgabe 1 :');
let text = "I can walk in the park all day!";
console.log(text.substring(18,22));


//Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
console.log('aufgabe 2 :');
let a= 'Hello World';
console.log(a.toUpperCase());

/*Declare another variable with the value of "Hello Earthling". Convert the value to lower case and 
print the converted value to the console.*/
console.log('aufgabe 3 :');
let b= 'Hello World';
console.log(b.toLowerCase());


//Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
console.log('aufgabe 4 :');
let c = 'JavaScript';
console.log(c.substring(3,6));

//Check if the sentence "nice shoes" contains the letter l or n.
console.log('aufgabe 5 :');
let d = 'nice shoes';
console.log(d.includes("l") || d.includes("n"));

/*Create a new string from a given string with the first character of the given string added at the front and back,
 i.e., expected output: Bananas => BBananasB */
console.log('aufgabe 6 :');
let bananas = "Bananas" ;
let front = bananas.substring(0,1);
console.log(`${front}${bananas}${front}`);

/*Create a new string from a given string taking the last 3 characters of the string and add them to both
 the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch*/
console.log('aufgabe 7 :');
let scritch = "Scritch" ;
let back = scritch.substring(4);
console.log(`${back}${scritch}${back}`);

/*Create a variable and assign "Oi, oi, oi!" to it. Then, convert the value to upper case and print the converted 
value to the console, checking whether it includes "oi".*/
console.log('aufgabe 8 :');
let e= 'Oi, oi, oi!';
let whether = 'whether'
console.log(e.toUpperCase());
console.log(whether.includes(e.substring(0,2)));

/*Create a new string from a given string by changing the position of first and last characters.
 The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB*/
console.log('aufgabe 9 :');
let boogieWoogie = "BoogieWoogie";
//let word = boogieWoogie.substring(1,boogieWoogie.length-1);
//let end = boogieWoogie.substring(boogieWoogie.length -1) + word + boogieWoogie.substring(0,1)

let word = boogieWoogie.substring(1,11);
let end = boogieWoogie.substring(11) + word + boogieWoogie.substring(0,1);
console.log(end);

/*Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc.
Print a sentence to the console using the variables and string interpolation, i.e., 
"My name is Maria. I live in Berlin and I am a teacher". */
console.log('aufgabe 10 :');
let firstName = 'Majd',
    city = 'Berlin',
    work= 'Student';
console.log(`My Name is ${firstName} I live in ${city} and I am a ${work}`);


/*Declare a variable and assign the value "the quick brown fox" (all in lower case).
 Capitalize the first letter of that string. Print the result to the console.*/
 console.log('aufgabe 11 :');
 let text1 = "the quick brown fox" ;
 console.log(text1.substring(0,1).toUpperCase()+ text1.slice(1));
















