const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send('Not Allow');

})


app.use('/index', express.static(__dirname + '/public'));

app.listen(port,()=>{
    console.log('Connected')
})