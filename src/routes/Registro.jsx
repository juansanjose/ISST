import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";


export default function Registro() {

  return (
    <div>
		<h1 className="text-center">REGISTRO CUENTA CLIENTE</h1>
		<h3 className="text-center">¿Qué eres?</h3>
		<div className="d-flex justify-content-around">
			<Button as={Link} to="/registroempresa" variant="primary" className=" col-2 btn-dark py-4" type="submit">Empresa</Button>
			<Button as={Link} to="/registroparticular" variant="primary" className="col-2 btn-dark py-4" type="submit">Particular</Button>
		</div>
	</div>
  );
}