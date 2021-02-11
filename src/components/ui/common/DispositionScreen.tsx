import React from 'react';
import { Container } from 'reactstrap';
import PDFViewer from './pdf-viewer/PDFViewer';

const DispositionScreen = () => {
   const pathname = '/uploads/art%C3%ADculo_2o.pdf';
   return (
      <>
         <Container>
            <PDFViewer path={pathname}/>
         </Container>
      </>
   )
}

export default DispositionScreen;