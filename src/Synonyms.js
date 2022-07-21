import React from "react";
import './Synonyms.css';

export default function Synonyms(props){
    if (props.synonyms){
        return( 
            <div className="Synonyms">
                <h2><b>Alternatives:</b></h2>
                <ul>
            {props.synonyms.map(function(synonyms, index){
                return(
                   <li key = {index}>{synonyms}</li>
                )
            })}
            </ul>
            </div>
        )
    } else {
        return null;
    }
   
}


