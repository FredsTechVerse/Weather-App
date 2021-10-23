import React from 'react'
import Navbar from './components/Navbar'
import {useState,useEffect} from 'react'

function App() {

  let [simpleData,setSimpleData] = useState([]);

  useEffect(()=>{
    let wData = async ()=>{
      let sData = await destructured();
      setSimpleData(sData);
    }
    wData();
  })


  console.log(simpleData);

  const weatherData = async()=>{
    let data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Nyeri&appid=567766cda2201c50960c8f37b2ee3bf8')
    let w_data = await data.json();
    return w_data;
  }

// DESTRUCTURING THE DATA OBTAINED.
//===================================
let destructured = async () =>{
  let data = await weatherData();
  let id = data.id
   let {lon:longitude, lat:latitude} = data.coord;
    let {temp,pressure,humidity} = data.main
     let {name:city} = data
      // console.log (city ,longitude , latitude , temp , pressure , humidity);
   return {id,city ,longitude , latitude , temp , pressure , humidity};
}



  
  return (
    <div>
      <ul>
     {
      
         <>
    
        <li > Id:{simpleData.id}</li>
        <li > City:{simpleData.city}</li>
        <li > Longitude:{simpleData.longitude}</li>
        <li > Latitude: {simpleData.latitude}</li>
        <li > Temperature :{simpleData.temp}</li>
        <li > Pressure: {simpleData.pressure}</li>
        <li > Humidity: {simpleData.humidity}</li>


       </>
       

       
     }
  </ul>
    </div>
  )
}

export default App
