//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
let tickets = 6450/15;
console.log(`tickets were sold ${tickets} `);

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?


let incomeYear = 500 * 52 ;
console.log(` Sylvia makes every year ${incomeYear} $`);
//Q3. Calculate the percentage of 17/30. Expected output: number%

let percentage = (17/30)*100;
console.log(`${percentage.toFixed(2)} %`)


// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
let perimeterSquare = 4.75 * 4
console.log(`each side is 4.75cm ${perimeterSquare} cm`);






//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let perimeterTriangle = 5+6+7;
console.log(`the length of the sides are 5cm, 6cm, 7cm ${perimeterTriangle} cm`);

//<Q6. Calculate the area of a square. side is 5cm.

let areaSquare = Math.pow(5,2);
console.log(`the area of a square. side is 5cm. ${areaSquare} `)


//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let a = 5;
let b = 6;
let c = 7;
let p = (a+b+c) / 2;

let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));

console.log(`Die Fläche des Dreiecks ist ${area.toFixed(2)} cm²`);


//Q8. Calculate the volume of a cube. Length of each side is 9cm.

let cube= 9 ;
console.log(`cube. Length of each side is 9cm ${Math.pow(cube,3)} cm³`);


//Q9. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

let bill1 = 22.35 * 1.1,
    bill2 = 26.67 * 1.5;
    bill3 = 35.92 * 2;
console.log(`tip 1 ist ${bill1.toFixed(2)} Euro`);
console.log(`tip 2 ist ${bill2.toFixed(2)} Euro`);
console.log(`tip 3 ist ${bill3} Euro`);

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 What is Noemy's average hours worked per day?

let summe = 8+6+5+9+8+2+1+8.5+7+4;
let durchScnhnitt = summe /10;
console.log(`Noemy's average hours worked per day ${durchScnhnitt}`);


//Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test? Expected output: Score in the sixth test: --.

let erstenFunfErgebnusse = 75 +70+85+90+100,
    gesamteErgebnis = 85 *6;
    sechTest = gesamteErgebnis -erstenFunfErgebnusse; 
    console.log(`the sixth test ${sechTest}`);

 