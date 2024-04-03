const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000
const path = require('path')
const Evenements = require("./route/routesEvents.js")
const authentification= require('./route/routesAuthentification.js')
const dashBoard = require("./route/routesAdmin.js")

app.use(express.static(path.join(__dirname, "./public")));



 app.use(cors({ 
   origin: 'http://localhost:5173',
   methods:['GET','POST'],
   allowedHeaders:['content-type','Authorization'] 
 }));



 app.use(express.json());

 app.use(authentification)
 app.use(Evenements)
 app.use(dashBoard)

 
 app.listen(port, () => {
   console.log(`serveur lancé sur le port ${port}`);
})

