const express=require("express");
const router= express.Router()

const { PostAdmin,getAllAdmins,UpdateRoleAdmin} = require("../controller/controlerAdmin.js") 


router.post("/addAdministrateur",PostAdmin)
router.get("/getAllAdministrateur",getAllAdmins)
router.put("/UpdateRoleAdmin/:id",UpdateRoleAdmin)


module.exports=router