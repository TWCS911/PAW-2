const express = require('express')
const app = express()
const port = 3000

const routes = require('../routes/index');

app.use(routes);

//ejs
app.set("view engine" ,"ejs");
app.set("views" , "./views");

// app.get('/',(req,res) => {
//     res.send('Hello World')
// });

app.get('/about',(req,res) => {
    res.send('Aku')
});

//middleware
app.use('*', (req,res) =>{
    res.status(404);
    res.send("ERROR 404")
});

app.listen(port, () => {
    console.log('Example app are listening to port' + port)
})