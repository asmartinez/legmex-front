import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Loader from '../Loader';
import ControlViewer from './ControlViewer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
   const [numPages, setNumPages] = useState(0);
   const [pageNumber, setPageNumber] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   const onDocumentLoadSuccess = ({ numPages }: any) => {
      setNumPages(numPages);
      setIsLoading(false);
   }

   return (
      <>
         {isLoading && <Loader /> }
         <ControlViewer pageNumber={pageNumber} numberPages={numPages}/>
         <Document
          file={{ url: 'https://www.apicolegioelastic.live/uploads/mockup1.pdf', mode: 'no-cors'}}
          onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
         </Document>
      </>
   )
}

export default PDFViewer;