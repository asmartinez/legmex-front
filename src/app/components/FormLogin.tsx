import React from 'react';
import {
   Card,
   Col,
   CardBody,
   Form,
   FormGroup,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Input,
   Button
} from 'reactstrap';

const FormLogin = () => {
   return (
      <>
         <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
               <CardBody className="px-lg-5 py-lg-5">
               <h2 className="text-jam text-center">Iniciar sesión</h2>
                  <Form role="form">
                     <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                           <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                 <i className="ni ni-email-83" />
                              </InputGroupText>
                           </InputGroupAddon>
                           <Input placeholder="Email" type="email" autoComplete="new-email"/>
                        </InputGroup>
                     </FormGroup>
                     <FormGroup>
                        <InputGroup className="input-group-alternative">
                           <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                 <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                           </InputGroupAddon>
                           <Input placeholder="Contraseña" type="password" autoComplete="new-password"/>
                        </InputGroup>
                     </FormGroup>
                     <div className="text-center">
                        <Button className="my-4" color="default" type="button">
                           Ingresar
                        </Button>
                     </div>
                  </Form>
               </CardBody>
            </Card>
         </Col>
      </>
   )
}

export default FormLogin;