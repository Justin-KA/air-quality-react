import React from 'react';

const AirQualityCard = ({data}) => {
    const {aqi, city, dominentpol, time} = data
    return (
        <div>
            <h5>{city.name}</h5>
            <h6>Air Quality Index: {aqi}</h6>
            <p>Dominant Pollutant: {dominentpol}</p>
            <p>Last Updated: {time.s}</p>
        </div>
    )
}

export default AirQualityCard