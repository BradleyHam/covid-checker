import React from 'react'
import classes from '../Statistics/Statistics.module.scss'
import {Map as LeafletMap, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.scss'

function StatMap() {
    return (
        <div className={`${classes.statMap} map`}>
            <LeafletMap center={{lat: 34.80746, lng: -40.4796}} zoom={2}>
                <TileLayer
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </LeafletMap>
        </div>
    )
}

export default StatMap
