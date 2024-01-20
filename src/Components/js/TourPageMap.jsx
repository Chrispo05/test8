import React from "react";
import {MapContainer} from 'react-leaflet/MapContainer'
import {TileLayer} from 'react-leaflet/TileLayer'
import {useMap} from 'react-leaflet/hooks'
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import "../css/TourPageMap.css"
import GoalIcon from "../../Icons/goal.png"
import L from "leaflet";


//logica para crear el icono compatible para enviar por markers
 const VenueLocationIcon = L.icon({
    iconUrl: require("../../Icons/gps.png"),
    iconRetinaUrl: require("../../Icons/gps.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });


export function MapView() {
    return (
        <div className="TourSectionMapMainContainer ">
            <MapContainer className="TourSectionMapContainer border-rounded-g10"
                center={
                    [4.6373012, -75.569799]
                }
                zoom={15}
                scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={{lat:"4.6373012", lng: "-75.569799"}} icon={VenueLocationIcon} > 
                    <Popup>Punto de partida. <br/> <span className="font-bold">Expediciones Nevado Trek.</span> </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}
