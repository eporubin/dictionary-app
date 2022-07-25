import React from "react";
import Definitions from "./Definitions";
import Phonetic from "./Phonetic";
import './Results.css';

export default function Results(props){
   
    if(props.data){

        return (
            <div className="Results">
                <div className="container-fluid"> 
                <div className="container word-box rounded shadow-lg align-self-center">
                <div className="row">
                    <div className="col-sm-4">
                        <h4> {props.data.word}</h4>
                    </div>
                    <div className="col-sm-4">
                         <Phonetic phonetic = {props.data.phonetics} />
                    </div>
                    <div className="col-sm-4">
                    <h4 className="text-centered text-muted ">Parts of speach: {props.data.meanings.length}  </h4>
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
            <div className="card m-5 p-5 text-center shadow-lg"> <h2>Upps, looks like this word does not exist in our repository 😢. Please check the spelling and try again 📤</h2></div>
        )
    }
   
}