import { promises } from "dns"
import { Weather } from "../../domain/dto/responses/weather_response"
import { IApiCall } from "../interfaces/api_call"
import { IWeatherlogic } from "../interfaces/weatherlogic/weatherlogic"

export class Weatherlogic implements IWeatherlogic{
    _aip_call:IApiCall
    constructor(apicall:IApiCall){
        this._aip_call =apicall
    }
    //the logic is going to need a location query
    //funtion to get to the weather logic
     getWeather = async (query:string): Promise<Weather> => {
        //make api call to get weather for query
        try{
            let weatherData = await this._aip_call.call<Weather>(`http://localhost:4000/weather/?location=${query}`,{method:"GET"});
            return weatherData;
        }catch(ex){
            console.error(ex)
            throw ex
        }
        // convert response  to weather
    }
}

