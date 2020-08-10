import React, {useState, useEffect} from 'react'
import StatRow from './StatsRow'
import StatMap from './StatMap'
import StatTable from './StatTable'
import classes from './Statistics.module.scss'

function Statistics() {
    let [stats, setStats] = useState({})
    let [countries, setCountries] = useState([])
    let [location, setLocation] = useState('');
    let [countryStats, setCountryStats] = useState(null);
    let [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796});
    let [zoom, setZoom] = useState(2)

  
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
            .then(data => {
                setCountryStats(data)
                setMapCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long})
                setZoom(3)
            }) 
        }
        // if statement preventing use effect running on initial page render 
            if(location !== ''){
                getCountryStats();
            }
         // -------------------------

    },[location])

    return (
        <div className={classes.StatsContainer}>
        <div className={classes.Stats}>
            <StatRow  
                stats={countryStats === null ? stats : countryStats} 
                countries={countries} 
                setLocation={setLocation} 
                location={location}/>
            <StatMap center={mapCenter} zoom={zoom} countries={countries} />
            <StatTable countries={countries}/>
        </div>
        </div>
    )
}

export default Statistics
