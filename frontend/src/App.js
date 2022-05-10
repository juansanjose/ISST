import * as React from 'react';
import  { Component } from "react";
import {  Route, Link } from "react-router-dom";

import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './assets/logo.png';
import { Routes } from "react-router-dom";
import AreaCliente from './routes/AreaCliente.jsx';
import AreaRepartidor from './routes/AreaRepartidor.jsx';
import AreaGestor from './routes/AreaGestor.jsx';
import SeguimientoCliente from './routes/SeguimientoCliente.jsx';
import PerfilParticular from './routes/PerfilParticular.jsx';
import PerfilRepartidor from './routes/PerfilRepartidor.jsx';
import PerfilEmpresa from './routes/PerfilEmpresa.jsx';

import AreaRepartidorConfirmar from  './routes/AreaRepartidorConfirmar.jsx';
import AreaRepartidorFinalizar from  './routes/AreaRepartidorFinalizar.jsx';
import RutaRepartidor from './routes/RutaRepartidor.jsx';
import Debug from './routes/Debug.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./routes/Home.js";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import EventBus from "./common/EventBus";

class App extends Component {
	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
	
		this.state = {
		  showModeratorBoard: false,
		  showAdminBoard: false,
		  currentUser: undefined,
		};
	  }
	
	  componentDidMount() {
		const user = AuthService.getCurrentUser();
	
		if (user) {
		  this.setState({
			currentUser: user,
			showModeratorBoard: user.roles.includes("ROLE_REPARTIDOR"),
			showAdminBoard: user.roles.includes("ROLE_ADMIN"),
		  });
		}
		
		EventBus.on("logout", () => {
		  this.logOut();
		});
	  }
	
	  componentWillUnmount() {
		EventBus.remove("logout");
	  }
	
	  logOut() {
		AuthService.logout();
		this.setState({
		  showModeratorBoard: false,
		  showAdminBoard: false,
		  currentUser: undefined,
		});
	  }
    
	
	  render() {
		const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
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
			{showAdminBoard ?( <>
        <Nav.Link as={Link} to="/areagestor">areagestor</Nav.Link>
        
      </>):(<>
      </>

      )}
        { currentUser && !showModeratorBoard && !showAdminBoard ?(
          <>
      <Nav.Link as={Link} to="/areacliente">arecliente</Nav.Link>
      
      
      </>):(<>
      
      </>)
        }
      {
        showModeratorBoard ? (<>
        <Nav.Link as={Link} to="/arearepartidor">arearepartidor</Nav.Link>
        
        </>
        ):(
          <>
          </>
        )

      }
      
      


      {currentUser ? (
            <>
                <Nav.Link as={Link} to="/profile" className="nav-link">
                  {currentUser.username}
                </Nav.Link>
              
              
              <Nav.Link  as={Link} to="/login" className="nav-link" onClick={this.logOut}>
                LogOut
                </Nav.Link>
              </>  
                
              
            
          ) : (
            <div>
              
                <Nav.Link as={Link}  to="/login" className="nav-link">
                  Login
                </Nav.Link>
             

             
                <Nav.Link as={Link}  to="/register" className="nav-link">
                  Sign Up
                </Nav.Link>
              
            </div>
          )}

		  </Nav>
		</Navbar.Collapse>
		</Container>
	</Navbar>

	<Routes>
	  <Route path="/areacliente" element={<AreaCliente />} />
	  <Route path="/areagestor" element={<AreaGestor />} />
	  <Route path="/arearepartidor" element={<AreaRepartidor />} />
	  <Route path="/arearepartidorconfirmar" element={<AreaRepartidorConfirmar />} />
	  <Route path="/arearepartidorfinalizar" element={<AreaRepartidorFinalizar />} />
	  <Route path="/seguimientocliente/:id" element={<SeguimientoCliente />} />
	  <Route path="/perfilrepartidor" element={<PerfilRepartidor />} />
	  <Route path="/perfilparticular" element={<PerfilParticular />} />
	  <Route path="/perfilempresa" element={<PerfilEmpresa />} />
	  <Route path="/rutarepartidor/:id" element={<RutaRepartidor />} />
	  <Route path="/"  element={<Home/>} />
   
    <Route  path="/profile" element={<Profile/>} />
    <Route path="/user" element={<BoardUser/>} />
    <Route path="/mod" element={BoardModerator} />  
    <Route path="/admin" element={BoardAdmin} />
    <Route path="/login" element={<Login/> } />
    <Route path="/register" element={<Register/>} />

	  <Route path="/debug" element={<Debug />} />
    </Routes>
      
    
	{/*Rutas*/}
	{/*Footer*/}

 
  
{/*Footer fin*/}

</div>
  );
}
}
export default App;
