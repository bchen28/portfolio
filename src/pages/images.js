import React, { Component } from "react";
import Carousel from "../components/carousel.js"
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import {ColorImages,IndexImages} from "../images/index.js"
import "../styles/global.css";

export default class ColorPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: IndexImages, title: "black & white"}
    this.switchCarousel = this.switchCarousel.bind(this)
    // this.sideBarRef = React.createRef();
  }

  switchCarousel(clickContent, clickTitle){
    this.setState({content: clickContent, title: clickTitle});
    console.log(this.state.content);
    this.forceUpdate();
  }

  // checkColor(title){
  //   if this.state.title == title:
  //     return "color:red";
  //   return "color:black";
  // }

  render(){
    const numberlist = [
      {
        title: "color",
        state: "color",
        content: ColorImages,
      },
      {
        title: "black & white",
        state:"black & white",
        content: IndexImages,
      },
      {
        title: "archival",
        state: "archival",
        content: null
      },
      {
        title: "iphone",
        state: "iphone",
        content: null
      }
    ];
    // const sideBar = this.sideBarRef.current;
    const {content} = this.state;
    return(
      <main>
        <div className = "cssgrid">
          <div className="sideBar">
            {numberlist.map((item)=>{
              return (
                <div>
                  <a  onClick={()=>this.switchCarousel(item.content, item.title)} style ={{color: item.title==this.state.title ? 'red' : 'black'}} >{item.title}</a>
                </div>
              )
            })}
          </div>
          <div className="text-body">
            <header>
              <NavBar/>
            </header>
            <div className="images">
              <Carousel images={content}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
