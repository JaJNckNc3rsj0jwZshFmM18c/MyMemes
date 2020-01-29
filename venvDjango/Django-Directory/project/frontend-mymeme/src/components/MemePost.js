import React, { Component } from 'react'

import MemeVideos, {GET_TOAPI} from "./MemeVideos.js"
import AjaxPost from  "./AjaxPost.js"
import UploadButton from  "./UploadButton"



export class MemePost extends Component {

  constructor()
  {
    super();



    this.state= {Post_Value: '', Descriptions: '', display: '', Sent: false,  }

    


  }





  
  Post_TOAPI = (event) => 
  {
  

    event.preventDefault()
    
   
  
  fetch('http://127.0.0.1:8000/api/lead/', 
  
  {


   
    method: 'POST',
    headers: {'Content-Type': 'application/json'},

    body: JSON.stringify({descriptions: this.state.Post_Value, }),



  }).then((response) => {


    return response.json()
  }) .then((myJson) => {


   

    

    this.setState({Descriptions: myJson , display: "block", Sent: true} )
   

    

    
   

  });
  
  
}



  Posting = () =>
  {


    const { display } = this.state;

    if (this.state.Sent == true)
    {


     var Aj = <AjaxPost style={{display}} Descriptionss =  {this.state.Descriptions.descriptions} />



    }

    return Aj;
  }

  Change_PostValue = (event) =>

  {


    this.setState({Post_Value: event.target.value})
    console.log(this.state.Post_Value)

    
    
  }




  render() {
    

    return (
      <div>
        



          <div className="MakingPosts">
          


            <form onSubmit={this.Post_TOAPI}>

                   <input type="text" onChange={this.Change_PostValue} value={this.state.Post_Value} placeholder=" What are you going to meme about?" className="writing "></input>


                  <input className="Send" type="submit" value="Submit" />
            </form>
           


            

             <div className="profile-Pic"></div>
             <UploadButton/>
            <div className="gif"> 
            
            
            <p className="GIF-text">GIF</p>
            
            
            
            </div>
            <div className="Upload">Upload</div>
            {/*<div className="Send"> Send </div>*/}
            
           
            
            

            
            {this.Posting()}
            
            
            
            
          
          
          
          </div>











      </div>
    )
  }
}

export default MemePost




