import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header'; 

import WeatherPage from './pages/weather';
import { Weatherlogic } from './core/usecase/weather_logic/weather_logic';
import { ApiCall } from './core/infrastructure/services/api_call';
import { IWeatherlogic } from './core/usecase/interfaces/weatherlogic/weatherlogic';

const apiCall = new ApiCall()
const weatherLogic: IWeatherlogic = new Weatherlogic(apiCall)
function App() {
  return (
    <>
      
      <WeatherPage weatherLogic={weatherLogic}  />
    </>
  )
}

export default App;
