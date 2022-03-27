import * as React from 'react';
import foto from '../assets/perfil.png'

export default function PerfilEmpresa() {

  return (
    <div>
		<div className="row">
			<img src={foto}  className="col-2" alt="reparto"/>
			<div className="col">
				<h3>DATOS PERSONALES</h3>
				<p>Nombre</p>
				<p>NIF</p>
				<p>E-mail</p>
				<p>Número de teléfono</p>
		</div>
	</div>
	</div>
  );
}