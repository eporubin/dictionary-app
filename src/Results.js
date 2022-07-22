import React from "react";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";
import './Results.css';

export default function Results(props){
   
    if(props.data){

        return (
            <div className="Results">
                <div className="container-fluid"> 
                <div className="container-fluid word-box rounded shadow-lg align-self-center">
                <div className="row">
                    <div className="col-sm-3">
                        <h4> {props.data.word}</h4>
                    </div>
                    <div className="col-sm-3">
                         <Phonetic phonetic = {props.data.phonetics[props.data.phonetics.length - 1]} />
                    </div>
                    <div className="col-sm-6">
                    <h4 className="text-centered text-muted ">Nr. of definitions: {props.data.meanings.length}  </h4>
                    </div>
                </div>
                </div>

                <div className="row">
                    
                    
                    {props.data.meanings.map(function(meaning, index){
                        return (
                            <div key={index}>
                                <Definitions meaning ={meaning} />
                            </div>
                        )
                    })
                    }
    
                </div>

                
                
            </div>
                </div>
                
        )
    } else {
        return (
            <h1> Upps, looks like this word does not exist in our repository</h1>
        )
    }
   
}