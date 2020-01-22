var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';

mongodb.connect(url,function (err,db) {

    if (err) {
        throw err;
    }
 
var query = {age: 1};
    db.collection('persons').find().sort(query).toArray(function(err,result) {
      if (err) {
        throw err;
    }  
    console.log(result); 
     db.close();
    });
   
});