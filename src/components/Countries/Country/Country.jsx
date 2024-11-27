import './Country.css'
import { useState } from 'react';
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountry(country);

    const calculatePopulationDensity = (population, area) => {
        return area ? (population / area).toFixed(2) : 'N/A';
    };
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            {/* If visited then visited e jabe otherwise ' ' e jabe */}
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Population Density: {calculatePopulationDensity(population, area)} per km²</p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? "I have visited this country." : "I want to visit"}
            
        </div>
    );
};
export default Country;