import React, { Component } from 'react'

export class AjaxPost extends Component {


  constructor(props)
  {
    super(props);

    

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
      
      <div >
       &nbsp;
       &nbsp;
       &nbsp;
       &nbsp;
       &nbsp;
       &nbsp;
       &nbsp;
       &nbsp;

     <div className="moving-everything">




                              <div className="Description">
                                    
                              <p>{this.props.Descriptionss} </p>
                              
                              </div>
                              
                                <div>
                                <img className = "Videoss" src={this.props.Picturess} alt="hello" ></img>
                                  <div className="comments-liking">
                                        <div className="sizing-comment">
                                        <div className="Profile-Videos"></div>
                                        <div className="Comment">Like</div>
                                        <div className="Likes"></div>
                                        <div className="unlike">unlike</div>
                                        <div className="Unlikes"></div>
                                        <div className="Like">com</div>
                                        <div className="Comments">  </div> 
                                        <div className="Line-4"></div>
                                  </div>
                                   

                                </div>
                              


                             
  
     </div>
      


       
      

        



     

      
     
      </div>

      </div>
    )
  }
}

export default AjaxPost








