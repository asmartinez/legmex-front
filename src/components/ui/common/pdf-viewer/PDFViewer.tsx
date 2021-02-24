import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Loader from 'components/ui/common/Loader';
import ControlViewer from 'components/ui/common/pdf-viewer/ControlViewer';
import { IPDFViewer } from 'shared/utils/interfaces';
import { descriptiveRecordService } from 'services';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = (item: IPDFViewer) => {
   const [numPages, setNumPages] = useState(0);
   const [pageNumber, setPageNumber] = useState(1);
   const [isLoading, setIsLoading] = useState(true);

   const onDocumentLoadSuccess = ({ numPages }: any) => {
      setNumPages(numPages);
      setIsLoading(false);
   }

   return (
      <div style={{marginTop: '10px'}}>
         {isLoading && <Loader /> }
         <Document
          file={{ url: descriptiveRecordService.getDocumentPDF(item.path), mode: 'no-cors'}}
          onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={1.0} width={500}/>
         </Document>
         <ControlViewer pageNumber={pageNumber} numberPages={numPages} setPageNumber={setPageNumber}/>
      </div>
   )
}

export default React.memo(PDFViewer);