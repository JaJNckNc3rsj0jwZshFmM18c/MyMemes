import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone';

function UploadButton(props) {




  const onDrop = useCallback(acceptedFiles => {
   

    
    {props.Files_pictures(acceptedFiles[0])}
    
  }, [])





  /*const onDrop = useCallback(acceptedFiles => {
   
    acceptedFiles.forEach(file => {
      const fr = new FileReader()
      fr.onload = () => {
        

        {props.Files_pictures(fr.result)}
      }
      fr.readAsArrayBuffer(file)
    })
    
  }, [])*/

  

  /*const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true, onDrop,
  });*/

  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({onDrop})
  
  


    



  

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      
      
      
    </li>

      
  
  ))

   
  


 
 




  return(

      <div>
      
        
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />

        {/*   https://react-dropzone.netlify.com/*/ }
      



         
        <button className="Gallery" type="button" onClick={open }>
          Gallery
        </button>

          
      </div>
    
      <aside>
       
        
      </aside>


      </div>


    );
    
    
  
}


export default UploadButton











  