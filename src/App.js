import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <MapContainer
        className="App-map"
        center={[51.0, 19.0]}
        zoom={4}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        
      </MapContainer>
    </div>
  );
}
