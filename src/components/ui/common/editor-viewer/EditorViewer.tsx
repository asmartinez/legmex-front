import React from 'react';
import { TextViewer } from 'shared/utils/interfaces';

const EditorViewer = (viewer: TextViewer) => {

   return (
      <div style={{marginTop: '10px'}}>
         {viewer.text}
      </div>
   )
}

export default React.memo(EditorViewer);