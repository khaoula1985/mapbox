
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import {BiSolidMap} from "react-icons/bi";

function App() {
 
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
  const [pins, setPins] = useState([]);
  
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    mapStyle: 'mapbox://styles/mapbox/streets-v9',
    latitude: 45,
    longitude: 2,
    zoom:3 
  });
  const [selectedPin, setSelectedPin] = useState(null); // State to track selected pin

  useEffect(() => {
    axios
      .get("http://localhost:8080/pin")
      .then((resp) => {
        setPins(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      style={{ width: '100vw', height:'100vh' }}
      
    >
      {pins.map((p) => (
        <>
         <Marker
              key={p.id} // Add a unique key for each marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-20}
              offsetTop={-10}
              anchor="bottom">
              <button
               className="marker-btn"
               onClick={(e) => {
               e.preventDefault();
               setSelectedPin(p); // Set the selected pin when clicked
              }}
              >
               <BiSolidMap style={{fontSize:"16px"}}/>
              </button>
          </Marker>

      {selectedPin && (
        <Popup
          longitude={selectedPin.long}
          latitude={selectedPin.lat}
          onClose={() => setSelectedPin(null)}
        >
          <div>
            <label>Place:{selectedPin.title}</label> <br/>
            <label>Review:{selectedPin.description}</label><br/>
            <label>Rating:{selectedPin.rating}</label><br/>
            <label>longitude: {selectedPin.long}</label><br/>
            <label>latitude: {selectedPin.lat}</label><br/>
            <label>Created by: {selectedPin.username}</label>
          </div>
        </Popup> 
      )}
      </>
      ))}
         
    </ReactMapGL>
  );
  
}

export default App