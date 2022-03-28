import * as React from 'react';
import './App.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import logo from './assets/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/Home.js';
import Login from './routes/Login.jsx';
import AreaCliente from './routes/AreaCliente.jsx';
import Registro from './routes/Registro.jsx';
import AreaRepartidor from './routes/AreaRepartidor.jsx';
import AreaGestor from './routes/AreaGestor.jsx';
import SeguimientoCliente from './routes/SeguimientoCliente.jsx';
import PerfilParticular from './routes/PerfilParticular.jsx';
import PerfilRepartidor from './routes/PerfilRepartidor.jsx';
import PerfilEmpresa from './routes/PerfilEmpresa.jsx';
import RegistroEmpresa from './routes/RegistroEmpresa.jsx';
import RegistroParticular from './routes/RegistroParticular.jsx';
import RegistroRepartidor from './routes/RegistroRepartidor.jsx';
import AreaRepartidorConfirmar from  './routes/AreaRepartidorConfirmar.jsx';
import AreaRepartidorFinalizar from  './routes/AreaRepartidorFinalizar.jsx';
import AreaClienteOpinion from  './routes/AreaClienteOpinion.jsx';
import Debug from './routes/Debug.jsx';

function App() {
  return (
  <div className="p-1">
  {/*Header*/}
	<Navbar expand="lg">
		<Container>
		<Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" style={{height: '50px', width: '70px'}}/></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		  <Nav className="ms-auto">
			<Nav.Link as={Link} to="/">Inicio</Nav.Link>
			<Nav.Link as={Link} to="/registro">Registro</Nav.Link>
			<Nav.Link as={Link} to="/perfilparticular">Perfil (Particular)</Nav.Link>
			<Nav.Link as={Link} to="/perfilrepartidor">Perfil (Repartidor)</Nav.Link>
			<Nav.Link as={Link} to="/perfilempresa">Perfil (Empresa)</Nav.Link>
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
	  <Route path="/areagestor" element={<AreaGestor />} />
	  <Route path="/registro" element={<Registro />} />
	  <Route path="/arearepartidor" element={<AreaRepartidor />} />
	  <Route path="/arearepartidorconfirmar" element={<AreaRepartidorConfirmar />} />
	  <Route path="/arearepartidorfinalizar" element={<AreaRepartidorFinalizar />} />
	  <Route path="/seguimientocliente" element={<SeguimientoCliente />} />
	  <Route path="/perfilrepartidor" element={<PerfilRepartidor />} />
	  <Route path="/perfilparticular" element={<PerfilParticular />} />
	  <Route path="/registroparticular" element={<RegistroParticular />} />
	  <Route path="/perfilempresa" element={<PerfilEmpresa />} />
	  <Route path="/registroempresa" element={<RegistroEmpresa />} />
	  <Route path="/registrorepartidor" element={<RegistroRepartidor />} />
	  <Route path="/areaclienteopinion" element={<AreaClienteOpinion />} />
	  <Route path="/debug" element={<Debug />} />
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

</div>
  );
}

export default App;
