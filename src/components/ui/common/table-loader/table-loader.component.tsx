import React from 'react';
import './table.loader.component.css';

const tableSkeleton = [1,1,1,1,1,1];
const tdSkeleton = [1,1];

const TableLoaderComponent = () => {
   return (
      <>
         {
            tableSkeleton.map((tableSln, indexTr) => {
               return <tr key={indexTr}>
                        {
                           tdSkeleton.map((tdSln, indexTd) => {
                              return <td className="table-loader" key={indexTd}>
                                       <div className="line-loader"></div>{/**  *ngFor="let tdSln of tdSkeleton" */}
                                    </td>
                           })
                        } 
                     </tr>
            })
         } 
      </>
   )
}

export default TableLoaderComponent;