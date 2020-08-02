import React, {useCallback} from 'react'
import { useDropzone } from 'react-dropzone';

function UploadButton(props) {




  const onDrop = useCallback(acceptedFiles => {
   

    

    

    props.files(acceptedFiles[0])

    
    //props.files(acceptedFiles[0].name)
    console.log(props.files)
    
    
    
  }, [])





  
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({onDrop})
  
  


    



  

  const filess = acceptedFiles.map(file => (
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











  