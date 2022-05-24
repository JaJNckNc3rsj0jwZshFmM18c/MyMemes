import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"

import './components/css/mymeme.css'



import SideBar from "./components/SideBar.js"
import MemePost from "./components/posts/MemePost"
import MemeVideos from "./components/posts/MemeVideos"
import UploadButton from "./components/posts/UploadButton"
import AjaxPost from "./components/posts/AjaxPost"
import { useDispatch, useSelector} from 'react-redux'

export const  action = 
{
  type: 'profileImage',
  
}
const Dispatch = useDispatch();
const Selectors = useSelector(state => state)
export class Apps extends Component {



    Dispatching = () =>
    {

        Dispatch(action);


    }
    
    render() {
        return (
            

            
            <div >

                {this.Dispatching()}
                
                 {Selectors}   
                      
                               
                    

                            

                            
                            

                               
                           
                        
                               <Navbar/>

                       
<SideBar/>

   



  <MemePost/>

                              
               
                            


                    
                        
                        

               
               
                
                
            </div>
        )
    }
}

export default Apps







