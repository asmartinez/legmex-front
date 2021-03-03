import React from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { handleForgetPassword } from 'shared/utils/forgetPasswordFunction';


const ForgetPassword = () => {
   return (
      <>
         <Form role="form" className="form-auth forget-password-form">
            <h2 className="title">Contraseña olvidada ?</h2>
            <p className="text-muted font-weight-bold font-size-h4">
               Ingrese su correo electrónico para restablecer su contraseña
            </p>
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
            <div className="text-center">
               <Button className="my-4" color="default" type="button">
                  Enviar
               </Button>
               <Button className="my-4" color="secundary" type="button" onClick={handleForgetPassword}>
                  Cancelar
               </Button>
            </div>
         </Form>
      </>
   )
}

export default ForgetPassword;