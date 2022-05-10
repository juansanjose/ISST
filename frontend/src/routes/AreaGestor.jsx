import * as React from 'react';
import {Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {Link } from "react-router-dom";
import authHeader from '../services/auth-header';

export default function AreaGestor () {
	const [pedido, setPedido] = useState([]);
	const [user, setUser] = useState([]);

	const handleSubmit = (e) => {
        e.preventDefault();

    }

	useEffect(() => { 
		
		// Update the document title using the browser API
		fetch('https://localhost:8443/api/pedido/all',{headers: 
			authHeader()
	})
			.then(response => response.json())
			.then(response => setPedido(response));
		fetch('https://localhost:8443/api/test/all',{
			headers: 
			authHeader()
	})
		
			.then(response => response.json())
			.then(response => setUser(response))
			.then(response=>console.log(response));
		
	},[]);
	const pedidosList = pedido.map(pedido => {
		return <tr key={pedido.cliente}>
                <td style={{whiteSpace: 'nowrap'}}>{pedido.id}</td>
                <td>{pedido.estado}</td>
                <td>{pedido.repartidor}</td>
                <td>{pedido.destino}</td>
				<td>{pedido.origen}</td>
                <td>opinion</td>
        </tr>
    });
	const userList = user.map(user => {
		return <tr key={user.cliente}>
                <td style={{whiteSpace: 'nowrap'}}>{user.id}</td>
                {/* <td>{user.roles}</td> */}
                <td>{user.username}</td>
                </tr>
    });
  return (
	<div>
		<h2>HISTORIAL DE PEDIDOS</h2>
		<Table className="bg-light">
		<thead>
			<tr>
				<th>ID del producto</th>

				<th>Estado del pedido</th>

				<th>Repartidor</th>

				<th>Destino</th>
				
				<th>Origen</th>
				
				<th>Opinión del cliente</th>
			</tr>
		</thead>
		<tbody>
			{pedidosList}	
		</tbody>
		</Table>
		
		<div><h2 style={{display: "inline"}}>Usuarios</h2><Link to="/registrorepartidor">Añadir</Link></div>
		<Table className="bg-light">
		<thead>
			<tr>
				<th>ID </th>

				{/* <th>Rol</th> */}
				<th>Nombre</th>

			</tr>
		</thead>
		<tbody>
			{userList}	
		</tbody>
		</Table>
		
	</div>
  );
}