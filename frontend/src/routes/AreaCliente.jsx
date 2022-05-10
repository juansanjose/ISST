import * as React from 'react';
import {Button, ButtonGroup, Container, Table, Form} from 'react-bootstrap'; 
import {Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import AuthService from "../services/auth.service";
import authHeader from '../services/auth-header';

export default function AreaCliente() {
	const [nombre, setNombre] = useState("");
	const [pedido, setPedido] = useState([]);
	const handleSubmit = (e) => {
        e.preventDefault();

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
			   repartidor:"juan",
				cliente: currentUser.username
			}
			 )
		});

		fetch(`https://localhost:8443/api/pedido/cliente/${currentUser.username}`,
		{headers: 
				authHeader()
		})
			.then(response => response.json())
			.then(response => setPedido(response));
		console.log(pedido);
		
	},[]);
	
	/*constructor(props) {
		super(props);
		this.state = {pedidos: []};
	}*/

	/*componentDidMount() {
		fetch('/api/pedido/cliente')
			.then(response => response.json())
			.then(data => this.setState({pedidos: data}));
	}*/

	/*<div>
		<Form className="pt-4 p-4 row">
	  		<Form.Group className="pr-2 col-8" controlId="IDcliente">
				<Form.Control type="cliente" placeholder="Nombre cliente" />
	  		</Form.Group>
			<Button as={Link} to="/seguimientocliente" variant="primary" className="btn-dark col" type="submit"> Buscar pedidos del cliente</Button>
		</Form>
	</div>*/
function buscarPedido(){}
	const pedidosList = pedido.map(pedido => {
		return <tr key={pedido.cliente}>
                <td style={{whiteSpace: 'nowrap'}}>{pedido.id}</td>
                <td><Button as={Link}  to={{pathname: `/seguimientocliente/${pedido.id}`}} variant="success" type="submit">{pedido.estado}</Button></td>
                <td>{pedido.repartidor}</td>
                <td>{pedido.destino}</td>
				<td>{pedido.origen}</td>
                <td>opinion</td>
        </tr>
    });

	return (
     <div>
		<Container fluid>
			<h2>HISTORIAL DE PEDIDOS DEL CLIENTE: {currentUser.username}</h2>
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
                <button type='submit' >Buscar</button>
            </form>
        </div> */}
			<Table className="bg-light">
				<thead>
					<tr>
						<th>ID del producto</th>

						<th >Estado del pedido</th>

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
		</Container>
		
		<h4>Recuerda que solo se pueden evaluar pedidos completados.</h4>
	 </div>
	);
}
