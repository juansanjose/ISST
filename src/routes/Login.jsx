import * as React from 'react';
import {Button, Form} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";

export default function Login() {

  return (
    <div className="bg-light">
	<Form className="flex-column p-5 mx-auto col-md-5 text-center">
		Introduzca aquí sus credenciales.
	  <Form.Group className="col-6 mx-auto p-2" controlId="formBasicEmail">
		<Form.Control type="email" placeholder="Correo electrónico" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>

	  <Form.Group className="col-6 mx-auto p-2" controlId="formBasicPassword">
		<Form.Control type="password" placeholder="Contraseña" />
	  </Form.Group>
	  <Button as={Link} to="/gestion" variant="primary" className="col-6 btn-dark p-2" type="submit"> Iniciar Sesión</Button>
	</Form>
	</div>
  );
}