import React, { Component } from 'react'
import "./mymeme.css"
import FollowersCircles from "./FollowersCircles.js"


export class SideBar extends Component {

constructor()
{

  super();

  this.state ={MoreFollowers:false, Icon: "expand_more", overflow: "hidden"   }




}


  

  render() {
    const Subscription = () => { return alert("yo boy"); };


    const MoreFollowers = () =>
    {

      this.setState(prevstate => {
        return {
                   MoreFollowers:!prevstate.MoreFollowers


    }

    


})
this.setState(

  {
    Icon:"expand_less",overflow:"hidden"
  }


  

)

if (this.state.MoreFollowers === false)
  {

    this.setState(

      {
        Icon:"expand_more",overflow:"scroll"
      }
    
    
      
    
    )

  }

    }; 

  

    const ShowingMoreFollowers = () =>
    {


      if (this.state.MoreFollowers === true)

      {
            var MoreCircles = [];
            for (var i = 0; i < 3; i++)
            {

              MoreCircles.push(<FollowersCircles/>)




            }

       }

        return MoreCircles

    };


    const CirclesInMaking = () => {
            var circles = [];
            for (var i = 0; i < 3; i++)
            {

                circles.push(<FollowersCircles/>);


            }

           

    




          return circles;

  };

  const { overflow } = this.state;
    return (

      
      
      <div className="sidebar">
        

        <div name="Applications" className="Links" >

     
     <hr className="Line-1" ></hr>

        
        <div  onClick={Subscription}  className="material-icons" id="tooltip" >people
          <p className="tooltiptext">SUBSCRIPTION</p>
          </div>


          <div  id="tooltip" className="material-icons">trending_up
          <p className="tooltiptext">Trending</p>
          </div>

          <div  id="tooltip" className="material-icons">cloud_upload
          <p className="tooltiptext">Trending</p>
          </div>
          

          <hr className="Line-2" ></hr>
       
         <div className="Scroll"  style={{overflow}} >

          {CirclesInMaking()}
          {ShowingMoreFollowers()}
          
        
          


         </div>
          

          <div  id="Click-more" onClick={MoreFollowers} className="material-icons"
>{this.state.Icon}
</div>
          
<hr className="Line-2" ></hr>

          </div>
          
      
      
      
          </div>
        
      
    )
  }
}

export default SideBar


