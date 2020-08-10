import React from 'react'
import classes from '../Statistics/Statistics.module.scss'
import {Map as LeafletMap, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.scss'
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";


const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    }
  };
  
let showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

function StatMap({center, zoom, countries, casesType,}) {
    return (
        <div className={`${classes.statMap} map`}>
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                
                  {showDataOnMap(countries, casesType)}
            </LeafletMap>
            <div className={classes.mapBlocker}></div>
            <div className={classes.mapBlockerTwo}></div>
        </div>
    )
}

export default StatMap
