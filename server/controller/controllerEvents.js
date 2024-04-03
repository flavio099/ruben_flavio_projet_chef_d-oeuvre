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
          
          let image = ''; // Initialisez une variable pour stocker le chemin de l'image
          
          // Vérifiez si req.file existe et qu'il contient les données du fichier téléchargé
          if (req.file) {
              // Construisez l'URL complète de l'image en utilisant le protocole et le nom du fichier téléchargé
              image = `${req.protocol}://${req.get('host')}/${req.file.filename}`;
          }
          
          // Convertissez la date en format ISO 8601
          const dateIso8601 = new Date(date).toISOString();
  
          // Créez un objet Evenements avec les données nécessaires
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
      
          // Enregistrez l'événement dans la base de données
          await prisma.Event.create({
              data: Evenements
          });
      
          // Répondez avec un message de succès
          res.send(`${Evenements.nomEvent} a été créé avec succès comme événement`);
      } catch (error) {
          // Si une erreur se produit, loggez-la et envoyez une réponse d'erreur appropriée
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