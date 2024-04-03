const express= require("express");
const router= express.Router()
const upload = require('../middlleWare/imageValidation')


const {EventsById,postEvents,deleteEvents,modifierEvents,allEvents}=require("../controller/controllerEvents.js")



router.get("/EventsById/:id",EventsById)
router.post("/postEvents", upload,postEvents)
router.delete("/deleteEvents/:id",deleteEvents)
router.put("/modifierEvents/:id",modifierEvents)
router.get("/allEvents",allEvents)

module.exports= router
