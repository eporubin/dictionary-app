import React from "react";
import './SearchForm.css';

export default function SearchForm(){
    return (
        <div className="SearchForm">
            <div className="wrapper">
                <div className="label">Let's embrace unknown</div>
                <div className="searchBar">
                    <input className="searchQueryInput" type="text"  placeholder="Search" defaultValue={""} />
                    <button className="searchQuerySubmit" type="submit" >
                         🔍
                    </button>
                </div>
            </div>
        </div>
    )
}