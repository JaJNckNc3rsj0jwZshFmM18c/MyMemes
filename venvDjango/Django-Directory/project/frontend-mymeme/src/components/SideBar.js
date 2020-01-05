import React, { Component } from 'react'
import "./mymeme.css"
import FollowersCircles from "./FollowersCircles.js"


export class SideBar extends Component {




  

  render() {
    const Subscription = () => { return alert("yo boy"); };



    const CirclesInMaking = () => {
            var circles = [];
            for (var i = 0; i < 3; i++)
            {

                circles.push(<FollowersCircles/>);


            }
          return circles;

  };
    return (

      
      <div className="sidebar">
        

        <div name="Applications" className="Links" >

     


        
        <div  onClick={Subscription}  className="material-icons" id="tooltip" >people
          <p className="tooltiptext">SUBSCRIPTION</p>
          </div>


          <div  id="tooltip" className="material-icons">trending_up
          <p className="tooltiptext">Trending</p>
          </div>

          <div  id="tooltip" className="material-icons">cloud_upload
          <p className="tooltiptext">Trending</p>
          </div>
          
       

          {CirclesInMaking()}

          
          

          </div>
      
      
      
          </div>
        
      
    )
  }
}

export default SideBar


