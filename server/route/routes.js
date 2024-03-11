const express= require("express");
const router= express.Router()
const {allEvents,EventsById,postEvents,deleteEvents,modifierEvents}=require("../controller/controller.js")


router.get("/allEvents",allEvents)
router.get("/EventsById/:id",EventsById)
router.post("/postEvents",postEvents)
router.delete("/deleteEvents/:id",deleteEvents)
router.put("/modifierEvents/:id",modifierEvents)

module.exports= router
