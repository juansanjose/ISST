import * as React from 'react';
import {Table} from 'react-bootstrap';
import {Link } from "react-router-dom";


export default function AreaCliente() {

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
				<td>En tránsito </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td></td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">2</Link></td>
				<td>En tránsito </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td></td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">3</Link></td>
				<td>En tránsito </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td></td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">4</Link></td>
				<td>En tránsito  </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td></td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">5</Link></td>
				<td>Completado </td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/areaclienteopinion">Inserta valoración</Link></td>
			</tr>
			<tr>
				<td><Link to="/seguimientocliente">6</Link></td>
				<td>Completado</td>
				<td><Link to="/perfilrepartidor">Lorem ipsum dolor sit amet, consectetur adipiscing.</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td><Link to="/areaclienteopinion">Inserta valoración</Link></td>
			</tr>
			
		</tbody>
		</Table>
		
		<h4>Recuerda que solo se pueden evaluar pedidos completados.</h4>
	</div>
  );
}