import React from "react";
import './Synonyms.css';

export default function Synonyms(props){
    if (props.synonyms){
        return( 
            <div className="Synonyms">
                    <h2 className="d-none d-sm-none d-md-block"><b>Alternatives:</b></h2>
                    <div className="section-title mb-3 d-sm-block d-md-none"><div className="fill rounded shadow-lg">Alternatives:</div></div>
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


