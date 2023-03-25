import Heading from "./Heading"
import {Cards,Cardss,Cardsss} from "./Card"


function Maincontainer(){
    return(
        <div className="Maincontainer">
            <Heading/>
            <div className="cardecontainer" style={{display:'flex',gap:'30px'}}>
               <Cards/>
               <Cardss/>
               <Cardsss/>
           
            </div>


        </div>
    )
}
export default Maincontainer