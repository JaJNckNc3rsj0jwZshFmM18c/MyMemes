import React, { Component } from 'react'

export class MemeVideos extends Component {




  constructor()
  {
    super();



    this.state= {Data: '',}

    


  }


  /*DATAFunction = data => {
    this.setstate({ Data: data });
  };



  GET_TOAPI = () => {
    fetch("http://127.0.0.1:8000/api/lead/")
      .then(response => response.json())
      .then(this.DATAFunction)
      .catch();
  };*/

  render() {
    return (
      <div className="Videoss">





      <div className="Description">
      
      <p>{this.props.Descriptions}</p>
      
      </div>

      <div className="Profile-Videos"></div>

      <div className="Comment">Like</div>
      <div className="Likes"></div>
      <div className="unlike">unlike</div>
      <div className="Unlikes"></div>
      <div className="Like">com</div>
      <div className="Comments"> {this.state.Data} </div> 


      <div className="Line-4"></div>
        
      </div>
    )
  }
}

export default MemeVideos





