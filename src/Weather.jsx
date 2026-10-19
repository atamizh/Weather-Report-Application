import { useState } from "react";
import axios from "axios";

function Weather()
{
    const [city,setcity] = useState("")

    const[weather,setweather] = useState("")
    const[temp,settemp] = useState("")
    const[desc,setdesc] = useState("")


    function handleCity(evt)
    {
        setcity(evt.target.value)
    }

    function getWeather()
    {
        var weatherData = axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a03330d9aa486e92b2df49ba36e8c92a`)

        weatherData.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

  
return (
  <div className="bg-black p-20">
    <div className="flex flex-col items-start bg-green-400 p-10 rounded-md">
      <h1 className="text-2xl font-medium">Weather Report</h1>
      <p>I can give you a weather report about your city !</p>
      
      <input onChange={handleCity}
        type="text" 
        placeholder="Enter your City Name" 
        className="bg-white border border-gray-300 rounded-md px-3 py-2 mt-2 outline-none focus:ring-2 focus:ring-black" 
      />
      
      <button onClick={getWeather} className="bg-black text-white rounded-md mt-2 py-2 px-4">
        Get Report
      </button>
    
      

    
        <div className="mt-2">
          <h1><b>Weather:</b>{weather}</h1>
          <p><b>Temperature:</b>{temp}</p>
          <p><b>Description:</b>{desc}</p>
        </div>
      
    </div>
    </div>
  );
};

export default Weather;