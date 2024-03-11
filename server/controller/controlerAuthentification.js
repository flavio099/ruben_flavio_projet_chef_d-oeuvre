const {publicKey,privateKey}=require('./private_public_Key')
const Events=require("./Events.js")
const users = require('./users.js')
const jwt=require('jsonwebtoken')

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

   module.exports={auth,token_checkout}