let findExp = (a, b) => {
    if(typeof a !== 'number' || typeof b !=='number'){
        console.log('Feler : keine Zahlen')
    }
    let result= 1;
    for(let i=1 ;i<=b ;i++){
        result *= a;
        console.log(result)
    }

}

findExp(2,3)