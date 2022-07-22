import React from "react";
import './Definitions.css';
import Synonyms from "./Synonyms";

export default function Definitions(props){
    return (
       <div className="Definitions">
           <div className="row">
           <div className="col-md-9 card">
           <h1>{props.meaning.partOfSpeech}</h1>
           <div>
               {props.meaning.definitions.map(function(definition, index){
               return(
                   <div key={index}>
                      
                       📚{definition.definition}
                       <br />
                       {/* not display this section if there is not an example */}
                       <div className="example-definition">"{definition.example}"</div>
                       
                   </div>
               )
           })}
           </div>
           </div>
           {/* to make this section appear only if there is any synonyms */}
           <div className="col-md-3">
              <Synonyms synonyms = {props.meaning.synonyms} />
           </div>
           </div>
       </div>
    )
}