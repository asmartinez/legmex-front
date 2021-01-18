import React from 'react';
import moment from 'moment';

const FooterLine = () => {
   const year = moment().format('YYYY');

   return (
      <div className="footer-line">
         <a href="https://biblioteca.colmex.mx/" className="nav__footer">© {year} Biblioteca Daniel Cosío Villegas.</a>
         <br/>
         <span className="span__footer">El Colegio de México A.C.</span>
      </div>
   )
}

export default FooterLine;