import React, { Component } from 'react'
import './mymeme.css'

export class Navbar extends Component {
  render() {
    return (
     
        <nav>


          
          <div  className= 'navbarCss'>
          
          
          <p className="icon">icon</p>
          

     
          <input className="SearchName">
          
          
     
          
          
          </input>
          <a href="www.facebook.com" id="Moving-Search" className="material-icons" > search</a>


   
          
   
   <div className="line-6"></div>
   
   <div  className = "profilePic">


      <p className="id-title">MemsterkIng69</p>
      
      <div className="online"></div>

  </div>
      

          
          
          
          </div>
          </nav>
     
    )
  }
}

export default Navbar

