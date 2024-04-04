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
   
    const { prenom, nom, email, password, genre } = req.body;

    const schemaUtilisateur = joi.object({
      nom: joi.string().alphanum().min(3).max(30).required().label('nom'),
      prenom: joi.string().alphanum().min(3).max(30).required().label('prenom'),
      email: joi.string().pattern(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9]{1,63}\.)+[a-zA-Z]{2,6}$/)).required().label('email'),
      password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().label('password'),
      genre: joi.string().alphanum().required().label('Gender'),
  });

    
const { error, value } = schemaUtilisateur.validate(req.body, { abortEarly: false });

if (error) {
    const errorMessage = error.details.map(err => {
        return {
            field: err.context.label,
            message: err.message
        };
    });
    return res.status(400).json({ error: errorMessage });
}

   
    const cost = 10; 
    const salt = await bcrypt.genSalt(cost);
    const motDePasseHaché = await bcrypt.hash(password, salt);

   
    const utilisateur = await prisma.user.create({
      data: {
        prenom,
        nom,
        email,
        password: motDePasseHaché, 
        genre,
      },
    });

    
    res.status(200).json({ message: utilisateur.prenom + " - " + utilisateur.nom + " votre inscription a été effectuée avec succès" });

  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite lors de votre inscription" });
  }
};


const connexion = async (req, res) => {
  const { prenom, nom, email, password, genre } = req.body;
  const cost = 10; 
  const salt = await bcrypt.genSalt(cost);
  const motDePasseHaché = await bcrypt.hash(password, salt);
  try {
    const { email, password } = req.body;

    const user = await prisma.User.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).send("Veuillez vérifier vos coordonnées");
    }
    else{

      const login = await prisma.login.create({
        data: {
          email,
          password:motDePasseHaché, 
        }
        
      })
    }

    const estLeMotDePasseValide = await bcrypt.compare(password, user.password);

    if (!estLeMotDePasseValide) {
      return res.status(400).send("Mot de passe incorrect");
    }

    const recupertaion_token = req.headers.authorization;

    if (recupertaion_token) {
      return res.status(401).send("Non autorisé");
    }

    const token = jwt.sign({ email }, privateKey, { algorithm: 'RS256' });

    res.status(200).json({ message: "Bienvenue sur Lushi-Event", token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Une erreur s'est produite");
  }
};

 

   module.exports={connexion,inscription,getallUsers,getUsersById,deleteUsers,upDateUsers}  