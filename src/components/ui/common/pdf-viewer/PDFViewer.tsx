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
   const [scale, setScale] = useState(0.75);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const onDocumentLoadSuccess = ({ numPages }: any) => {
      setNumPages(numPages);
      setIsLoading(false);
   }

   return (
      <div className="d-flex flex-column align-items-center w-100" style={{marginTop: '10px'}}>
         {/* isLoading && <Loader /> */}
         <Document
          file={{ url: descriptiveRecordService.getDocumentPDF(item.path), mode: 'no-cors'}}
          onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={scale} width={500}/>
         </Document>
         <ControlViewer
          scale={scale}
          pageNumber={pageNumber}
          numberPages={numPages}
          setPageNumber={setPageNumber}
          setScale={setScale}/>
      </div>
   )
}

export default React.memo(PDFViewer);