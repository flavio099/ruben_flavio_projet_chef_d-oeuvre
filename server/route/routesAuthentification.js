const express=require("express");
const router= express.Router()
const {auth,token_checkout,inscription,getallUsers}=require('../controller/controlerAuthentification.js')

router.get("/token_checkout",token_checkout)
router.post("/auth",auth)
router.post("/inscription",inscription)
router.get("/getallUsers",getallUsers)
module.exports=router