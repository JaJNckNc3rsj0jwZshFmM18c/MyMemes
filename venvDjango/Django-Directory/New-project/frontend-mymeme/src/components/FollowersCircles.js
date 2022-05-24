import React, { Component } from 'react'

export class FollowersCircles extends Component {

  
  constructor()
  {
    super();
    this.state = {
      backgroundColor: "rgba(185, 174, 174, 0)",
    }
  }
  render() {
    const Hover_OverFollowers= () => {      
      this.setState(
        {
          backgroundColor: "rgba(185, 174, 174, 0.596)",
        }
      )  
    };
    const  HoverLeave_OverFollowers = () =>
    {
      this.setState({
              backgroundColor: "rgba(185, 174, 174, 0)",
      })
    };
    const { backgroundColor} = this.state;
    return (
      <div>
        &nbsp;    
        <div style={{backgroundColor}} className="followers-hover">   
        <div onMouseLeave= {HoverLeave_OverFollowers} onMouseOver={Hover_OverFollowers} className="followers">
        </div>  
        </div>       
      </div>
    )
  }
}
export default FollowersCircles





