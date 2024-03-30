
import './DashBoard.css'
function DashBoard(){
    return(

        <div className="DashBoard">
            <p>DashBoard LushiEvent</p>
             <form  className="form-field-dash" action="">
             <input  className="input-field-dash" type='file'  placeholder="Image"/>
            <input  className="input-field-dash" type="text"   placeholder="Nom du prometeur"/>    
            <input  className="input-field-dash" type="text"   placeholder="Lieu"/>    
            <input  className="input-field-dash" type="text"   placeholder="Prix de billet"/> 
            <input  className="input-field-dash" type="text"   placeholder="Adresse"/> 
            <input  className="input-field-dash" type="text"  placeholder="Date"/>
            <input  className="input-field-dash" type="text"placeholder="Titre de l'event"/>

             </form>
             <button>Submit</button>
        </div>
    )
}

export default DashBoard