import React from "react";
import Definitions from "./Definitions";
// import Synonyms from "./Synonyms";
import './Results.css';

export default function Results(props){
    if(props.data){
        return (
            <div className="Results">
                <h1> {props.data.word}</h1>
                <h1>{props.data.phonetic}</h1>
                <h2>
                    {props.data.meanings.map(function(meaning, index){
                        return (
                            <div key={index}>
                                <Definitions meaning ={meaning} />
                            </div>
                        )
                    })
                    }
                </h2>
            </div>
        )
    } else {
        return (
            <h1> Upps, looks like this word does not exist in our repository</h1>
        )
    }
   
}