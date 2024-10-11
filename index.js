const express = require('express');
const cors = require("cors");
const app = express();
const estudiantesroutes = require("./backend/routes/estudiantesroutes.js");

app.use(express.json());
app.use(cors());
app.get ("/", (req,res) => {
    res.send ("Node/Nodemon en el puerto 6500");
})
app.use ("/estudiantes",estudiantesroutes);

app.listen (6500,() =>{
    console.log("Servidor arriba");
});