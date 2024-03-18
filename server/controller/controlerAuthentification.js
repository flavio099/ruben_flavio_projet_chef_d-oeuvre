const {publicKey,privateKey}=require('./private_public_Key')
const jwt=require('jsonwebtoken')
const joi=require('joi')
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
   catch(error){
      res.send("une erreur s'est produite lors de la suppression de l'utilisateur ")
   }
}

const upDateUsers= async (req,res)=>{
   const id = parseInt(req.params.id)
   if(isNaN(id)){
      return res.send("cet utilisateur n'existe pas ")
   }
   try{
    const userBOdyToUpDate= req.body;
    const userToUpdate = await prisma.user.update({
         where:{id},
         data:userBOdyToUpDate
      })
      res.send(userToUpdate)
   }
   catch (error){
      res.send(error)
   }
}
const inscription= async (req,res)=>{
  
   const { nom,prenom,email,password, genre} = req.body
  try {
   const utilisateur = {
      nom,
      prenom,
      email,
      password,
      genre  
  }

  const userschema= joi.object({

   nom: joi.string().alphanum().min(3).max(30).required(),
   prenom:joi.string().alphanum().min(3).max(30).required(),
   email:joi.string().pattern(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9]{1,63}\.)+[a-zA-Z]{2,6}$/)).required(),
   password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
   genre:joi.string().alphanum().required()
})

const { error } = userschema.validate(req.body);
if(error){
  
   res.send("veillez respecter le format demander")
}
else{
 await prisma.user.create({
   data:utilisateur
})
  res.send(utilisateur.prenom + " - " + utilisateur.nom + " votre inscription a été effectuée avec succès") 
}


}

  catch (error){
   // await prisma.user.create({
   //    data:utilisateur
   // })
  res.send("une erreur s'est  produite lors de votre inscription ");
}
    
}

const connexion= async (req,res)=>{

    const {email,password,prenom,nom}= req.body
    try{
      const validation = await prisma.User.findUnique({
         where: { email,password,prenom, nom }
       });
      
      const token= jwt.sign({email},privateKey,{algorithm:'RS256'}) 
      if(validation===null){
      res.send("veillez vérifier vos coordonnées") 
      } else{
         const recupertaion_token= req.headers.authorization
           
      jwt.verify(recupertaion_token,publicKey,()=>{
     
      res.send(prenom + " - " + nom +"  bienvenue sur Easy_Ticket") 

        })  
}
    }
    catch(error){
       res.send(error)
    }
    
 }


 

   module.exports={connexion,inscription,getallUsers,getUsersById,deleteUsers,upDateUsers}  