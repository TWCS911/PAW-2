const express = require('express');
const router = express.Router();

router.use("/",(req, res)=>{
    const data ={
        caption: "Mahasiswa",
        layout: "layout/main-layout",
        //Format data JSON
        data :[
            {
                npm : "2226240060",
                nama : "Tri",
            },
            {
                npm : "2226240069",
                nama : "Konzi",
            },
            {
                npm : "2226240098",
                nama : "Patar",
            },
        ]
    };
    res.render("index", data);
});

module.exports = router;