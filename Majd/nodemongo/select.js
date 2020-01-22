var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';

mongodb.connect(url,function (err,db) {

    if (err) {
        throw err;
    }
 //db.collection('persons').findOne({},function(err,result) {

    db.collection('persons').find({}).toArray(function(err,result) {
      if (err) {
        throw err;
    }  
    console.log(result); 
     db.close();
    });
   
});