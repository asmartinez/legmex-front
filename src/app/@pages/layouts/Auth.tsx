import React, { useEffect } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import FormLogin from '../../components/FormLogin';
import logo from '../../../assets/img/logooficial.svg';

const Auth = (props: any) => {
   useEffect( () => {
      document.body.classList.add("bg-default");

      return () => {
         document.body.classList.remove("bg-default");
      }
   }, []);

   return (
      <>
         <div className='main-content'>
            <Navbar
             className="navbar-top navbar-horizontal navbar-dark"
             expand="md">
               <Container className="px-4">
                  <img alt="..." src={logo} width="30%"/>
               </Container>
            </Navbar>
            <div className="header bg-gradient-info py-7 py-lg-8">
               <Container>
                  <div className="header-body text-center mb-7">
                  <Row className="justify-content-center">
                     <Col lg="5" md="6">
                     <h1 className="text-jam">Bienvenido!</h1>
                     <p className="text-lead text-midnight">
                        Un servicio de la Biblioteca Daniel Cosío Villegas - El Colegio de México.
                     </p>
                     </Col>
                  </Row>
               </div>
               </Container>
               <div className="separator separator-bottom separator-skew zindex-100">
                  <svg
                   xmlns="http://www.w3.org/2000/svg"
                   preserveAspectRatio="none"
                   version="1.1"
                   viewBox="0 0 2560 100"
                   x="0"
                   y="0">
                     <polygon className="fill-default" points="2560 0 2560 100 0 100"/>
                  </svg>
               </div>
            </div>
            <Container className="mt--8 pb-5">
               <Row className="justify-content-center">
                  <FormLogin />
               </Row>
            </Container>
         </div>
      </>
   )
}

export default Auth;