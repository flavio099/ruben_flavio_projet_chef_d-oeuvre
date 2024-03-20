const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000
const Evenements = require("./route/routesEvents.js")
const authentification= require('./route/routesAuthentification.js')

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())


app.use(authentification)
app.use(Evenements)


app.listen(port, () => {
   console.log(`serveur lancé sur le port ${port}`);
})

