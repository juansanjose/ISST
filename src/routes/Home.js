import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";


export default function Home() {

  return (
    <div>
	<h1 className="text-center">¡BIENVENIDO A TRACKERS!</h1>
	<Form className="pt-4 p-4 row">
	  <Form.Group className="pr-2 col-8" controlId="IdProducto">
		<Form.Control type="email" placeholder="ID del producto" />
	  </Form.Group>
		<Button as={Link} to="/seguimientocliente" variant="primary" className="btn-dark col" type="submit"> Buscar</Button>
	</Form>
	</div>
  );
}