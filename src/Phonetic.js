import React from "react";
import './Results.css';
export default function Phonetic(props){
    
        const audio = new Audio(
            `${props.phonetic.audio}`
            )
        const start = () => {
            audio.play();
        }
    return(
        <div className="Phonetic">
            <button onClick={start} className="play-button" >
            🔊{props.phonetic.text}
            </button> 
        </div>
    )
}