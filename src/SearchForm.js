import React, {useState} from "react";
import './SearchForm.css';
import axios from "axios";

//api documentation https://dictionaryapi.dev/

export default function SearchForm(){
   
    let [searchTerm, setSearchTerm] = useState("");
    let [searchData, setSearchData] = useState(undefined);
    function UpdateSearch(event){
        event.preventDefault()
        setSearchTerm(event.target.value)
    }
    async function Search(event){
        event.preventDefault()
        if (searchTerm !== " "){
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
            const response = await axios.get(apiUrl);
            setSearchData(response);
            alert(`searching for ${searchTerm}`);
            console.log(`Search data is`, searchData.data);
        }
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