import React, {useState} from 'react';

const CitySearch = ({getAirQuality}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSearch = (event) => {
        // prevent form from refreshing the page as not needed for react. Form has default behavior of refreshing
        event.preventDefault()

        // replace spaces with hyphens
        const formattedCity = inputValue.replace(/ /g, '-') 
        getAirQuality(formattedCity)
    }


    return (
        <form onSubmit={handleSearch} className='mb-4'>
            <input type="text" placeholder='Enter city...' onChange={handleInputChange} className='form-control' />
            <button type='submit' className='btn btn-primary mt-3'>Search</button>
        </form>
    )
}

export default CitySearch