const mongo = require('mongodb').MongoClient;
const express = require('express');
const assert = require('assert');
let app = express();
const router = express.Router();
const url = 'mongodb://localhost:27017/Mdata';


// get Home page 

router.get('/',function(req,res,next){
    res.render('index',{title :'Cool, huh',condition :true ,anyArray :[1,2,3]});
});
router.get('/get-data',function(req,res,next){

})
router.post('/insert',function(req,res,next){

});
module.exports = router;

