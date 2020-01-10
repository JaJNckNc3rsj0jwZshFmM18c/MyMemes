import React, { Component } from 'react'

import online_profilePic from "online_profilePic.js"

export class MemePost extends Component {
  render() {
    return (
      <div>
        



          <div className="MakingPosts">
          
            <input placeholder=" What are you going to meme about?" className="writing "></input>


            

            <online_profilePic/>
            <div className="Gallery" ></div>
            <div className="gif"> 
            
            
            <p className="GIF-text">GIF</p>
            
            
            
            </div>
            <div className="Upload"></div>
            <div className="Send">  </div>


            
            
            
            
            
            
          
          
          
          </div>











      </div>
    )
  }
}

export default MemePost




