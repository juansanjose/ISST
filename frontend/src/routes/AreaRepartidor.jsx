import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";


export default function AreaRepartidor() {

  return (
    <div>
		<h2>PEDIDOS ACTUALES</h2>
		<Table className="bg-light">
		<thead>
			<tr>
				<th>ID del producto</th>

				<th>Destino</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><Link to="/arearepartidorfinalizar">1</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>

			</tr>
			<tr>
				<td><Link to="/arearepartidorfinalizar">2</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
		</tbody>
		</Table>
		
		<h2>PEDIDOS PENDIENTES</h2>
		<Table className="bg-light">
		<thead>
			<tr>
				<th>ID del producto</th>

				<th>Destino</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><Link to="/arearepartidorconfirmar">3</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>

			</tr>
			<tr>
				<td><Link to="/arearepartidorconfirmar">4</Link></td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
		</tbody>
		</Table>
	</div>
  );
}