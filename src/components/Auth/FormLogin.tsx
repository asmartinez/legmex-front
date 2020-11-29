import React, { useState } from 'react';
import {
   Form,
   FormGroup,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Input,
   Button
} from 'reactstrap';
import logo from '../../assets/img/logooficial.svg';
import { initialState } from '../../shared/utils/constants';
import { useAuth } from '../../shared/context/AuthContext';

const FormLogin = () => {
   
   const [loginError, setLoginError] = useState();
   const [emailError, setEmailError] = useState();
   const [passwordError, setPasswordError] = useState();

   const login = (e: any) => {
      e.preventDefault();
   }
   
   return (
      <>
         <Form role="form" className="sign-in-form">
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
                  <Input placeholder="Ingrese el email" type="email"/>
               </InputGroup>
            </FormGroup>
            <FormGroup className="w-100 mb-3 m-width">
               <label className="form-control-label">Contraseña</label>
               <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                     </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Ingrese la contraseña" type="password"/>
               </InputGroup>
            </FormGroup>
            {/*<Button className="my-4" color="secondary" type="button" id="forget-mode">
               Se te olvidó tu contraseña
            </Button>*/}
            <div className="text-center">
               <Button className="my-4" color="default" type="button">
                  Ingresar
               </Button>
            </div>
         </Form>
      </>
   )
}

export default FormLogin;