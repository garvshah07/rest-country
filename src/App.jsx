import { CountryProvider, restCountryContext } from './store/userContext'
import './App.css'
import SearchCountry from './component/SearchCountry'
import Country from './component/Country'



function App() {


  return (
    <CountryProvider >
      <SearchCountry />
      <Country />
    </CountryProvider>
  )
}

export default App
