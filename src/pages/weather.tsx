import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { IWeatherlogic } from "../core/usecase/interfaces/weatherlogic/weatherlogic";
import { Weather } from "../core/domain/dto/responses/weather_response";

// This function acts as a middlemen,talks to both UI/route and logic
function WeatherController(weatherLogic: IWeatherlogic){ 
    const [city, setCity] = useState<string>("")
    const [weatherForCity, setWeatherForCity] = useState<Weather | null>(null);
    
    const  updateCity = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    async function Getweather(e:FormEvent){
        e.preventDefault()
        let weatherResponse: Weather = await weatherLogic.getWeather(city)
        console.log(weatherResponse)
        setWeatherForCity(weatherResponse)
    }
    return {
        city, updateCity,Getweather, weatherForCity
    }
}


function WeatherPage(props: {weatherLogic: IWeatherlogic}){
    const { city, updateCity ,Getweather, weatherForCity} = WeatherController(props.weatherLogic);

    return(
        <div className="container">
            <h3 className="heading">Enter weather location :  {city}</h3>
            <div className="flex-con">
                <form className="form" onSubmit={Getweather} >
                <label className="labe">
                    Input  city <br />
                    <input className="input" type="text" value={city} onChange={updateCity}/>
                </label>
                <button>sumit</button>
            </form>
            </div>
            <div>
                <p>{weatherForCity ?  `The  weather for  ${city} is   ${weatherForCity.description}` : ""}</p>
                <p>{weatherForCity?.temperature  ?  `temperature is : ${weatherForCity.temperature}C` :""}</p>
                <p>{weatherForCity?.humidity ?  `Humidity is : ${weatherForCity.humidity}%` :""}</p>          
                <p>{weatherForCity?.precipitation  ?  `precipitation is : ${weatherForCity.precipitation}mm` :""}</p>
                <p>{( weatherForCity?.precipitation && weatherForCity.precipitation > 0)? `It's ${weatherForCity.description} in ${city} take an Umbrella ☔️` : weatherForCity ?`It is not rainy in ${city} no need for an umbrella except you're  a fan of Shadow` : '' }</p> 
            </div>
            
        </div>
    )
        
    
}
export  default WeatherPage;

