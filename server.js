//parcial 1
const express = require('express');
const morgan = require('morgan');

const app = express(); //objeto de express

app.use(express.json()); //se le informa que el objeto es json
app.use(morgan('dev')); //se le ifnroma que se usa middlewear morgan
const PORT = process.env.PORT || 5000;

//A
app.get("/", (req, res) => {
    res.send("<h1>You are in the hompage</h1>");
})

//B
app.post("/post", (req, res) => {
    var user = req.body.user;
    //console.log(req.body);
    res.send("Welcome " + user);
    
})

//C
app.delete("/delete", (req, res) => {
    const obj_json = req.body;
    console.log(req.body);
    res.send("Deleted:true");
})

//D 
app.put("/put/:userId", (req, res) => {
    res.send(` Task ${req.params.userId} has been updated`);
})


//esucha del puerto 5000
app.listen(PORT, () => {
    console.log("Server ejectudandose en " + PORT);
})