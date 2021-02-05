import React, { FormEvent, useState } from 'react';
import { NavLink as NavLinkRRD, useHistory } from 'react-router-dom';
import {
   Button,
   Col,
   Container,
   Form,
   FormGroup,
   Input,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   NavLink,
   Row
} from 'reactstrap';
import axios from 'axios';
import { DescriptiveRecord, Search } from '../../../shared/utils/interfaces';
import { useForm } from '../../../shared/hooks/useForm';
import CardSearch from '../../ui/common/CardSearch';
import FormSearch from '../../ui/common/FormSearch';

const Index = () => {
   const history = useHistory();
   const [descriptiveRecords, setDescriptiveRecords] = useState<DescriptiveRecord[]>([]);

   const { values, handleInputChange } = useForm<Search>({
      searchText: ''
   });

   const { searchText } = values;

   const handleSearch = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /*history.push(`?q=${searchText}`);
      axios.get<DescriptiveRecord[]>(`${process.env.REACT_APP_API_URL}/v1/search/?search=${searchText}`)
         .then(response => {
            setDescriptiveRecords(response.data);
         })
         .catch(error => console.log(error));*/
         console.log(event)
   }

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
                  <Form role="form" onSubmit={handleSearch}>
                     <FormGroup>
                        <InputGroup className="input-group-alternative mb-4">
                           <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                 <i className="bx bx-search-alt"/>
                              </InputGroupText>
                           </InputGroupAddon>
                           <Input
                            className="form-control-alternative"
                            placeholder="Search"
                            autoComplete="off"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                            type="text"/>
                           <Button
                            type="submit"
                            className="btn btn-light-primary btn-sm"
                            disabled={ !searchText || searchText.length < 3}>
                              Buscar
                           </Button>
                        </InputGroup>    
                     </FormGroup>
                     <div style={{marginTop: '-22px', textAlignLast: 'center'}}>
                        <Button
                         type="button"
                         className="btn btn-light-primary btn-sm">
                           Búsqueda avanzada
                        </Button>
                     </div>
                  </Form>
                  <FormSearch handleSearch={handleSearch}></FormSearch>
               </Col>
               <Col xl={2} md={2}></Col>
            </Row>
            {
               descriptiveRecords.map(descriptiveRecord => {
                  return <CardSearch
                           key={ descriptiveRecord.id + descriptiveRecord.date } 
                           id={ descriptiveRecord.id }
                           dispositionTitle={ descriptiveRecord.dispositionTitle }
                           date={ descriptiveRecord.date }
                           volume= { descriptiveRecord.volume }
                           pageNumbers={ descriptiveRecord.pageNumbers }
                           legislationTranscriptOriginal={ descriptiveRecord.legislationTranscriptOriginal }
                           legislationTranscriptCopy={ descriptiveRecord.legislationTranscriptCopy }
                           place={ descriptiveRecord.place }
                           dispositionTypeId={ descriptiveRecord.dispositionTypeId }
                           affairId={ descriptiveRecord.affairId }/>
               })
            }
         </Container>
      </>
   )
}

export default Index;