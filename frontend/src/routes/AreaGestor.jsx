import * as React from 'react';
import {Table} from 'react-bootstrap';

import {Link } from "react-router-dom";

export default function AreaGestor () {

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
			<tr>
				<td><Link to="/seguimientocliente">1</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">2</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">3</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">4</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">5</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">6</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			
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