const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hello World')
});

app.get('/about',(req,res) => {
    res.send('Aku Hitam')
});

//middleware
app.use('*', (req,res) =>{
    res.status(404);
    res.send("ERROR 404")
});

app.listen(port, () => {
    console.log('Example app are listening to port 3000')
})