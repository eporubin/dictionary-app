import React, {useState} from "react";
import './SearchForm.css';
import Results from "./Results";

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
            const responseRaw = await fetch(apiUrl);
            const response = await responseRaw.json();
            const firstResult = response[0];
            setSearchData(firstResult);
            console.log(`Search data is`, firstResult);
            // console.log(`The meaning of this word is `, response.data[0].meanings[0].definitions[0].definition);
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
            <Results data={searchData} />
        </div>
    )
}