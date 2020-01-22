const invertors = [
	{first:"majd",last:"makkieh",year:1987,passed:2021},
	{first:"Albert",last:"Einstein",year:1879,passed:1955},
	{first:"Isaac",last:"Newton",year:1643,passed:1727},
	{first:"Marie",last:"Curie",year:1867,passed:1934},
	{first:"Johannes",last:"Kepler",year:1571,passed:1630},
	{first:"Nicolaus",last:"Copernicus",year:1473,passed:1543},
	{first:"Max",last:"Planck",year:1858,passed:1947}
];
			
		//filter the list of inventors for those who were born in the 1500
		let fifteen = invertors.filter(invertor => invertor.year >=1500 && invertor.year <= 1600 ?true:false);
        console.table(fifteen);
        
        //Give us an array of the inventory first and last names
        const names = invertors.map(invertor=> invertor.first + ' ' + invertor.last);
        console.table(names);

        //Sort the inventor by birthday , oldest to youngest 
        // const birthday = invertors.sort(function(a,b){
        //     if(a.year > b.year){
        //     return -1;
        //     }else {
        //         return 1; } 
        // })
        // console.table(birthday);


        const birthday = invertors.sort((a,b)=> a.year >b.year?-1:1);
        console.log(birthday)
        // how many years did all the inventors live 
        totalYears = invertors.reduce((total,invertor)=>{
            return total + (invertor.passed - invertor.year)
        },0)
        console.log(totalYears);

        //Sort the inventors by years lived 
        const oldest = invertors.sort((a,b)=>{
            const lastGuy = a.passed - a.year;
            const nextGuy = b.passed - b.year;
            if(lastGuy>nextGuy){
                return -1;
            }else{return 1}
        })
        console.table(oldest);

        // Sort the poeple alphabet by last name
        const people =['majd,makkieh','beck,glenn','becker,carl','beckett,samuel','Beddoes,mick','Beecher,Henry','Beethoven,Ludig']

        const alpha = people.sort((a,b)=>{
            const [aLast,aFirst] = a.split(', ');
            const [bLast,bFirst] = b.split(', ');
            return aLast > bLast ? 1 :-1;
        });
        console.table(alpha);

        const data = ['car','car','car','truck','truck','bick','bick','van','walk','van']
        const transportaion = data.reduce(function(obj,item){
            if(!obj[item]){
                obj[item]=0;
            }
            obj[item]++;
            return obj;
        },{});

        console.log(transportaion)