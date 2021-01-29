import React from 'react';
import moment from 'moment';

const FooterCard = () => {
   const year = moment().format('YYYY');

   return (
      <div className="footer-line footer-card">
         <a href="https://biblioteca.colmex.mx/" className="nav__footer">© {year} Biblioteca Daniel Cosío Villegas.</a><br/>
         <span className="span__footer">El Colegio de México A.C.</span><br/>
         <span className="span__footer">Carretera Picacho Ajusco No. 20.</span><br/>
         <span className="span__footer">Ampliación Fuentes del Pedregal.</span><br/>
         <span className="span__footer">Delegación Tlalpan C.P. 14110</span><br/>
         <span className="span__footer">Ciudad de México, México.</span>
      </div>
   )
}

export default FooterCard;