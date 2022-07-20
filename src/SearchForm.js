import React, {useState} from "react";
import './SearchForm.css';

export default function SearchForm(){
    let [searchTerm, setSearchTerm]=useState("");
    function UpdateSearch(event){
        event.preventDefault()
        setSearchTerm(event.target.value)
    }
    function Search(event){
        event.preventDefault()
        return(
            alert(`searching for ${searchTerm}`)
        );
    }
    return (
        <div className="SearchForm">
            <div className="wrapper">
                <div className="label">Let's embrace the unknown</div>
                <form className="searchBar" onSubmit={Search}>
                    <input className="searchQueryInput" type="search"  placeholder="Search" defaultValue={""} autoFocus={true} onChange={UpdateSearch} />
                    <button className="searchQuerySubmit" type="submit" >
                         🔍
                    </button>
                </form>
            </div>
        </div>
    )
}