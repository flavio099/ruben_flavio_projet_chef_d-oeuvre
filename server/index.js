const express = require('express');
const app = express();
const port = 3000
const Evenements = require("./route/routesEvents.js")
const authentification= require('./route/routesAuthentification.js')
app.use(express.json())


app.use(authentification)
app.use(Evenements)


app.listen(port, () => {
   console.log(`serveur lancé sur le port ${port}`);
})

