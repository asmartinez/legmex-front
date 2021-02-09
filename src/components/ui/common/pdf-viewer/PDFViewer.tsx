import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Loader from 'components/ui/common/Loader';
import ControlViewer from 'components/ui/common/pdf-viewer/ControlViewer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
   const pathname = '/uploads/mockup1.pdf';
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
          file={{ url: `${process.env.REACT_APP_API_URL}${pathname}`, mode: 'no-cors'}}
          onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber}/>
         </Document>
      </>
   )
}

export default PDFViewer;