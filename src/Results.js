import React from "react";
import Definitions from "./Definitions";
import './Results.css';

export default function Results(props){
   
    if(props.data){

        return (
            <div className="Results">
                <div className="container-fluid"> 
                <div className="container-fluid word-box rounded shadow-lg">
                <div className="row">
                    <div className="col-sm-3">
                        <h3> {props.data.word}</h3>
                    </div>
                    <div className="col-sm-3">
                    <h3>🔊{props.data.phonetic}</h3>
                    </div>
                    <div className="col-sm-6">
                    <h3>Nr. of types: {props.data.meanings.length}  </h3>
                    </div>
                </div>
                </div>
                
                
                
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
                </div>
                
        )
    } else {
        return (
            <h1> Upps, looks like this word does not exist in our repository</h1>
        )
    }
   
}