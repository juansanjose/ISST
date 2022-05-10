import * as React from 'react';
import {Button, ButtonGroup, Container, Table, Form} from 'react-bootstrap'; 
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import AuthService from "../services/auth.service";
import authHeader from '../services/auth-header';

export default function AreaRepartidor() {
	const [nombre, setNombre] = useState("");
	const [pedido, setPedido] = useState([]);
	const handleSubmit = (e) => {
        e.preventDefault();

		alert('You have submitted');
    }
	const currentUser = AuthService.getCurrentUser();

	useEffect(() => { 
		fetch('https://localhost:8443/api/pedido/create', {
			method:'POST', 
			headers: 
				authHeader()
			,
			body: JSON.stringify({
				id:"prueba",
				origen:"dfdfdf",
				destino:"sdfsdfsdf",
			   estado:"En tránsito",
			   idvehiculo:"2323123123",
			   repartidor:currentUser.username,
				cliente: "dumbo"
			}
			 )
		});
		
		// Update the document title using the browser API
		fetch('https://localhost:8443/api/pedido/repartidor/'+String(currentUser.username),
		{
			headers:authHeader()
		}
		)
			.then(response => response.json())
			.then(response => setPedido(response));
		console.log(pedido);
	},[]);

	const pedidosList = pedido.map(pedido => {
		return <tr key={pedido.repartidor}>
                	<td style={{whiteSpace: 'nowrap'}}>{pedido.id}</td>
                	<td>{pedido.estado}</td>
                	<td>{pedido.cliente}</td>
                	<td>{pedido.destino}</td>
			<td>{pedido.origen}</td>
                	<td>opinion</td>
        	</tr>
    	});

	return (
     <div>
		<Container fluid>
			<h2>HISTORIAL DE PEDIDOS DEL REPARTIDOR: {currentUser.username}</h2>
		{/* <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='firstName'>Name: </label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <button type='submit'>Buscar</button>
            </form>
        </div> */}
			<Table className="bg-light">
				<thead>
					<tr>
						<th>ID del producto</th>

						<th>Estado del pedido</th>

						<th>Cliente</th>

						<th>Destino</th>
						
						<th>Origen</th>
						
						<th>Opinión del cliente</th>
					</tr>
				</thead>
			<tbody>
				{pedidosList}
			</tbody>
			</Table>
		</Container>
		
		<h4>Recuerda que solo se pueden evaluar pedidos completados.</h4>
	 </div>
	);
}