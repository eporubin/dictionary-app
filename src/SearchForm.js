import React, {useEffect, useState} from "react";
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
        }
    }
    async function initializeDictionary(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/code`;
        const responseRaw = await fetch(apiUrl);
            const response = await responseRaw.json();
            const firstResult = response[0];
            setSearchData(firstResult);
    }
    useEffect(() => {
        initializeDictionary()
    }, [])
    return (
        <div className="SearchForm">
            <header>
             <div className="container-fluid mt-5 ">
                <div className="brand-name">
                    Elle Dictionary
                </div>
                <div className="wrapper">
                    <div className="label">
                    Let's embrace the unknown
                    </div>
                    <form className="searchBar" onSubmit={Search}>
                        <input className="searchQueryInput" type="search"  placeholder="Search" defaultValue={""} autoFocus={true} onChange={UpdateSearch} />
                        <button className="searchQuerySubmit" type="submit" >
                             🔍
                        </button>
                        </form>
                </div>
            </div>
            </header>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-12">
                           <Results data={searchData} />
                        </div>
                        {/* <div className="col-md-3">
                           <h1>Images container</h1>
                        </div> */}
                    </div>
                </div>
        </div>
    )
}