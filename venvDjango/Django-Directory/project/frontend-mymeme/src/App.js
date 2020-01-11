import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"

import './components/mymeme.css'



import SideBar from "./components/SideBar.js"
import MemePost from "./components/MemePost"
import MemeVideos from "./components/MemeVideos"





export class App extends Component {
    render() {
        return (
            <div >


                
                    
                           
                               


                            

                            
                            

                               
                           
                        
                       <Navbar/>
                            <SideBar/>

                               



                              <MemePost/>
                              <MemeVideos/>

                             


                    
                        
                        

               
               
                
                
            </div>
        )
    }
}

export default App







