import React from 'react';  
import {
   Button,
   Col,
   Container,
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Row
} from 'reactstrap';

const Index = () => { 
   return (
      <>
         <Container>
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