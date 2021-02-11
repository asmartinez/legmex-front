import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Loader from 'components/ui/common/Loader';
import ControlViewer from 'components/ui/common/pdf-viewer/ControlViewer';
import { IPDFViewer } from 'shared/utils/interfaces';
import { Button, Card, Col, Row } from 'reactstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const style = {
   height: '64px',
   width: '610px',
   top: '-12px'
}

const PDFViewer = (item: IPDFViewer) => {
   const [numPages, setNumPages] = useState(0);
   const [pageNumber, setPageNumber] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   const onDocumentLoadSuccess = ({ numPages }: any) => {
      setNumPages(numPages);
      setIsLoading(false);
   }

   const next = () => {
      setPageNumber(pageNumber + 1);
   }

   const prev = () => {
      setPageNumber(pageNumber - 1);
   }

   return (
      <>
         {isLoading && <Loader /> }
         {/*<ControlViewer pageNumber={pageNumber} numberPages={numPages} setPageNumber={setPageNumber}/>*/}
         <Card className="border-0" style={style}>
            <Row className="justify-content-center m-3">
               <Col xl={12} md={12} xs={12}>
                  <Button className="btn-icon btn-2" color="primary" type="button" size="sm" onClick={prev}>
                     <span className="btn-inner--icon">
                        <i className="bx bx-chevron-left" />
                     </span>
                  </Button>
                  <Button className="btn-icon btn-2" color="primary" type="button" size="sm" onClick={next}>
                     <span className="btn-inner--icon">
                        <i className="bx bx-chevron-right" />
                     </span>
                  </Button>
                  <p>Página { pageNumber } de { numPages }</p>
               </Col>
            </Row>
         </Card>
         <Document
          file={{ url: `${process.env.REACT_APP_API_URL}${item.path}`, mode: 'no-cors'}}
          onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
         </Document>
      </>
   )
}

export default PDFViewer;