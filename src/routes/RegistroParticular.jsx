import * as React from 'react';
import {Button, Form} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";

export default function RegistroParticular() {

  return (
    <div>
	<h1 className="text-center">REGISTRO PARTICULAR</h1>
	<Form className="flex-column p-5 ">
		
	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">Nombre</Form.Label>
		<Form.Control className="col" type="text" placeholder="Nombre" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">Apellidos</Form.Label>
		<Form.Control className="col" type="text" placeholder="Apellidos" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">Fecha de Nacimiento</Form.Label>
		<Form.Control className="col" type="date" placeholder="Fecha de nacimiento" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">Domicilio</Form.Label>
		<Form.Control className="col" type="text" placeholder="Domicilio" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">DNI</Form.Label>
		<Form.Control className="col" type="text" placeholder="DNI" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>

	  <Form.Group className="mx-auto p-2 row" controlId="formBasicEmail">
		<Form.Label className="col-2">E-mail</Form.Label>
		<Form.Control className="col" type="text" placeholder="Nombre" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
  	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">Número de teléfono</Form.Label>
		<Form.Control className="col" type="text" placeholder="Número de teléfono" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row">
		<Form.Label className="col-2">Nombre de usuario</Form.Label>
		<Form.Control className="col" type="text" placeholder="Nombre de usuario" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row" controlId="formBasicPassword">
	  	<Form.Label className="col-2">Contraseña</Form.Label>
		<Form.Control className="col" type="password" placeholder="Contraseña" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  <Form.Group className="mx-auto p-2 row" controlId="formBasicPassword">
		<Form.Label className="col-2">Repetir contraseña</Form.Label>
		<Form.Control className="col" type="password" placeholder="Repita su contraseña" />
		<Form.Text className="text-muted">
		</Form.Text>
	  </Form.Group>
	  
	  
	  <div className="text-center">
	  <Button as={Link} to="/" variant="primary" className="col-3 btn-dark p-2 m-1" type="submit"> Registrar</Button>
	  </div>
	</Form>
	</div>
  );
}