const express=require("express");
const router= express.Router()
const {connexion,inscription,getallUsers,getUsersById,deleteUsers}=require('../controller/controlerAuthentification.js')


    router.post("/connexion",connexion)
    router.post("/inscription",inscription)
    router.get("/getallUsers",getallUsers)
    router.get("/getUsersById/:id",getUsersById)
    router.delete("/deleteUsers/:id",deleteUsers)





module.exports=router

