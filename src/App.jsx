import { CountryProvider, restCountryContext } from './store/userContext'
import './App.css'
import User from './component/User'


function App() {


  return (
    <CountryProvider >
      <User />
    </CountryProvider>
  )
}

export default App
