const express = require('express');
const app = express();
const port = 3000
const Evenements = require("./route/routesEvents.js")
const authentification= require('./route/routesAuthentification.js')
const {PrismaClient}=require('@prisma/client')
const prisma= new PrismaClient()
app.use(express.json())


async function main() {
  await prisma.user.create({
    data: {
      prenom:"ruben", 
      nom:"lubasa",         
      email:"lubasaruben@gmail.com" ,    
      password:"ruben099865422" ,
      genre :"masculin"    
    }
  })


  const allUsers = await prisma.user.findMany()

  console.log(allUsers);
 
 }
 
 
 main()
 
   .then(async () => {
 
     await prisma.$disconnect()
 
   })
 
   .catch(async (e) => {
 
     console.error(e)
 
     await prisma.$disconnect()
 
     process.exit(1)
 
   })

app.use(authentification)
app.use(Evenements)


app.listen(port, () => {
   console.log(`serveur lancé sur le port ${port}`);
})

