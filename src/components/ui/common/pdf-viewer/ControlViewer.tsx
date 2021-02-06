import React from 'react';
import { IControlViewer } from '../../../../shared/utils/interfaces';

const ControlViewer = (item: IControlViewer) => {
   const { pageNumber, numberPages } = item;
   return (
      <>
         <p>Página { pageNumber } de { numberPages }</p>
      </>
   )
}

export default ControlViewer;