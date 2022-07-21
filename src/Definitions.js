import React from "react";
import './Definitions.css';
import Synonyms from "./Synonyms";

export default function Definitions(props){
    return (
       <div className="Definitions">
           <h1>{props.meaning.partOfSpeech}</h1>
           <div>
               {props.meaning.definitions.map(function(definition, index){
               return(
                   <div key={index}>
                       <p>
                       -{definition.definition}
                       <br />
                       <i>{definition.example}</i>
                       </p>
                   </div>
               )
           })}
           </div>
           <div>
              <Synonyms synonyms = {props.meaning.synonyms} />
           </div>
       </div>
    )
}