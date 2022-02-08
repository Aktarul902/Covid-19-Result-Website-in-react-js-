import React,{useState,useEffect} from 'react'
import Content from "./content"
function Search() {
    const [searchval,setSearchval]=useState("")
    const [covidresult,setCovidresult]= useState([])
    const result = ()=>{
        const res= covidresult.filter((curelem)=>{
             return curelem.state===searchval
         })
         setCovidresult(res)
         console.log(res);
        //  setSearchval("") 
        } 
  
    const Apidata = async()=>{
        const res = await fetch("https://data.covid19india.org/data.json");
        const data = await res.json();
        // console.log(data.statewise);
        setCovidresult(data.statewise)
    
    }
    useEffect(() => {
     Apidata()
    }, [searchval])

   
    return (
        <div>
            <input type="search" name="" id="search"  value ={searchval}onChange={(event)=> setSearchval(event.target.value)} /><div className="logo" type="submit" onClick={result}><i class="fas fa-search" ></i></div>
            <Content covidresult={covidresult} searchval={searchval}/>
        </div>
    )
}

export default Search
