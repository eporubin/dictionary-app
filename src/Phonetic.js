import React from "react";
import './Results.css';
export default function Phonetic(props){
       const audioUrl = props.phonetic.filter(element => {
           return element.audio !== "";
       })    
        const audio = new Audio(
            `${audioUrl[0].audio}`
            )
        const start = () => {
            audio.play();
        }
    return(
        <div className="Phonetic">
            <button onClick={start} className="play-button" >
            🔊{audioUrl[0].text}
            </button> 
        </div>
    )
}