import React from "react";
import './Definitions.css';
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Definitions(props){
    return (
       <div className="Definitions">
           <div className="row">
           <div className="col-md-8 card">
                <h1>{props.meaning.partOfSpeech}</h1>
                <div>
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
           <div className="col-md-4">
              <Synonyms synonyms = {props.meaning.synonyms} />
           </div>
           </div>
       </div>
    )
}