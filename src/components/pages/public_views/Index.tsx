import React, { useCallback } from 'react';
import { NavLink as NavLinkRRD, useHistory } from 'react-router-dom';
import { Col, Container, NavLink, Row } from 'reactstrap';
import { Search } from 'shared/utils/interfaces';
import { Title } from 'shared/utils/constants';
import SearchForm from 'components/ui/common/SearchForm';

const Index = () => {
   const history = useHistory();

   const handleSearch = useCallback(
      (search: Search) => {
         const searchByFields = `&fields=${search.fields}`;
         history.push(`/public/search?q=${search.searchText}${ search.fields.length > 0 ? searchByFields : '' }`);
      },
      [history]
   );

   return (
      <>
         <Container>
            <Row className="session justify-content-end">
               <Col xl={2} md={3} xs={6}>
                  <NavLink
                   className="btn btn-light-primary btn-sm"
                   to="/auth"
                   tag={ NavLinkRRD }
                   id="login12">
                     <i className="bx bx-log-in"/>
                     <span className="nav__name">Iniciar Sesión</span>
                  </NavLink>
               </Col>
            </Row>
            <Row className="justify-content-center">
               <Col xl={8} md={8} xs={12}>
                  <h4 className ="text-index">{ Title }</h4>
                  <SearchForm onSubmit={ handleSearch }/>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default Index;