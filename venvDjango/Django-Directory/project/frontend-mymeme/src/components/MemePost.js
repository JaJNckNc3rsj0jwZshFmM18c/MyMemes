import React, { Component } from 'react'

import MemeVideos, {GET_TOAPI} from "./MemeVideos.js"
import AjaxPost from  "./AjaxPost.js"
import UploadButton from  "./UploadButton"
import Tenor_Gif from "./Tenor_Gif.js"



export class MemePost extends Component {

  constructor()
  {
    super();

    

    this.state= {Post_Value: '', Descriptions: '', display: '', Sent: false, picture: null,Pictures: null, Personal_Ajax:[],Gifs: null, }

 


  }

  

  


  
  Post_TOAPI = (event) => 
  {
  

    event.preventDefault()
    
    const formData = new FormData();
   
    formData.append('Pictures_file', this.state.Pictures, );
    formData.append('descriptions', this.state.Post_Value );
    
    
   
  
    /*
    const req = new XMLHttpRequest();

    
    req.open("POST", "http://localhost:8000/api/pictures");
    req.send(formData);
    */
 




  fetch('http://127.0.0.1:8000/api/pictures/', 
  
  {


   
    method: 'POST',
    

    body: formData,



  }).then((response) => {


    return response.json()
  }) .then((myJson) => {


   
   
                

           

   
    this.setState({Descriptions: myJson.descriptions, picture: myJson.Pictures_file , display: "block", Sent: true} )
 
    

   

    
   

  });   
  
  
  
}



  

    

  Change_PostValue = (event) =>

  {


    this.setState({Post_Value: event.target.value})
    

    
    
  }


 Post_pic = (picture) => {





    
    this.setState({Pictures: picture})
    console.log("PICTFGUdf")

    

   
    
  
}

Ajax_Posts_True = () =>
{
  
  
this.state.Personal_Ajax.push(<AjaxPost style={{display: "block" }} Descriptionss = {this.state.Descriptions} Picturess = {this.state.picture} /> )

this.setState({Sent: false,})


}
Ajax_Posts_False = () =>
{

console.log (this.state.Personal_Ajax)
return this.state.Personal_Ajax


         



}


Gifs_1 = () =>
{

  this.setState({Gifs: <Tenor_Gif  Files_Gif= {this.Post_pic}/> })
  




}

  render() {
    console.log(this.state.Sent )
    return (
      <div>
         

        {this.state.Sent ? this.Ajax_Posts_True():  <ul>
    {this.state.Personal_Ajax.map(function(item) {
      return <li className = "spacings" key={item}>{item}</li>;
    })}
  </ul>}
            
          <div className="MakingPosts">
          

         
          

            <form onSubmit={this.Post_TOAPI}>

                   <input type="text" onChange={this.Change_PostValue} value={this.state.Post_Value} placeholder=" What are you going to meme about?" className="writing "></input>

                      <UploadButton Files_pictures= {this.Post_pic} />
                  <input className="Send" type="submit" value="Submit" />
            </form>
           


            

             <div className="profile-Pic"></div>
         
            <button onClick={this.Gifs_1} className="gif"> 
        
            
            
            <p className="GIF-text">GIF</p>
            
            
            
            </button>
            <div className="Upload">Upload</div>
            {/*<div className="Send"> Send </div>*/}
            
           
           
            

            
            
            
            
            
            
          
          
          
          </div>


         
        {this.state.Gifs}
              
           

         
       





      </div>
    )
  }
}

export default MemePost




