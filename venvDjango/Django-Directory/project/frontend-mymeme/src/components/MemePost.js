import React, { Component } from 'react'



export class MemePost extends Component {

  constructor()
  {
    super();



    this.state= {Post_Value: '',}

    


  }

  Post_TOAPI = fetch('http://127.0.0.1:8000/api/lead/', 
  
  {


   
    method: 'POST',
    headers: {'Content-Type': 'application/json'},

    body: JSON.stringify({descriptions: this.State.Post_Value, }) 



  });

  Change_PostValue = (event) =>

  {


    this.setState({Post_Value: event.target.value})
    
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
            <div className="Gallery" >Gallery</div>
            <div className="gif"> 
            
            
            <p className="GIF-text">GIF</p>
            
            
            
            </div>
            <div className="Upload">Upload</div>
            {/*<div className="Send"> Send </div>*/}


            
            
            
            
            
            
          
          
          
          </div>











      </div>
    )
  }
}

export default MemePost




