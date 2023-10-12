const express = require('express');
const app = express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.send("HELLO!");
});

app.get('/healthcheck',(req,res)=>{
    res.send('OK');
});

app.listen(3000,() => {
    console.log('app listening on port 3000!');
});