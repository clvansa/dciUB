var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';

mongodb.connect(url,function (err,db) {

    if (err) {
        throw err;
    }
    console.log('Database created !');
    var info = {name:"Osama Omer", age:44 , job:"Programmer",city:"france"};
    db.collection('persons').insertOne(info,function(err,result) {
      if (err) {
        throw err;
    }  
    console.log('Done inserted !'); 
     db.close();
    });
   
});