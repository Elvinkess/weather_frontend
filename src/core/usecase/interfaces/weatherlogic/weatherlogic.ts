import { Weather } from "../../../domain/dto/responses/weather_response";

export interface IWeatherlogic{
    getWeather(query:string):Promise<Weather>
}