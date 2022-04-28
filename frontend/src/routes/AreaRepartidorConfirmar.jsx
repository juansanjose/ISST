import * as React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ubicacionfin from '../assets/pedido_finalizado.png';

export default function AreaRepartidorConfirmar() {

  return (
    <div>
		<h4 className="text-center">INICIAR PEDIDO</h4>
		<div className="row">
			<div className="col-1">
			<p>Dirección</p>
			<p>Cliente</p>
			</div>
			<div className="col">
				<p>Calle Test</p>
				<p><Link to="/perfilparticular">Marcos Testeo Gónzalez</Link></p>
			</div>
		</div>
		<h4 className="text-center">UBICACIÓN DESTINO</h4>
		<img src={ubicacionfin} alt="reparto" className="mx-auto d-block"/>
		<div className="d-flex justify-content-around mt-4">
		<Button as={Link} to="/rutarepartidor"  variant="success"className=" col-2 py-4" type="submit">Aceptar</Button>
		<Button as={Link} to="/arearepartidor"  variant="danger"className=" col-2 py-4" type="submit">Rechazar</Button>
		</div>
	</div>
  );
}