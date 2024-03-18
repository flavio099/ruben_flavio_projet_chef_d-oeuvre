const {PrismaClient}=require('@prisma/client')
const prisma= new PrismaClient()
const joi=require('joi')

const allEvents= async (req,res)=>{

   try{
     const getallEvents= await prisma.Event.findMany()
     res.send(getallEvents);
   }
   catch(error){

   res.send(error)

   }
}

const EventsById=  async (req,res)=>{
   try{
      const ID = parseInt(req.params.id)
     
      if(isNaN(ID)){
         res.send( "événement "+ ID + " introuvable")
      }else{
         const eventSeacrh = await prisma.Event.findUnique({
            where:{
               id:ID
            }
         })
         res.send(eventSeacrh)
      }
   }
   catch(error){
      
      res.send(error)
   }
    }

const postEvents= async (req,res)=>{
   try{
       const {nom,categorie,date,lieu,heure } = req.body
       const dateIso8601 = new Date(date).toISOString();
       const Evenements={
         nom,
         categorie,
         date:dateIso8601,
         lieu ,
         heure
      }
      
         const userschema = joi.object({

            nom: joi.string().required(),
            categorie:joi.string().alphanum().min(3).max(30).required(),
            date: joi.string().pattern(new RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$")).required(),
            lieu :joi.string().required(),
            heure:joi.string().alphanum().required()

            // pattern(new RegExp(/^([a-zA-Z0-9]{5}):([a-zA-Z0-9]{3})$/)).required()
            // .pattern(new RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$"))
         })

         
const { error } = userschema.validate(req.body);
if(error){
  
   res.send("veillez respecter le format demander")
}
else{

 await prisma.Event.create({
   data:Evenements
})
  res.send(Evenements.nom  + "  a été crée avec succès comme événemnt") 
}
 }
   catch (error) {
   
      res.send(error)
     
   }
}

const deleteEvents= async (req,res)=>{
   try{
      const ID = parseInt(req.params.id)
     const  removeEvent= await prisma.Event.delete({
         where:{
            id:ID
         }
      })
      res.send(removeEvent)
   }
   catch (error) {
      res.send(error)
   }
      
    }

const modifierEvents= async (req,res)=>{
   const id = parseInt(req.params.id)
   try{
     const bodyOfEvenTomodif=req.body
     const eventModif = await prisma.Event.update({
      where:{id},
      data:bodyOfEvenTomodif 
     })
     res.send("Event " + eventModif.nom + " a été modifié  avec succès")
   }
   catch (error) {
   
       res.send(error)
   } 
    } 

    module.exports={allEvents,EventsById,postEvents,deleteEvents,modifierEvents}