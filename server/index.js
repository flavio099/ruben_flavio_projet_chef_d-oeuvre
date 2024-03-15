const express = require('express');
const app = express();
const port = 8000
const Evenements = require("./route/routesEvents.js")
const authentification= require('./route/routesAuthentification.js')
// const {PrismaClient}=require('@prisma/client')
// const prisma= new PrismaClient()
// const bcrypt= require('bcrypt')
app.use(express.json())


app.use(authentification)
app.use(Evenements)


app.listen(port, () => {
   console.log(`serveur lancé sur le port ${port}`);
})

