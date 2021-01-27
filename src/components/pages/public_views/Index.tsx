import React, { useState } from 'react';
import { NavLink as NavLinkRRD } from "react-router-dom";
import {
   Button,
   Card,
   CardBody,
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
import axios from 'axios';
import { DescriptiveRecord } from '../../../shared/utils/interfaces';
import Badge from '../../ui/common/Badge';

const Index = () => {
   const [searchBasic, setSearchBasic] = useState<string>('');
   const [descriptiveRecords, setDescriptiveRecords] = useState<DescriptiveRecord[]>([]);
   const url = 'http://34.229.223.42';


   const searchDescriptiveRecords = () => {
      setSearchBasic('Engine')
      if (searchBasic) {
         axios.get<DescriptiveRecord[]>(`${url}/v1/buscar/?search=${searchBasic}`)
            .then(response => {
               console.log();
               setDescriptiveRecords(response.data);
            })
            .catch(error => console.log(error));
      }
   };

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
                           <InputGroupText onClick={searchDescriptiveRecords}>
                              <i className="bx bx-search-alt pointer"/>
                           </InputGroupText>
                        </InputGroupAddon>
                        <Input
                         className="form-control-alternative"
                         placeholder="Search"
                         onKeyUp={searchDescriptiveRecords}
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
            {
               descriptiveRecords.map(resp => {
                  return <Row key={resp.id+resp.date} style={{marginTop: '40px'}}>
                     <Col xl={12} md={12} xs={12}>
                        <Card className="card-lift--hover shadow">
                           <CardBody>
                              <h4 className="h3 text-uppercase">
                                 {resp.dispositionTitle}
                              </h4>
                              <div>
                                 <Badge title="Disposición No:" value="2305"/>
                                 <Badge title="Tipo de Disposición:" value="Decreto"/>
                                 <Badge title="Lugar:" value={resp.place}/>
                                 <Badge title="Fecha:" value={resp.date}/>
                                 <Badge title="Vol:" value={resp.volume}/>
                                 <Badge title="Páginas:" value={resp.pageNumbers}/>
                              </div>
                              <p className="description mt-3">
                                 {resp.legislationTranscriptCopy}
                              </p>
                              <div>
                                 <a href={`${url}${resp.legislationTranscriptOriginal}`}>
                                    Ver Legislación Original
                                 </a>
                              </div>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row> 
               })
            }
         </Container>
      </>
   )
}

export default Index;