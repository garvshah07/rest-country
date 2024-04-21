
import { createContext, useState, useEffect } from "react"

const restCountryContext = createContext()


const CountryProvider = ({ children }) => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);





    return (
        <restCountryContext.Provider value={apiData}>
            {children}
        </restCountryContext.Provider>

    )
}

export { restCountryContext, CountryProvider }