import * as React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function AreaClienteOpinion() {

  return (
    <div>
		<h3>PUNTÚA NUESTRO SERVICIO</h3>
		<div className="row px-2">
		<Button as={Link} to="/areacliente" className="col mx-2" variant="success">Bueno</Button>
		<Button as={Link} to="/areacliente" className="col mx-2" variant="warning">Normal</Button>
		<Button as={Link} to="/areacliente" className="col mx-2" variant="danger">Malo</Button>
		</div>
	</div>
  );
}