
import react from "./imgs/react.png"
import angular from "./imgs/angular.png"
import vue from "./imgs/viue.png"
import LearnMoreButton from "./LearnMore"
function Cards(){
    return(
        <div className="cards">
            <div className="imagecontainer">
                <img className="image" src={react}    alt="" />
            </div>
            <h2>React js</h2>
            <p className="paragraph">Changing technology, climate change, and transformations in global finance mean another new era for cities is dawning: the fifth, or digital, age...</p>
            <LearnMoreButton/>

        </div>
    )
}
function Cardss(){
    return(
        <div className="cards">
            <div className="imagecontainer">
                <img className="image" src={angular}    alt="" />
            </div>
            <h2>Angular js</h2>
            <p  className="paragraph">Changing technology, climate change, and transformations in global finance mean another new era for cities is dawning: the fifth, or digital, age...</p>
            <LearnMoreButton/>

        </div>
    )
}
function Cardsss(){
    return(
        <div className="cards">
             <div className="imagecontainer">
                  <img className="image" src={vue}    alt="" />
            </div>
            <h2>Vue js</h2>
            <p  className="paragraph">Changing technology, climate change, and transformations in global finance mean another new era for cities is dawning: the fifth, or digital, age...</p>
            <LearnMoreButton/>
        </div>
    )
}
export {Cards,Cardss,Cardsss}