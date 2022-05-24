import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"

import './components/css/mymeme.css'



import SideBar from "./components/SideBar.js"
import MemePost from "./components/posts/MemePost"
import {Apps} from "./Apps.js"
import UploadButton from "./components/posts/UploadButton"
import AjaxPost from "./components/posts/AjaxPost"
import {BrowserRouter, Route} from  "react-router-dom"
import Register from "./components/posts/Register.js"
import login from "./components/posts/login.js"
import {createStore} from 'redux'





export const App = () => {
    
    
        return (
            <BrowserRouter>
                    
            <Route path="/home" component={Apps} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={login} />
            
            
            
            
            </BrowserRouter>




           
        )
    }


export default App




 






