import React, { Component } from "react"
import NavBar from "../components/navbar.js"
import Info from "../info.js"
import "../styles/global.css"


export default class AboutPage extends Component {
  render(){
    return(
      <div className = "about-index-top-padding">
        <div className = "text-body">
          <header>
            <NavBar/>
          </header>
          <div className="writing">
            <Info/>
          </div>
        </div>
      </div>
    );
  }
}
