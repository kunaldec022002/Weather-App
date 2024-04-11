import React, { useEffect, useState } from "react";
import './Home.css';
import axios, { Axios } from "axios";

function Home()
{

    const [city, setcity] =useState('')
    const [temperature,settemperature] = useState('0')
    const [Message,setMessage] = useState('')

  async function loadWeatherInfo()
    {
        try
        {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c`)
             settemperature((response.data.main.temp-273).toFixed(2))
            setMessage("✅ Data Fetch Sucessfully 😍...")
        }

        catch(err)
        {
            settemperature(0)
            setMessage("City not Found")
        }  
    }

    useEffect(()=>
    {
        loadWeatherInfo()
    }, [city])


 return(
        <div className="container">
            <div className="Child">
            <h1 className="app-title">Weather App </h1>

            <
                input className="search-bar" 
                type="text"
                placeholder="Enter city.."
                value={city}
                onChange={(e)=>{
                    setcity(e.target.value)
                }}

            />
            
             <h1 className="temperature-text">Temperature:{temperature}°C</h1>
           
            <p className="messege-text">{Message}</p>

            </div>

         
        </div>

    )
}

export default Home