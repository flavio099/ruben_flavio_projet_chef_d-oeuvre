const {publicKey,privateKey}=require('./private_public_Key')
const Events=require("./Events.js")
const users = require('./users.js')
const jwt=require('jsonwebtoken')
const joi=require('joi')
const {PrismaClient}=require('@prisma/client')
const prisma= new PrismaClient()





const getallUsers=  async(req,res)=>{
   try{
      const allusers = await prisma.User.findMany()
      res.send(allusers)
   }
  catch(error){
     res.send(error)
  }
}
const getUsersById= async (req,res)=>{

   try{

   const ID = parseInt(req.params.id)
   const user = await prisma.user.findUnique({
      where: {
        id:ID,
      },
    })
 
   res.send(user)
   }
   catch(error){
     res.send(error)
   }
}
const deleteUsers= async (req,res)=>{
   try{
      const ID = parseInt(req.params.id)
      const deleteUser = await prisma.user.delete({
         where: {
           id:ID,
         },
       })
       res.send(deleteUser)
   }
   catch{

   }
}
const inscription= async (req,res)=>{
  
   const { nom,prenom,email,password, genre } = req.body
  try {
   const utilisateur = {
      nom,
      prenom,
      email,
      password,
      genre
  }

   await prisma.User.create({
       data: utilisateur
   });
   res.send(utilisateur.prenom  +utilisateur.nom  +  " votre inscription a été effectuée avec succès") 
}

  catch (error) {
  
   res.send("une erreur s'est  produite lors de votre inscription ");
}

   // Validation des données

   // const userschema= joi.object({
   //    nom: joi.string().alphanum().min(3).max(30).required(),
   //    prenom:joi.string().alphanum().min(3).max(30).required(),
   //    // email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
   //    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
   // })
   
   // const { error } = userschema.validate(req.body);
   // if(error){
   //    res.send("veillez respecter le format demander")
   // }else{
      
   //    res.send("utilisateur créé avec succès")
   // }
   // Création de l'objet utilisateur
   

    
}

const connexion= async (req,res)=>{

    const {email,password}= req.body
    try{
      const validation = await prisma.User.findUnique({
         where: { email,password }
       });
      
      const token= jwt.sign({email},privateKey,{algorithm:'RS256'}) 
      if(validation===null){
      res.send("veillez vérifier vos coordonnées") 
      } else{
         const recupertaion_token= req.headers.authorization
           
      jwt.verify(recupertaion_token,publicKey,()=>{
     
      res.send(Events) 

        })
     
}
    }
    catch(error){
       res.send(error)
    }
    
 }


 

   module.exports={connexion,inscription,getallUsers,getUsersById,deleteUsers}  