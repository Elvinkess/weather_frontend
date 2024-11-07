export class Weather{
    temperature:number  
    humidity: number
    description:string
    precipitation:number
    cloud:number
    constructor(  temp: number,humid:number,describe:string,prep:number,cloud:number){
        this.temperature = temp;
        this.humidity =humid;
        this.description=describe
        this.precipitation= prep
        this.cloud= cloud
    }
}