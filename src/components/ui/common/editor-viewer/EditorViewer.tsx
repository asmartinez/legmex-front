import React, { useEffect, useRef, useState } from 'react';
import { TextViewer } from 'shared/utils/interfaces';
import Blockquote, { IBlockquote } from '../blockquote/blockquote.component';

const EditorViewer = (viewer: TextViewer) => {
   const [blockq, setBlockq] = useState<IBlockquote>({
      paragraph: '',
      title: ''
   });
   const [existElement, setExistElement] = useState<boolean>(false);

   const selectedRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      selectedRef.current?.addEventListener('mouseup', selectableTextAreaMouseUp);

      function selectableTextAreaMouseUp(_event: any) {
         const selectedText = window.getSelection()?.toString().trim();
         if (selectedText && selectedText.length > 0) {
            setBlockq({ paragraph: selectedText, title: 'anonimo' });
            setExistElement(true);
         }
      }
   }, [selectedRef.current])

   return (
      <>
         <div style={{marginTop: '10px'}} ref={selectedRef}>
            {viewer.text}
         </div>
         { existElement && <Blockquote paragraph={blockq.paragraph} title={blockq.title} /> }
      </>
   )
}

export default React.memo(EditorViewer);