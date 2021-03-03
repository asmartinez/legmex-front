import React from 'react';
import './table.loader.component.css';

interface IRow {
   rowNumber: number,
   colNumber: number
}

interface IColumn {
   colNumber: number
}

interface ITableLoader extends IColumn, IRow {}

const Column = ({ colNumber }: IColumn) => {
   const columns = [];

   for (let indexCol = 0; indexCol < colNumber; indexCol++) {
      columns.push(
         <td className="table-loader" key={ indexCol }>
            <div className="line-loader"></div>
         </td>
      );
   }

   return (
      <>
         { columns.map(col => col) }
      </>
   );
};

const Row = ({ rowNumber, colNumber }: IRow) => {
   const rows = [];

   for (let indexRow = 0; indexRow < rowNumber; indexRow++) {
      rows.push(
         <tr key={indexRow}>
            <Column colNumber={ colNumber }/>
         </tr>
      );
   }

   return (
      <>
         {
            rows.map(row =>  row)
         }
      </>
   );
};

const TableLoaderComponent = ({ rowNumber, colNumber }: ITableLoader) => {
   return (
      <>
         <Row rowNumber={ rowNumber } colNumber={ colNumber }/>
      </>
   )
}

export default TableLoaderComponent;