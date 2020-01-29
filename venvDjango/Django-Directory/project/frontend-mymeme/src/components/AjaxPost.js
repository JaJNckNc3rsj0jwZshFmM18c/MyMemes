import React, { Component } from 'react'

export class AjaxPost extends Component {


  constructor(props)
  {
    super(props);



    this.state= {Data: '',}

    console.log(this.props.Descriptionss)


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

      <div>


     <div>

                              <div className="Description">
                                    
                              <p> {this.props.Descriptionss} </p>
      
      
      </div>               
      
                               <div className="sizing-comment">



     

                              <div className="Profile-Videos"></div>

                              <div className="Comment">Like</div>
                              <div className="Likes"></div>
                              <div className="unlike">unlike</div>
                              <div className="Unlikes"></div>
                              <div className="Like">com</div>
                              <div className="Comments"> {this.state.Data} </div> 


                              <div className="Line-4"></div>


                              </div>
  
     </div>
      


      <div className="Videoss">





     

      
      </div>
      </div>
    )
  }
}

export default AjaxPost








