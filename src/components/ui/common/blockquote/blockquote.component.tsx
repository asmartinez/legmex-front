import React from 'react';
import './blockquote.component.css';

export interface IBlockquote {
   paragraph: string;
   title: string;
}

const Blockquote = (prop: IBlockquote) => {
   return (
      <>
         <div className="animated-border-quote">
            <blockquote>
               <p>{ prop.paragraph }</p>
               <cite>{ prop.title }</cite>
            </blockquote>
         </div>
      </>
   )
}

export default Blockquote;