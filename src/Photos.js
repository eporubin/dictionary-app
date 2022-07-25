import React from "react";
import "./Photos.css"
export default function Photos(props){
    if(props.data){
        return (
            <section className="Photos">
                <div className="row">
                    {props.data.map(function(photo, index){
                    return(
                        <div className="col-md-4 img-hover-zoom" key={index}>
                        <a href={photo.src.original} target = "_blank"  >
                        <img src={photo.src.landscape}  className="img-fluid card shadow-lg p-2" />
                        </a>
                        </div>
                    );
                     })}  
                </div>
            </section>
        )
    } else {
        return null;
    }
   
}