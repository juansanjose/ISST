import * as React from 'react';
import {Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {Link } from "react-router-dom";

export default function AreaGestor () {
	const [pedido, setPedido] = useState([]);
	const handleSubmit = (e) => {
        e.preventDefault();

    }

	useEffect(() => { 
		
		// Update the document title using the browser API
		fetch('/api/pedido/all')
			.then(response => response.json())
			.then(response => setPedido(response));
		console.log(pedido);
	});
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
		
		<div><h2 style={{display: "inline"}}>REPARTIDORES</h2><Link to="/registrorepartidor">Añadir</Link></div>
		<Table className="bg-light">
		<thead>
			<tr>
				<th>ID repartidor</th>

				<th>Nombre</th>

			</tr>
		</thead>
		<tbody>
			<tr>
				<td><Link to="/perfilrepartidor">1</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/perfilrepartidor">2</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/perfilrepartidor">3</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/perfilrepartidor">4</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/perfilrepartidor">5</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/perfilrepartidor">6</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			
		</tbody>
		</Table>
		
	</div>
  );
}