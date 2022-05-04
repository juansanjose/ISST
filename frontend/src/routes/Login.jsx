import * as React from 'react';
import {Button, Form} from 'react-bootstrap';
import { useContext } from 'react';
import {Link } from "react-router-dom";

export default function Login() {

  return (
    <div className="bg-light">
	<Form className="flex-column p-5 mx-auto col-md-5 text-center" method="post" action="/login">
	<p>
		<label for="username" class="sr-only">Username</label>
		<input type="text" id="username" name="username" class="form-control" placeholder="Username" required autofocus=""></input>
		</p>
		<p>
		<label for="password" class="sr-only">Password</label>
		<input type="password" id="password" name="password" class="form-control" placeholder="Password" required></input>
		</p>
		<input name="_csrf" type="hidden" value="61189a7e-169b-4886-8cb2-19d86efbce61"></input>
		<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

	</Form>
	</div>
  );
}