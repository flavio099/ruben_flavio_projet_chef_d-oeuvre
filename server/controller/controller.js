const Events=require("./Events.js")

const allEvents=(req,res)=>{res.send(Events)}

const EventsById=(req,res)=>{
       const ID = parseInt(req.params.id)
    
       res.send(Events.filter((e)=>{
          return e.id==ID
       }))
    }

const postEvents=(req,res)=>{
       const addEvent= req.body
       Events.push(addEvent)
       res.send("Event ajouté avec succès")
    }

const deleteEvents= (req,res)=>{
       const ID = parseInt(req.params.id)
       Events.splice(ID-1,1)
       res.send("Event avec supprimé succès")
    }

const modifierEvents= (req,res)=>{
       const ID = req.params.id
       Events.splice(ID-1,1,req.body)
       res.send("Event modifié  avec succès")
    } 

    module.exports={allEvents,EventsById,postEvents,deleteEvents,modifierEvents}