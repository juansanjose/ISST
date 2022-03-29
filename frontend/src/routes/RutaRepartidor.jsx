import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext } from 'react';
import { useState, useEffect } from 'react';

//clase que pretende ser la que sirva como generadora de trazas que tendrá abierta el repartidor durante el pedido

export default function RutaRepartidor(){


    //comenzamos con un item vacio que tendremos que rellenar de datos

    //hooks con las propiedadades del item para crear
    const [longitud, setLongitud]=useState(0);
	const [latitud, setLatitud]=useState(0);
    const [repartidor,setRepartidor]=useState("");//esto sería mejor que fuese pasado como un props.repartidor
    const [pedido,setPedido]=useState("");//mejor que se lo pasasen como props
    const [idTraza,setIdTraza]=useState(0);
    const [fechaHora,setFechaHora]=useState();
    
    //método generador de trazas
	async function fetchData() {
	  try{
        await fetch('/api/traza/create', {
            method:'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Item),
        });
        const content = await rawResponse.json();

        console.log(content);	 
      
        }
	  catch(error){
	  }
	  
  	  
	   }
        Item = {
            trazaid: idTraza,
            fechahora: fechaHora,
            latitud: latitud,
            longitud: longitud,
            pedidos: pedido,
        };
	   
    useEffect(() => {
	   
		fetchData();
		
	  }, []);



}