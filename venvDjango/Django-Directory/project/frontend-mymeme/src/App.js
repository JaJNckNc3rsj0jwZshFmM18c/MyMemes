import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"

import './components/mymeme.css'



import SideBar from "./components/SideBar.js"
import MemePost from "./components/MemePost"
import MemeVideos from "./components/MemeVideos"
import UploadButton from "./components/UploadButton"
import AjaxPost from "./components/AjaxPost"





export class App extends Component {
    render() {
        return (
            <div >


                
                    
                           
                               


                            

                            
                            

                               
                           
                        
                       <Navbar/>
                            <SideBar/>

                               



                              <MemePost/>

                              

                            


                    
                        
                        

               
               
                
                
            </div>
        )
    }
}

export default App







