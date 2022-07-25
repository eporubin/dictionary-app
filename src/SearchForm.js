import React, {useEffect, useState} from "react";
import './SearchForm.css';
import Results from "./Results";
import Photos from "./Photos";

//api documentation https://dictionaryapi.dev/

export default function SearchForm(){
    
   
    let [searchTerm, setSearchTerm] = useState("");
    let [searchData, setSearchData] = useState(undefined);
    let [photo, setPhotos] = useState();
    function UpdateSearch(event){
        event.preventDefault()
        setSearchTerm(event.target.value)
    }
    function handleImageResponse(photoList){
        setPhotos(photoList)
    }
    async function searchOptim(word){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const responseRaw = await fetch(apiUrl);
            const response = await responseRaw.json();
            const firstResult = response[0];
            setSearchData(firstResult);

        // Loading the images from the image API
        let imageApiKey = '563492ad6f91700001000001d111b2ef67044484959f02d163ee9643';
        let imageUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
            const imageResponseRaw = fetch(imageUrl, {
                headers: {
                    Authorization: `Bearer ${imageApiKey}`
                }
            });
            const imageResponse = await (await imageResponseRaw).json();
            handleImageResponse(imageResponse.photos)
    }
    async function Search(event){
        event.preventDefault()
        if (searchTerm !== " "){
            searchOptim(`${searchTerm}`);
        }
    }
    async function initializeDictionary(){
        searchOptim("see");

    }
    useEffect(() => {
        initializeDictionary()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="SearchForm pb-3">
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
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Photos data={photo} />
                        </div>

                    </div>
                </div>
            <footer>
                <div className="p-2">
                    <h6>
                        <a href="https://github.com/eporubin/dictionary-app" target="_blank" rel="noreferrer" >Open-source</a> project by <a href="https://subtle-conkies-6c2465.netlify.app/" target="_blank" rel="noreferrer">Elena Porubin </a>🌻 build with 🖥️React
                    </h6>
                </div>
            </footer>
        </div>
    )
}