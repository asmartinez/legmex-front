import React from 'react';
import { Container } from 'reactstrap';
import PDFViewer from './pdf-viewer/PDFViewer';

const DispositionScreen = () => {
   const pathname = '/uploads/mockup1.pdf';
   return (
      <>
         <Container>
            <PDFViewer path={pathname}/>
         </Container>
      </>
   )
}

export default DispositionScreen;