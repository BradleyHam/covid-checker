import React, {useState, useEffect} from 'react'
import StatRow from './StatsRow'
import StatMap from './StatMap'
import StatTable from './StatTable'
import classes from './Statistics.module.scss'

function Statistics() {
    let [stats, setStats] = useState({})
    let [countries, setCountries] = useState(null)
    let [location, setLocation] = useState('');
    let [countryStats, setCountryStats] = useState(null);


    useEffect(()=>{
        async function getStats(){
            await fetch("https://disease.sh/v3/covid-19/all")
                .then(response => response.json())
                .then(data => setStats(data)) 
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then(response => response.json())
                .then(data => setCountries(data))                    
        }
        getStats()
    },[])

    useEffect(()=>{
        async function getCountryStats(){
            await fetch(`https://disease.sh/v3/covid-19/countries/${location}`)
            .then(response => response.json())
            .then(data => setCountryStats(data)) 
        }
        if(location !== ''){
            getCountryStats();
        }
    },[location])

    return (
        <div className={classes.StatsContainer}>
        <div className={classes.Stats}>
            <StatRow  
                stats={countryStats === null ? stats : countryStats} 
                countries={countries} 
                setLocation={setLocation} 
                location={location}/>
            <StatMap />
            <StatTable countries={countries}/>
        </div>
        </div>
    )
}

export default Statistics
