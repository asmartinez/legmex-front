import React from 'react';
import { Container } from 'reactstrap';
import PDFViewer from './pdf-viewer/PDFViewer';

const DispositionScreen = () => {
   return (
      <>
         <Container>
            <PDFViewer/>
         </Container>
      </>
   )
}

export default DispositionScreen;