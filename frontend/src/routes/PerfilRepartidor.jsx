import * as React from 'react';
import foto from '../assets/perfil.png'

export default function PerfilRepartidor() {

  return (
    <div className="row">
		<img src={foto}  className="col-2" alt="reparto"/>
		<div className="col">
			<h3>DATOS PERSONALES</h3>
			<p>Nombre y Apellidos</p>
			<p>Fecha de nacimiento</p>
			<p>DNI</p>
			<p>E-mail</p>
			<p>Número de teléfono</p>
			<p>ID Vehículo</p>
		</div>
	</div>
  );
}