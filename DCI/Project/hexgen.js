// Global Var 
const div = document.querySelector('.new');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
 

//        HeX Color

let letters = '123456789abcdef';
let hashtag = '#';

function ausWahlen() {
    return Math.floor(Math.random() * 15);
}
let colorHex = hashtag + (letters[ausWahlen()] + letters[ausWahlen()] + letters[ausWahlen()] + letters[ausWahlen()] + letters[ausWahlen()] + letters[ausWahlen()]);
console.log(colorHex);







// change color //  //       RGB Color 
btn.addEventListener('click', function () {
    function randomColor() {
        return Math.floor(Math.random() * 255);
    }
     let colorRgb = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')'
   div.style.backgroundColor = 'none';
    div.style.backgroundColor = colorRgb;
})

let invertal = setInterval(change,500); ;
let randomWort = ["hello", "Hi", "go", "lets", "hello"];
const text = document.querySelector('#text');
function Worter() {
    return Math.floor(Math.random() * 4)
}
  
function change (){
   function randomColor() {
        return Math.floor(Math.random() * 255);
    }
     let colorRgb = 'rgb(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')'
    text.style.color = colorRgb;
    text.style.fontSize = '5em';
    text.style.textAlign ='center';
    text.style.fontFamily = 'cursive';
    text.style.textTransform = 'uppercase';
    text.innerHTML = randomWort[Worter()];
    btn.style.backgroundColor=colorRgb;
    btn.style.border= 'none';
    btn.style.borderRadius = "20px";
    btn.style.cursor ='pointer'
    btn.style.padding ='10px 20px';
    
    
   
    
    clearInterval;
}

