

import React,{useState,useEffect} from 'react';
import "./BabiesName.css" ;
import babyNameData from "./babyNameData"; // use data from Json package

export default function BabyName() {

    const[searchTerm,setSearchTerm]= useState("");

    const[searchResults,setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
        console.log(event.target.value);
    };
    // Search Bar with useEffect
    useEffect(() =>{
        const results = babyNameData.filter(person =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
            setSearchResults(results);
    },[searchTerm]);
    
    //Ordered Name List 
    searchResults.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
       })

    return (
        <div>
            <div className="input-group mb-3 d-flex p-2">
                <input 
                type="text" 
                className="form-control border border-warning rounded-pill " 
                value ={searchTerm}
                onChange = {handleChange}
                placeholder="Search Name" />
                <ul>
                    {searchResults.map((item,index)=>(
                        <li key={index} className={`${item.sex} baby`}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

