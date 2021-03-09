import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';

const configureEditor: any = {
   readonly: false,
   toolbar: true,
   height: 400,
   allowResizeX: false,
   allowResizeY: false,
   statusbar: false,
   language: 'es',
   removeButtons: [
      'source',
      'fullsize',
      'dots',
      'copyformat',
      'image',
      'link',
      'eraser',
      'undo',
      'redo'
   ]
}

const Editor = ({ value, onChange }: any) => {
   const editor = useRef(null);
   return (
      <JoditEditor
       ref={editor}
       value={value}
       config={configureEditor}
       onChange={onChange}/>
   )
}

export default Editor