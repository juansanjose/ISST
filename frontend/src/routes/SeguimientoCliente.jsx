import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext,useState,useEffect } from 'react';
import reparto from '../assets/en_reparto.png';
import recogido from '../assets/espera_recogido.png';
import confirmado from '../assets/pedido_confirmado.png';
import entregado from '../assets/pedido_entregado.png';
import almacen from '../assets/salida_almacen.png';
import RutaRepartidor from './RutaRepartidor';
import {coordenadas} from '../assets/coordenadas.js';

export default function SeguimientoCliente() {
 //hooks con las propiedadades del item para crear
 const [longitud, setLongitud]=useState(coordenadas[0].longitud);
 const [latitud, setLatitud]=useState(coordenadas[0].latitud);
 const [repartidor,setRepartidor]=useState("");//esto sería mejor que fuese pasado como un props.repartidor
 const [pedido,setPedido]=useState();//mejor que se lo pasasen como props
 const [idTraza,setIdTraza]=useState("");
 const [time, setTime] = useState(Date.now()); 
 const [contador,setContador]=useState(0);
 const [ubicacion,setUbicacion]=useState("");
 
 //método generador de trazas
 function uuidv4() {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
  }
 
 let prueba={
	id:"prueba",
	origen:"dfdfdf",
	destino:"sdfsdfsdf",
   estado:"1",
   idvehiculo:"2323123123",
   repartidor:"juan",
	cliente:"juan"
 }; 
	


	let traza = {
		trazaid: String(uuidv4()),
		fechahora: "2007-12-03T10:15:30",
		latitud: String(latitud),
		longitud: String(longitud),
		pedido: prueba,
   };
   
  let flag=0;


  

useEffect(() => {
	
	// fetch('http://localhost:8080/api/pedido/create', {
	// 	method:'POST', 
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		id:"prueba",
	// 		origen:"dfdfdf",
	// 		destino:"sdfsdfsdf",
	// 	   estado:"1",
	// 	   idvehiculo:"2323123123",
	// 	   repartidor:"juan",
	// 		cliente:"juan"
	// 	}
	// 	 )
	// }).then(flag=1);
	 
	
	console.log(contador);
	console.log(latitud);
	
   const interval = setInterval(() => setTime(new Date().toISOString())
   , 1000);
   

const timer = setInterval(() => {
	if (contador+1===10)
	{
	setContador(0);
   }
	
   setContador(prevcontador => prevcontador + 1); // <-- Change this line!
   
   setLongitud(coordenadas[contador].longitud);
	setLatitud(coordenadas[contador].latitud);
	fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=json`)
	 .then(response => response.json())
	 .then(response=> setUbicacion(String(response.address.road)))

  		}, 3000);
 
	
   const id = setInterval(() => {
	   

	 // <-- (3) invoke in interval callback
   }, 3000);
//    setTimeout(function(){
// 	fetchData()
// 		}, 2000)
  
  return () => {
	clearInterval(timer);
     clearInterval(interval);
 	clearInterval(id);
   };
 
}, [contador]);
	
   let pedir_Pedido=async()=>{
   try{
	 await fetch('/api/pedido/prueba', {
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




// 	//creamos una traza de prueba
	  
	 

	// const ifgjsdoigsdf=setInterval(()=>
	// 	fetch('/api/traza/create', {
	// 			method:'POST', 
	// 			headers: {
	// 				'Accept': 'application/json',
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify(traza),
	// 		});
	// 		setContador((contador)=>contador+1);
	// 	 	if (contador==Object.keys(coordenadas).length)
 	// 		{
	//  		contador=0;
 	// 			}
	// 		setLongitud(coordenadas[contador].longitud);
  	// 		setLatitud(coordenadas[contador].longitud);
			
			
		  
	//   , 1000);

	 

  
  
   return (
	   
    <div>
		<div className="justify-content-around row">
			<div className="col-1 flex-column">
				<img src={reparto}  className="col" alt="reparto"  style={{height: '50px', width: '70px'}}/>
				<div className="col">Pedido confirmado</div>
			</div>
			<div className="col-1 flex-column">
				<img src={recogido} className="col-1" alt="recogido" style={{height: '50px', width: '70px'}}/>
				<div className="col">Salida del almacén</div>
			</div>
			<div className="col-1 flex-column">
				<img src={confirmado} className="col-1" alt="confirmado" style={{height: '50px', width: '70px'}}/>
				<div className="col" style={{color:'green', fontWeight:'bold'}}>En reparto</div>
			</div>
			<div className="col-1 flex-column">
				<img src={entregado} className="col-1" alt="entregado" style={{height: '50px', width: '70px'}}/>
				<div className="col">A la espera de ser recogido</div>
			</div>
			<div className="col-1 flex-column">
				<img src={almacen} className="col-1" alt="almacen" style={{height: '50px', width: '70px'}}/>
				<div className="col">Pedido entregado</div>
			</div>
		</div>
	
		
		<h3 className="p-3">Identificador:</h3>
	
		<Table className="bg-light">
		
		<thead>
			<tr>
				<th>Fecha y hora</th>

				<th>Estado del pedido</th>

				<th>ID Vehículo</th>

				<th>Ubicación del pedido</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{time}	 </td>
				<td>{prueba.estado} </td>
				<td>{prueba.idvehiculo} </td>
				{/* <td>{contador} </td> */}

				<td>{ubicacion} </td>
			</tr>
			
		</tbody>
		</Table>
	</div>
   );
 }