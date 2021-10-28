import React, { Component } from "react";
import "../styles/global.css";

export default class NavBar extends Component {
  render(){
    return(
      <nav className = "header" class = "container">
        <div><a href = "/portfolio/text" >Essays</a></div>
        <div><a href = "/portfolio/images">Images</a></div>
        <div><a className = "logo" href = "/portfolio/">BOWEN CHEN</a></div>
        <div><a href = "/portfolio/technical-writing">Technical Writing</a></div>
        <div><a href = "/portfolio/about">About</a></div>
      </nav>
    );
  }
}
