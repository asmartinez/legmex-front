import React from 'react';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import { IControlViewer } from 'shared/utils/interfaces';

const style = {
   height: '64px'
}

const ControlViewer = (item: IControlViewer) => {
   const { pageNumber, numberPages, setPageNumber } = item;
   const isFirstPage = pageNumber === 1;
   const isLastPage = pageNumber === numberPages;
   const goToFirstPage = () => {
      if (!isFirstPage) setPageNumber(1);
   }
   const goToPreviousPage = () => {
      if (!isFirstPage) setPageNumber(pageNumber - 1);
   }
   const goToNextPage = () => {
      if (!isLastPage) setPageNumber(pageNumber + 1);
   }
   const goToLastPage = () => {
      if (!isLastPage) setPageNumber(numberPages);
   }

   return (
      <>
         <Card style={style}>
            <CardBody>
               <div className="justify-content-center m-3 d-flex align-items-baseline">
                  <i className="bx bx-chevrons-left" onClick={goToFirstPage}/>
                  <i className="bx bx-chevron-left" onClick={goToPreviousPage}/>
                  <i className="bx bx-chevron-right"onClick={goToNextPage}/>
                  <i className="bx bx-chevrons-right"onClick={goToLastPage}/>
                  <span>Página Actual { pageNumber }</span>
                  <span>({ pageNumber } / { numberPages })</span>
               </div>
            </CardBody>
         </Card>
      </>
   )
}

export default ControlViewer;