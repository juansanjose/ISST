import * as React from 'react';
import {Button, Form, Table} from 'react-bootstrap';
import { useContext,useState,useEffect } from 'react';
import {Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UserService from "../services/user.service";
import { render } from 'react-dom';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import  { Component } from "react";
import axios from 'axios';
import authHeader from '../services/auth-header';


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.onChangeEncontrado = this.onChangeEncontrado.bind(this);
		this.onChangeId= this.onChangeId.bind(this);

		this.state = {
		  	content: "",
			encontrado:true,
			id:""
		};
	  }
	  
	   
	  onChangeEncontrado() {
		this.setState({
		  encontrado: true
		});
	  }
	  onChangeEncontrado1() {
		this.setState({
		  encontrado: false
		});
	  }
	  onChangeId(e) {
		this.setState({
		  id: e.target.value
		});
	  }
	  if (){

	  }


	  componentDidMount() {
		UserService.getPublicContent().then(
		  response => {
			this.setState({
			  content: response.data
			});
		  },
		  error => {
			this.setState({
			  content:
				(error.response && error.response.data) ||
				error.message ||
				error.toString()
			});
		  }
		);
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
				cliente:"juan"
			}
			 )
		});
		// 
	  
	}
	// if (this.state.id!==""){
		// fetch(`/api/pedido/${this.state.id}`)
		// .then(response=>{if (response.ok) {
		// 			this.onChangeEncontrado1();
		// 			console.log("hola")
		// 		}
		// 		else{
		// 			this.onChangeEncontrado();
		// 			console.log("adios")

		// 		};}

		// )
		// .then(response => console.log(response) )
		// .catch(error => console.log(error) );
		// }

	
	render(){	


		
		
  return (
    <div>
		
	<h1 className="text-center">¡BIENVENIDO A TRACKERS!</h1>
	<Form className="pt-4 p-4 row">
	  <Form.Group className="pr-2 col-8" controlId="IdProducto">
		<Form.Control type="text"  placeholder="ID del producto"  onChange={this.onChangeId}/>
	  </Form.Group>
	<Button as={Link}  to={{pathname: `/seguimientocliente/${this.state.id}`}} variant="primary"className="btn-dark col" type="submit" disabled={!this.state.encontrado}>Buscar</Button>
	<Form.Text muted >{!this.state.encontrado?"No existe ese pedido":""}</Form.Text>
	</Form>
	
	
	</div>
  );
	}
}