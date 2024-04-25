import { useContext } from 'react'
import { restCountryContext } from '../store/userContext'



const Country = () => {
    const { filteredCountries } = useContext(restCountryContext)


    return (

        <div className='flex mt-5 h-screen flex-wrap justify-center items-center'>
            <div className='flex gap-4 justify-center items-center flex-wrap max-w-7xl w-full ' >
                {
                    filteredCountries.map((country) => {
                        return (

                            <div key={country.cca2}
                                className="transform text-sm flex-wrap text-wrap transition duration-300 hover:scale-110 rounded-lg shadow-lg h-80 w-72 hover:shadow-xl bg-slate-700 text-white"
                            >
                                <div >
                                    <img className='rounded-t-md  h-40  w-full bg-cover ' src={country.flags.png} />
                                </div>
                                <div className='flex h-14 justify-center items-center text-xl font-bold'>
                                    <h2>{country.name.common}</h2>
                                </div>
                                <div className='flex justify-center h-16 px-5 gap-2 py-2 text-base items-start flex-col '>
                                    <h2>Capital : {country.capital}</h2>
                                    <h2>Region : {country.region}</h2>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Country