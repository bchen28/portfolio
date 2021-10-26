import React, { Component } from "react";
import Carousel from "../components/carousel.js"
import NavBar from "../components/navbar.js"
import {MainImages} from "../images/index.js"
import "../styles/global.css";

export default class IndexPage extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <main>
        <title> Bowen Chen </title>
        <header>
          <NavBar/>
        </header>
        <div className = "carousel">
            <Carousel images = {MainImages} slides ={1}/>
        </div>
      </main>
    );
  }
}
