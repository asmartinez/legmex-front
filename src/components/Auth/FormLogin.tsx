import React, { useContext } from 'react';
import {
   Form,
   FormGroup,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Button
} from 'reactstrap';
import logo from 'assets/img/logooficial.svg';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'shared/context/AuthContext';
import { authenticationService } from 'shared/services/authentication.service';
import { useForm } from 'react-hook-form';
import SwalAlert from 'sweetalert2';

interface ILogin {
   email: string;
   password: string;
}

const FormLogin = () => {
   const history = useHistory();
   const { register, handleSubmit, errors } = useForm<ILogin>();
   
   const { dispatch } = useContext(AuthContext)

   const onSubmit = (event: ILogin) => {
      authenticationService.login(event.email, event.password).then(response => {
         SwalAlert.fire({
            position: 'center',
            icon: 'success',
            title: 'Credenciales Correctas',
            showConfirmButton: false
         });

         dispatch({
            type: 'login',
            payload: { ...response, logged: true }
         });

         history.replace('/admin')
      });
   }
   
   return (
      <Form role="form" className="form-auth sign-in-form" onSubmit={handleSubmit(onSubmit)}>
         <img src={logo} className="logo-session" alt="" />
         <h2 className="title">Iniciar sesión</h2>
         <FormGroup className="w-100 mb-3 m-width">
            <label className="form-control-label">Email</label>
            <InputGroup className="input-group-alternative">
               <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                     <i className="ni ni-email-83" />
                  </InputGroupText>
               </InputGroupAddon>
               <input
                type="email"
                className="form-control"
                placeholder="Ingrese el email"
                name="email"
                autoComplete="off"
                ref={
                  register({ required: true })
                }
               />
            </InputGroup>
            { errors.email && <div className="is-invalid-form">Correo requerido</div> }
         </FormGroup>
         <FormGroup className="w-100 mb-3 m-width">
            <label className="form-control-label">Contraseña</label>
               {/*
               <a
                className="text-jam"
                style={{
                  cursor: 'pointer',
                  fontSize: '18px',
                  float: 'right'
                }}
                id="forget-mode"
                onClick={handleForgetPassword}>
               <small>Se te olvidó tu contraseña</small>
               </a>*/}
            <InputGroup className="input-group-alternative">
               <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                     <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
               </InputGroupAddon>
               <input
                type="password"
                className="form-control"
                placeholder="Ingrese la contraseña"
                name="password"
                autoComplete="off"
                ref={
                  register({ required: true })
                }
               />
            </InputGroup>
            { errors.password && <div className="is-invalid-form">Contraseña requerida</div> }
         </FormGroup>
         <div className="text-center">
            <Button className="my-4" color="default" type='submit'>Ingresar</Button>
         </div>
      </Form>
   )
}

export default FormLogin;