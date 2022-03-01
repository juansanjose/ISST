import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";

export default function Gestion () {

  return (
	<div>
		<Table className="bg-light">
		<thead>
			<tr>
				<th>ID del producto</th>

				<th>Estado del pedido</th>

				<th>Repartidor</th>

				<th>Destino</th>
				
				<th>Origen</th>
				
				<th>Prioridad</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			<tr>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
				<td>Lorem ipsum dolor sit amet, consectetur adipiscing. </td>
			</tr>
			
		</tbody>
		</Table>
	</div>
  );
}