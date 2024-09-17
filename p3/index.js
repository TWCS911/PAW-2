const express = require('express');
const app = express();
const port = 3000;

const route = require("./routes/index.js");

app.get('/', (req, res) =>{
    res.send('AKU IJA');
});

app.use(route);

// app.get('/mahasiswa', (req, res) => {
//     res.send("Get Data Mahasiswa")
// });

// app.post('/mahasiswa', (req, res) => {
//     res.send("Post Mahasiswa");
// });

// app.put('/mahasiswa/:npm', (req, res) => {
//     res.send("Put Mahasiswa "+ req.params.npm);
// });

// app.delete('/mahasiswa/:npm', (req, res) => {
//     res.send("Delete Mahasiswa "+req.params.npm);
// });

app.listen(port, () =>{
    console.log('Example app listening on port 3000')
});

