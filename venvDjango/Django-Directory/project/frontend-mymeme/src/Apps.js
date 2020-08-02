import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"

import './components/mymeme.css'



import SideBar from "./components/SideBar.js"
import MemePost from "./components/MemePost"
import MemeVideos from "./components/MemeVideos"
import UploadButton from "./components/UploadButton"
import AjaxPost from "./components/AjaxPost"
import {createStore} from 'redux'
import reducers from './components/reducers.js'
import  ProfilePicAction from './components/Action.js'



let store = createStore(reducers)
store.subscribe (( ) => console.log(store.getState()))

store.dispatch( ProfilePicAction)



export class Apps extends Component {
    render() {
        return (
            <div >


                
                    
                           
                               


                            

                            
                            

                               
                           
                        
                       
                              
               
                            


                    
                        
                        

               
               
                
                
            </div>
        )
    }
}

export default Apps







