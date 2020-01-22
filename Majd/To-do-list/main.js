let form = document.getElementById('form');
let text = document.getElementById('text');
let list = document.getElementById('list');
let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hou = document.querySelector('.hou');


form.addEventListener('submit',function(e){
    e.preventDefault();
    addTask(text.value);
   
   

});

let timeSlot = document.getElementById('slot1');

function time(){
    let data= new Date();
//    let t = Math.floor(new Date().getTime() /1000);
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let day = data.getDate();
    let month = data.getMonth();
    let year =data.getFullYear();
    timeSlot.innerHTML = ` ${day}/${month}/${year} `  ;
   document.getElementById('slot2').innerHTML = ` ${h}:${m}:${s} `;
    timeSlot.style.color='red';
    sec.style.webkitTransform = 'rotateZ(' + s*6 +'deg)' ;
    min.style.webkitTransform = 'rotateZ(' + (m*6) +'deg)' ;
    hou.style.webkitTransform = 'rotateZ(' + h*30 +'deg)' ;
    
    

}

setInterval(time,1000);

function addTask(x){
    let addHtml = `<li> <span style='color:red'>${timeSlot.innerHTML.substring(1,6)}  </span><span style='width:400px ;text-align: center'>    ${x}  </span> <button onclick="deleteMe(this)" style= "background:#FF0066;color:white; border:none;float:right;height:40px"> delete </button></li> `
    list.insertAdjacentHTML('beforeend',addHtml);
    text.value = "";
    list.style.backgroundColor = "#eee";
    
        
    

}


function deleteMe(elementDel){
let con = confirm('Are you sure to delete');
    if (con == true){
        elementDel.parentElement.remove() ;
        
        
    }else{
        false
    }
}












