import React, { useEffect, useState } from 'react'
import "./covid.css"

/**
* @author
* @function Covid
**/

const Covid = (props) => {
    const[data,setData]=useState([])
    const getCovidData=async()=>{
        try{
          const res=await fetch("https://api.covid19india.org/data.json")
          //console.log(res)
          const data=await res.json()
          console.log(data.statewise[0])
          setData(data.statewise[0])
        }catch(err){
           console.log(err)
        }
    }
    useEffect(()=>{
        getCovidData()
    },[])
  return(
    <div>
         <div className="head">
        
        <h2>LIVE COVID-19 CORONA CASES TRACKER</h2>
        </div>
       {/* <ul>
         <li classNameName="card">

         </li>
       </ul> */}
       

       <div className="card">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">COUNTRY</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item1">INDIA</h1> 
      
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">ACTIVE CASES</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item1">{data.active}</h1> 
      
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">RECOVERED</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item1">{data.recovered}</h1> 
      
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">CONFIRMED</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item1">{data.confirmed}</h1> 
      
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">DEATHS</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item1">{data.deaths}</h1> 
      
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">LAST UPDATED</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item1">{data.lastupdatedtime}</h1> 
      
    </div>
  </div>
</div>


<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h className="item">SEE STATEWISE RESULTS</h>
      
    </div>
    <div className="flip-card-back">
      <h1 className="item2"><a href="/statewiseresult">CLICK HERE</a></h1> 
      
    </div>
  </div>
</div>

</div>


    </div>
   )

 }

export default Covid