const bcrypt = require('bcrypt');
const joi=require('joi')
const {PrismaClient}=require('@prisma/client')
const prisma= new PrismaClient()


const PostAdmin = async (req,res)=>{
    try{
        const { prenom, nom, email, password, genre,role } = req.body;


    const schemaUtilisateur = joi.object({
        nom: joi.string().alphanum().min(3).max(30).required().label('nom'),
        prenom: joi.string().alphanum().min(3).max(30).required().label('prenom'),
        email: joi.string().pattern(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9]{1,63}\.)+[a-zA-Z]{2,6}$/)).required().label('email'),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().label('password'),
        genre: joi.string().alphanum().required().label('Gender'),
        role : joi.string().alphanum().required().label('Role')
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

        const addAdmin = await prisma.user.create({
            data: {
                prenom,
                nom,
                email,
                password: motDePasseHaché, 
                genre,
                role
            }
        })
         
        res.status(200).send(addAdmin)
    }
    catch(error){
         console.log(error);
    }
}

const getAllAdmins= async (req,res)=>{

    try{
      const getAllAdministrateur= await prisma.user.findMany(
        // where :role
        // // data:role
      )

      res.status(200).send(getAllAdministrateur)
    }
    catch (error) {
       console.log(error);
    }

}

const UpdateRoleAdmin = async (req,res)=>{

    const id = parseInt(req.params.id)
    if(isNaN(id)){
       return res.send("cet utilisateur n'existe pas ")
    }
    try{
     const roleBOdyToUpDate= req.body;
     const roleToUpdate = await prisma.user.update({
          where:{id},
          data:roleBOdyToUpDate
       })
       res.send(roleToUpdate)
    }
    catch (error){
        console.log(error);
    }
}

module.exports = {PostAdmin,getAllAdmins,UpdateRoleAdmin}