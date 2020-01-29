import React from 'react';
import {useDropzone} from 'react-dropzone';

function UploadButton(props) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      
        
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />

        {/*   https://react-dropzone.netlify.com/*/ }
      
        <button className="Gallery" type="button" onClick={open}>
          Gallery
        </button>
      </div>
    
      <aside>
       
        
      </aside>


      </div>
    
  );
}


export default UploadButton











  