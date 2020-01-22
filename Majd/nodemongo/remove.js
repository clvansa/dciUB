var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';

mongodb.connect(url,function (err,db) {

    if (err) {
        throw err;
    }
 
var query = {city: 'france'};
    db.collection('persons').remove(query,function(err,res) {
      if (err) {
        throw err;
    }  
    console.log(res.result.n + "deleted !"); 
     db.close();
    });
   
});