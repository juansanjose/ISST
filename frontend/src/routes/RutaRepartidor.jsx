 import * as React from 'react';

 import { useState, useEffect } from 'react';
 import { MapContainer, Marker,  TileLayer,Polyline, useMap    } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import authHeader from '../services/auth-header';

 export default function RutaRepartidor(props){
   const [trazas,setTrazas]=useState([])
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;
    const limeOptions = { color: 'lime' }
 
    const ruta=[];
    useEffect(()=>{
      fetch(`https://localhost:8443/api/traza/pedido/${props.pedido.id}`,
      {
        headers:authHeader()
      }
      )
			.then(response => response.json())
			.then(response => setTrazas(response));

    },[trazas])
		
        
    trazas.map(traza =>(
        ruta.push([traza.latitud,traza.longitud])
        
         
         ));
     const position2 = [trazas[trazas.length-1]!==undefined ?trazas[trazas.length-1].latitud:40.4525723157632 , trazas[trazas.length-1]!==undefined?trazas[trazas.length-1].longitud:-3.7279164791107178 ]
     function ChangeMapView({ coords }) {
      const map = useMap();
      map.setView(coords, map.getZoom());
    
      return null;
    }
     return (

        <MapContainer center={position2}         style={{ height: 800, width: 800 }}        zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={position2} />

        {trazas.map(traza =>(
        <Marker position={[traza.latitud,traza.longitud]} key={traza.longitud+traza.latitud}>
          
        </Marker>
        
        ))}
               
        <Polyline pathOptions={limeOptions} positions={ruta} />
        
      </MapContainer>
      
   
     )
		
	 




 }