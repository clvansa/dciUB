var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';

mongodb.connect(url,function (err,db) {

    if (err) {
        throw err;
    }
 //db.collection('persons').findOne({},function(err,result) {
//var query = {city:'Kirkuk'};
var query = {city: /^K/};
    db.collection('persons').find(query).toArray(function(err,result) {
      if (err) {
        throw err;
    }  
    console.log(result); 
     db.close();
    });
   
});