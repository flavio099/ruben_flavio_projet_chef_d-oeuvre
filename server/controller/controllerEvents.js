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

    const postEvents = async (req, res) => {
      try {
          const { nomEvent, prix, adresse, promoName, date, lieu, heure } = req.body;
          
          let image = ''; 
          
          if (req.file) {
              
              image = `${req.protocol}://${req.get('host')}/${req.file.filename}`;
          }
          
          const dateIso8601 = new Date(date).toISOString();
  
          const Evenements = {
              image,
              promoName,
              lieu,
              adresse,
              prix,
              date: dateIso8601,
              nomEvent,
              heure
          };
          await prisma.Event.create({
              data: Evenements
          });
          res.send(`${Evenements.nomEvent} a été créé avec succès comme événement`);
      } catch (error) {
          console.log(error);
          res.status(500).send('Une erreur est survenue lors du traitement de votre demande');
      }
  };
  

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
     res.send("Event " + eventModif.nomEvent + " a été modifié  avec succès")
   }
   catch (error) {
   
       res.send(error)
   } 
    } 

    module.exports={allEvents,EventsById,postEvents,deleteEvents,modifierEvents}