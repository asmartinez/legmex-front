import React from 'react';
import { IControlViewer } from 'shared/utils/interfaces';

const ControlViewer = (item: IControlViewer) => {
   const { pageNumber, numberPages, setPageNumber, setScale, scale } = item;
   const isFirstPage = pageNumber === 1;
   const isLastPage = pageNumber === numberPages;
   const isMinScale = scale <= 0.75;
   const isMaxScale = scale >= 2.0;

   const firstPageClass = isFirstPage ? 'c-disabled' : 'c-clickeable';
   const lastPageClass = isLastPage ? 'c-disabled' : 'c-clickeable';
   const zoomOutClass = isMinScale ? 'c-disabled' : 'c-clickeable';
   const zoomInClass = isMaxScale ? 'c-disabled' : 'c-clickeable';

   const goToPreviousPage = () => {
      if (!isFirstPage) setPageNumber(pageNumber - 1);
   }
   const goToNextPage = () => {
      if (!isLastPage) setPageNumber(pageNumber + 1);
   }

   const zoomOut = () => {
      if (!isMinScale) setScale(scale - 0.1)
   }

   const zoomIn = () => {
      if (!isMaxScale) setScale(scale + 0.1)
   }

   return (
      <>
         <div className="control-v-group justify-content-center m-3 d-flex align-items-baseline">
            <i className={`bx bx-zoom-out ${zoomOutClass}`} onClick={zoomOut}/>
            <i className={`bx bx-zoom-in ${zoomInClass}`} onClick={zoomIn}/>
            <span>Página Actual { pageNumber }</span>
            <span>({ pageNumber } / { numberPages })</span>
            <i className={`bx bx-up-arrow-circle ${firstPageClass}`} onClick={goToPreviousPage}/>
            <i className={`bx bx-down-arrow-circle ${lastPageClass}`} onClick={goToNextPage}/>
         </div>
      </>
   )
}

export default ControlViewer;