import React from "react";
import './Definitions.css';
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Definitions(props){
    if (props.meaning.synonyms.length > 0){
        return(
            <div className="Definitions">
           <div className="row">
           <div className="col-md-9 card">
                <h1>{props.meaning.partOfSpeech}</h1>
                <div className="mb-3">
                    {props.meaning.definitions.map(function(definition, index){
                    return(
                        <div key={index}>
                            <div className="definition">📚{definition.definition} </div>
                            <Example text ={definition.example} />
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

    } else {
        return (
            <div className="Definitions">
            <div className="row">
            <div className="col-md-12 card">
                 <h1>{props.meaning.partOfSpeech}</h1>
                 <div className="mb-3">
                     {props.meaning.definitions.map(function(definition, index){
                     return(
                         <div key={index}>
                             <div className="definition">📚{definition.definition} </div>
                         </div>
                     )
                 })}
                 </div>
            </div>
            </div>
        </div>
        )

    }
    
}