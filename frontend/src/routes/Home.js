import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext,useState,useEffect } from 'react';
import {Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


export default function Home() {

	const [id,setId] = useState("");
	const [encontrado,setEncontrado]=useState(false)
	//código para ver si existe el pedido o no  
	function handleErrors(response) {
		if (!response.ok) {
			setEncontrado(false)
			throw Error(response.statusText);
			
		}
		setEncontrado(true)
		return response;
	}
	useEffect(()=>{
		fetch('http://localhost:8080/api/pedido/create', {
			method:'POST', 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id:"prueba",
				origen:"dfdfdf",
				destino:"sdfsdfsdf",
			   estado:"1",
			   idvehiculo:"2323123123",
			   repartidor:"juan",
				cliente:"juan"
			}
			 )
		});
		if(id != ""){
		fetch(`/api/pedido/${id}`)
		.then(response => handleErrors(response))
		.then(response => console.log(response) )
		.catch(error => console.log(error) );
		}
	},[id])
	
		
  return (
    <div>
	<h1 className="text-center">¡BIENVENIDO A TRACKERS!</h1>
	<Form className="pt-4 p-4 row">
	  <Form.Group className="pr-2 col-8" controlId="IdProducto">
		<Form.Control type="text"  placeholder="ID del producto"  onChange={e=>setId(e.target.value)}/>
	  </Form.Group>
	<Button as={Link}  to={{pathname: `/seguimientocliente/${id}`}} variant="primary"className="btn-dark col" type="submit" disabled={!encontrado}>Buscar</Button>
	<Form.Text muted >{!encontrado?"No existe ese pedido":""}</Form.Text>

	</Form>
	
	
	</div>
  );
}