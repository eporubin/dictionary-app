import React from 'react';

import './Example.css';
export default function Example(props){
    if(props.text){
        return(
            <div className='Example example-definition text-muted'>
               <span>For example: "{props.text}"</span> 
            </div>
        )
    }
   
}