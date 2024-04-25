import React, { useContext, useState } from 'react';
import { restCountryContext } from '../store/userContext';


const SearchCountry = () => {
    const [inputValue, setInputValue] = useState('');

    const { apiData, setFilteredCountries } = useContext(restCountryContext);





    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const filtered = apiData.filter((country) =>
            country.name.common.toLowerCase().startsWith(inputValue.toLowerCase())
        );

        setFilteredCountries(filtered);
    };

    return (
        <section className='flex flex-raw justify-center items-center h-16 w-full  bg-slate-800'>
            <div className='flex justify-center items-center h-14 max-w-7xl w-full text-white'>
                <form className='flex gap-2' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter Country"

                        className='px-1 py-2 rounded-lg text-black'
                    />
                    <button className='px-1 py-2 border  rounded-lg' type="submit">Submit</button>
                </form>
            </div>

        </section>
    );
};

export default SearchCountry;
