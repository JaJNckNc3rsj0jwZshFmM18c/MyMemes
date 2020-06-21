import React, { Component } from 'react'
import Navbar from "./components/Navbar.js"

import './components/mymeme.css'



import SideBar from "./components/SideBar.js"
import MemePost from "./components/MemePost"
import {Apps} from "./Apps.js"
import UploadButton from "./components/UploadButton"
import AjaxPost from "./components/AjaxPost"
import {BrowserRouter, Route} from  "react-router-dom"
import {Register} from "./components/Register.js"





export class App extends Component {
    render() {
        return (
                    <BrowserRouter>
                    
                    <Route path="/home" component={Apps} />
                    <Route path="/register" component={Register} />
                    
                    
                    
                    
                    </BrowserRouter>




           
        )
    }
}

export default App







