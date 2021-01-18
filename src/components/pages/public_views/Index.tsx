import React from 'react';
import { NavLink as NavLinkRRD } from "react-router-dom";
import {
   Button,
   Col,
   Container,
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   NavLink,
   Row
} from 'reactstrap';

const Index = () => { 
   return (
      <>
         <Container>
            <Row className="session">
               <Col xl={10} md={9} xs={10}></Col>
               <Col xl={2} md={3} xs={6}>
                  <NavLink
                   className="btn btn-light-primary btn-sm"
                   to="/auth"
                   tag={NavLinkRRD}
                   id="login12">
                     <i className="bx bx-log-in"/>
                     <span className="nav__name">Iniciar Sesión</span>
                  </NavLink>
               </Col>
            </Row>
            <Row>
               <Col xl={2} md={2}></Col>
               <Col>
                  <h4 className ="text-index">
                     16,890 disposiciones numeradas, ordenadas cronológicamente, cuya cobertura va de 1687 a 1902. Dedica tres de sus volúmenes a Códigos, Ordenanzas y Reglamentos del Ejército y Armada de la República Mexicana.
                  </h4>
                  <FormGroup>
                     <InputGroup className="input-group-alternative mb-4">
                        <InputGroupAddon addonType="prepend">
                           <InputGroupText>
                              <i className="bx bx-search-alt pointer"/>
                           </InputGroupText>
                        </InputGroupAddon>
                        <Input
                         className="form-control-alternative"
                         placeholder="Search"
                         type="text"/>
                     </InputGroup>
                     
                  </FormGroup>
                  <div style={{marginTop: '-22px', textAlignLast: 'center'}}>
                     <Button
                      type="button"
                      className="btn btn-light-primary btn-sm">Búsqueda avanzada</Button>
                  </div>
               </Col>
               <Col xl={2} md={2}></Col>
            </Row>
         </Container>
      </>
   )
}

export default Index;