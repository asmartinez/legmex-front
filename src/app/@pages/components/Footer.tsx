import React from 'react';
import { Col, Row } from 'reactstrap';

const Footer = () => {
   return (
      <footer className='footer'>
         <Row className='align-items-center justify-content-xl-between'>
            <Col xl='6'>
               <div className='copyright text-center text-xl-left text-muted'>
                  © 2020 Biblioteca Daniel Cosío Villegas. El Colegio de México A.C.
               </div>
            </Col>
         </Row>
      </footer>
   )
}

export default Footer;