import React, { Component } from "react";
import "../styles/global.css";

export default class NavBar extends Component {
  render(){
    return(
      <nav className = "header" class = "container">
        <div><a href = "/text" >Essays</a></div>
        <div><a href = "/images">Images</a></div>
        <div><a className = "logo" href = "/">BOWEN CHEN</a></div>
        <div><a href = "#">Technical Writing</a></div>
        <div><a href = "#">Contact</a></div>
      </nav>
    );
  }
}
