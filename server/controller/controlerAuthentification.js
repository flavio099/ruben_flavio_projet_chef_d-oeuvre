const {publicKey,privateKey}=require('./private_public_Key')
const Events=require("./Events.js")
const users = require('./users.js')
const jwt=require('jsonwebtoken')
const joi=require('joi')




const getallUsers= (req,res)=>{
   res.send(users)
}

const inscription= (req,res)=>{

   const userschema= joi.object({
      name: joi.string().alphanum().min(3).max(30).required(),
      password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
   })
   
   const { error } = userschema.validate(req.body);
   if(error){
      res.send("veillez respecter le format demander")
   }else{
    
      users.push(req.body)
      res.send("utilisateur créé avec succès")
   }
  
  
}



const auth=(req,res)=>{

    const {name,password}= req.body
    const validation = users.some(user=> user.name===name && user.password===password) 
    const token= jwt.sign({name},privateKey,{algorithm:'RS256'}) 
    if(validation===true){
    res.send(token) 
    } else{
    res.send("veillez vérifier vos coordonnées") 
    }
 }


 const token_checkout= (req,res)=>{

    const recupertaion_token= req.headers.authorization
     
    jwt.verify(recupertaion_token,publicKey,(error,decoded)=>{
     
       if(error){
          res.send("autorisation refusée")
        } else{
          res.send(Events)
        }
 
    })
     
   }

   module.exports={auth,token_checkout,inscription,getallUsers}  