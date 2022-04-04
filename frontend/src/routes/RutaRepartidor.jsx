 import * as React from 'react';
 import {Button, Form, Table} from 'react-bootstrap';
 import { useContext } from 'react';
 import { useState, useEffect } from 'react';
 import {coordenadas} from '../assets/coordenadas.js';



 export default function RutaRepartidor(){

     //hooks con las propiedadades del item para crear
     const [longitud, setLongitud]=useState(coordenadas[0].longitud);
 	 const [latitud, setLatitud]=useState(coordenadas[0].latitud);
     const [repartidor,setRepartidor]=useState("");//esto sería mejor que fuese pasado como un props.repartidor
     const [pedido,setPedido]=useState("");//mejor que se lo pasasen como props
     const [idTraza,setIdTraza]=useState(0);
     const [fechaHora,setFechaHora]=useState();
     const [contador,setContador]=useState(0);
    const token="5b3ce3597851110001cf624824cad9bb8d1a4d8faeda2798a2ccb481";
    var request = new XMLHttpRequest();

request.open('GET', 'https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf624824cad9bb8d1a4d8faeda2798a2ccb481&start=8.681495,49.41461&end=8.687872,49.420318');

request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
    
    let latitud1="";
    let latitud2="";
    let longitud1="";
    let longitud2="";
    
    let pedir_Pedido=async()=>{
        try{
          await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${token}&start=${latitud1,longitud1}&end=${latitud2,longitud2}`,{
              method:'GET', 
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              }
           
          }).then(response => response.json())
          .then(response => setPedido(response));
             }
        catch(error){
        }
     }




     return (
    <div>        
        <h1>HOLA</h1>
        <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.292221069335938%2C40.21086761742911%2C-3.145523071289063%2C40.67178518351826&amp;layer=mapnik&amp;marker=40.44172143612724%2C-3.7188720703125" ></iframe><br/>

    </div>     
     )
		
	 




 }