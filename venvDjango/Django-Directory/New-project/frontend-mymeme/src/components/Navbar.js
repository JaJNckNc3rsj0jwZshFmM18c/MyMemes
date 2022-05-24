import React, { Component } from 'react'
import './css/mymeme.css'
import { withRouter } from 'react-router-dom';


export class Navbar extends Component {
  constructor(props)
  {
    super(props);
    this.state = {pfpic: null,}
  }
  componentDidMount() 
  {
    if(localStorage.getItem('profilepic'))
    {
      console.log("profilepic does not exist")
      this.setState({pfpic: localStorage.getItem('profilepic')})
    }
    else
    {
      this.profilePicture()
      console.log('Profilepic does not exists')
    }
  }

  profilePicture = () =>
  {
    console.log("fetching")
    fetch(
      "http://127.0.0.1:8000/api/profilePicture",
  
      { method: "GET", headers: { Authorization: "Token " + localStorage.getItem("IsLoggedIn") }}
    ).then((response => {
      response.json().then(data => {
        console.log(data.Profile_picture)

        localStorage.setItem('profilepic',data.Profile_picture)
        this.setState({pfpic: localStorage.getItem('profilepic')})
      });
    }))
  }
    hello =  () =>
    {
      fetch(
        "http://127.0.0.1:8000/logout/",
    
        { method: "GET", headers: { Authorization: "Token " + localStorage.getItem("IsLoggedIn") }}
      )
        .then((response) => {
          localStorage.setItem('logout', true);
          localStorage.removeItem("IsLoggedIn")
          console.log(this.props.history)   
          this.props.history.push('/login');    
        })
    } 
  render() {
    return (
        <nav>   
          <div  className= 'navbarCss'>   
          <p className="icon">icon</p>
          <input className="SearchName">
          </input>
          <a href="www.facebook.com" id="Moving-Search" className="material-icons" > search</a>
   <div className="line-6"></div>
   <button onClick={this.hello}>
 <p>Logout</p> 
</button>
<div>
   <img src={this.state.pfpic} className = "profilePic">
  </img>    
  <p className="id-title">{localStorage.getItem('user')}</p>
  <div className="online"></div>      
  </div>             
          </div>
          </nav>   
    )
  }
}
export default withRouter(Navbar);

