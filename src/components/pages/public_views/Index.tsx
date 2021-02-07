import React, { useCallback, useState } from 'react';
import { NavLink as NavLinkRRD, useHistory } from 'react-router-dom';
import { Col, Container, NavLink, Row } from 'reactstrap';
import axios from 'axios';
import { DescriptiveRecord, Search } from 'shared/utils/interfaces';
import CardSearch from 'components/ui/common/CardSearch';
import SearchForm from 'components/ui/common/SearchForm';
const Index = () => {
   const history = useHistory();
   const [descriptiveRecords, setDescriptiveRecords] = useState<DescriptiveRecord[]>([]);

   const handleSearch = useCallback(
      ({ searchText }: Search) => {
         history.push(`?q=${searchText}`);
         axios.get<DescriptiveRecord[]>(`${process.env.REACT_APP_API_URL}/v1/search/?search=${searchText}`)
         .then(response => {
            setDescriptiveRecords(response.data);
         })
         .catch(error => console.log(error));
      },
      [history]
   )

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
                  <SearchForm onSubmit={handleSearch}/>
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