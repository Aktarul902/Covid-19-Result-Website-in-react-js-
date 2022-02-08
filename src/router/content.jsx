import React,{ useState,useEffect } from 'react'
import './style.css'
const Content = ({covidresult,searchval}) => {
 
  
    return (
       
        <div className="container">
        
      
                 
               
                 <ul className='table-nav'>
                    <li>City</li>
                    <li>Recover</li>
                    <li>Deaths</li>
                    <li>Confirmed</li>
                    <li>Active</li>
                </ul>
             
                 {covidresult.map((curelm,index)=>{
                //  console.log(curelm.state);
                    return[
                        <div className="tab">
                        <p >{curelm.state}</p>
                        <p className='green' >{curelm.recovered}</p>
                        <p className='red'>{curelm.deaths}</p>
                        <p className='green'>{curelm.confirmed}</p>
                        <p >{curelm.active}</p>
                    </div>
                    ]             
                })}
            </div>
    
       )
    
}

export default Content
