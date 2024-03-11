const express=require("express");
const router= express.Router()
const {auth,token_checkout}=require('../controller/controlerAuthentification.js')

router.get("/token_checkout",token_checkout)
router.post("/auth",auth)

module.exports=router