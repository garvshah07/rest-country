import { useContext } from 'react'
import { restCountryContext } from '../store/userContext'


function User() {
    const apiData = useContext(restCountryContext)


    return (
        <div>
            {apiData.map((data, index) => {
                return <div key={data.cca3}>
                    <h1>{data.cca3}</h1>
                </div>
            })}

        </div>
    )
}

export default User