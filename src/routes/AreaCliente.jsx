import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext } from 'react';
import reparto from '../assets/en_reparto.png';
import recogido from '../assets/espera_recogido.png';
import confirmado from '../assets/pedido_confirmado.png';
import entregado from '../assets/pedido_entregado.png';
import almacen from '../assets/salida_almacen.png';

export default function AreaCliente() {

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
			</tr>
			<tr>
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
			</tr>
			<tr>
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