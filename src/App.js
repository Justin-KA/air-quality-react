import React, {useState} from 'react'
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css'
import {AirQualityCard, ForecastCard} from './AirQualityCard';
import PollutantInfo from './PollutantInfo';
import AirQualityLevelsTable from './AirQualityLevelsTable';
import './App.css';

function App() {
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)


  const getAirQuality = async (city) => {
    try {
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`)
      const data = await response.json()
      console.log(data)
      if(response.ok && data.status ==='ok') {
        setAirQualityData(data.data)
        setError(null)
      } else {
        setError('Couldnt find city or there was a typo. Please check and try again.')
      }
    } catch (error) {
      console.error('network error:', error)
      setError('Sorry something went wrong')
      setAirQualityData(null)
    }
  }

  return (
    <div className='container'>
    <h1 className='mt-5 mb-3'>My City Air Quality</h1>
    <CitySearch getAirQuality={getAirQuality}/>
    {error && (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    )}
    {airQualityData && (
      //Pollutant info
      <>
      <AirQualityCard data={airQualityData}/>
      <PollutantInfo pollutant={airQualityData.dominentpol}/>
      < ForecastCard data={airQualityData}/>
      </>
    )}
    <AirQualityLevelsTable />
    </div>
  );
}

export default App;
