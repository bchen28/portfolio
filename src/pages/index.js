import React, { Component } from "react";
import Carousel from "../components/carousel.js"
import NavBar from "../components/navbar.js"
import {IndexImages} from "../images/index.js"
import "../styles/global.css";

export default class IndexPage extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const indexImages = IndexImages
    return (
      <main>
        <title> Bowen Chen </title>
        <header>
          <NavBar/>
        </header>
        <div className = "carousel">
            <Carousel images = {indexImages}/>
        </div>
      </main>
    );
  }
}
