var mongodb = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/MongoDataBase';

mongodb.connect(url,function (err,db) {

    if (err) {
        throw err;
    }
    console.log('Database created !');
    db.createCollection('persons',function(err,result) {
      if (err) {
        throw err;
    }  
    console.log('Collection created !'); 
     db.close();
    });
   
});