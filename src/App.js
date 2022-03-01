import * as React from 'react';
import './App.css';
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap';
import logo from './assets/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/Home.js';
import Login from './routes/Login.jsx';
import AreaCliente from './routes/AreaCliente.jsx';
import Gestion from './routes/Gestion.jsx';

function App() {
  return (
  <>
  {/*Header*/}
	<Navbar expand="lg">
		<Container>
		<Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" style={{height: '50px', width: '70px'}}/></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="ms-auto">
			<Nav.Link as={Link} to="/">Inicio</Nav.Link>
			<Nav.Link as={Link} to="/login"><Button variant="outline-dark">Iniciar sesión</Button></Nav.Link>
		  </Nav>
		</Navbar.Collapse>
		</Container>
	</Navbar>
	{/*Header fin*/}
	{/*Rutas*/}
	<Routes>
      <Route path="/" element={<Home />} />
	  <Route path="/login" element={<Login />} />
	  <Route path="/areacliente" element={<AreaCliente />} />
	  <Route path="/gestion" element={<Gestion />} />
    </Routes>
	{/*Rutas*/}
	{/*Footer*/}

  <section className="border-bottom text-lg-start text-muted">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            About
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h5 className="text-uppercase fw-bold mb-4">
            Trackers
          </h5>

        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            Support
        </div>

      </div>

    </div>
  </section>

  <div className="text-center p-4">
    Copyright © 2022. All Rights Reserved.
  </div>
  
{/*Footer fin*/}

</>
  );
}

export default App;
