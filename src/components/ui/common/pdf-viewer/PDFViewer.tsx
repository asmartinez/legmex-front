import React, { useEffect, useMemo, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Loader from 'components/ui/common/Loader';
import ControlViewer from 'components/ui/common/pdf-viewer/ControlViewer';
import { IPDFViewer } from 'shared/utils/interfaces';
import { documentService } from 'services';

const PDFViewer = (item: IPDFViewer) => {
   const [numPages, setNumPages] = useState(0);
   const [pageNumber, setPageNumber] = useState(1);
   const [scale, setScale] = useState(1.0);
   const [file, setFile] = useState<Blob>();
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const onDocumentLoadSuccess = ({ numPages }: any) => {
      setNumPages(numPages);
      setIsLoading(false);
   }

   useEffect(() => {
      fetch(documentService.getDocumentPDF(item.path))
      .then(response => response.blob())
      .then(blob => {
         setFile(blob)
         setIsLoading(false);
      });
   }, [item.path])

   return (
      <div className="d-flex flex-column align-items-center w-100" style={{marginTop: '10px'}}>
         {
            !isLoading &&
            (
               <>
                  <Document
                   file={file}
                   onLoadSuccess={onDocumentLoadSuccess} >
                     <Page pageNumber={pageNumber} scale={scale} width={500}/>
                  </Document>
                  <ControlViewer
                   scale={scale}
                   pageNumber={pageNumber}
                   numberPages={numPages}
                   setPageNumber={setPageNumber}
                   setScale={setScale}/>
               </>
            )
         }
      </div>
   )
}

export default React.memo(PDFViewer);