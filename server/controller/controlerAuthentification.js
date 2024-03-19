const {publicKey,privateKey}=require('./private_public_Key')
const jwt=require('jsonwebtoken')
const joi=require('joi')
const bcrypt = require('bcrypt');
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
const inscription = async (req, res) => {
   try {
     // Extraction et validation des données de l'utilisateur depuis le corps de la requête
     const { prenom, nom, email, password, genre } = req.body;
 
     const schemaUtilisateur = joi.object({
       nom: joi.string().alphanum().min(3).max(30).required(),
       prenom: joi.string().alphanum().min(3).max(30).required(),
       email: joi.string().pattern(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9]{1,63}\.)+[a-zA-Z]{2,6}$/)).required(),
       password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
       genre: joi.string().alphanum().required(),
     });
 
     const { error } = schemaUtilisateur.validate(req.body);
     if (error) {
       return res.send("Veuillez respecter le format demandé");
     }
 
     // Hachage sécurisé du mot de passe avant de créer l'utilisateur
     const cost = 10; // Ajuster le coût si nécessaire (plus élevé pour un hachage plus fort)
     const salt = await bcrypt.genSalt(cost);
     const motDePasseHaché = await bcrypt.hash(password, salt);
 
     // Création de l'utilisateur avec le mot de passe haché
     const utilisateur = await prisma.user.create({
       data: {
         prenom,
         nom,
         email,
         password: motDePasseHaché, 
         genre,
       },
     });
 
     res.send(utilisateur.prenom + " - " + utilisateur.nom + " votre inscription a été effectuée avec succès");

   } catch (error) {
     console.error(error);
     res.send("Une erreur s'est produite lors de votre inscription");
   }
 };
 

 const connexion = async (req, res) => {
   try {
     const { email, password } = req.body;
 
     // Recherche de l'utilisateur par adresse e-mail
     const user = await prisma.User.findUnique({
       where: { email },
     });
 
     if (!user) {
       return res.send("Veuillez vérifier vos coordonnées");
     }

     const estLeMotDePasseValide = await bcrypt.compare(password, user.password);
 
     if (!estLeMotDePasseValide) {
       return res.send("Mot de passe incorrect");
     }
 
     const recupertaion_token = req.headers.authorization;
  
     if (recupertaion_token) {
       return res.status(401).send("Non autorisé");
     }
 
     const token = jwt.sign({ email }, privateKey, { algorithm: 'RS256' });
 
     res.send(user.prenom + " - " + user.nom + "  bienvenue sur Easy_Ticket");
   } catch (error) {
     console.error(error);
     res.status(500).send("Une erreur s'est produite");
   }
 };
 

 

   module.exports={connexion,inscription,getallUsers,getUsersById,deleteUsers,upDateUsers}  