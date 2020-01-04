import React, { Component } from 'react'
import "./mymeme.css"


export class SideBar extends Component {



  render() {
    return (
      <div className="sidebar">
        

        <div name="Applications" className="Links" >




        
        <div  className="tooltip" >click here
          <p className="tooltiptext">Subscribers</p>
          </div>


          <div  id="tooltip" className="material-icons">trending_up
          <p className="tooltiptext">Trending</p>
          </div>

          <div  id="tooltip" className="material-icons">cloud_upload
          <p className="tooltiptext">Trending</p>
          </div>




          <div className="followers"></div>
          
          </div>
      
      
      
          </div>
        
      
    )
  }
}

export default SideBar


