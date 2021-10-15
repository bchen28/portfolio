import React, { Component } from "react";
import Carousel from "../components/carousel.js"
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import {ColorImages,IndexImages} from "../images/index.js"
import "../styles/global.css";

export default class ColorPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: IndexImages}
    this.switchCarousel = this.switchCarousel.bind(this)
    // this.sideBarRef = React.createRef();
  }

  switchCarousel(clickContent){
    this.setState({content: clickContent});
    console.log(this.state.content);
    this.forceUpdate();
  }

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
        <header>
          <NavBar/>
        </header>
        <div className="images-body">
          <div className="sideBar">
            {numberlist.map((item)=>{
              return (
                <div>
                  <a onClick={()=>this.switchCarousel(item.content)}>{item.title}</a>
                </div>
              )
            })}
          </div>
          <div className="images-carousel">
            <Carousel images={content}/>
          </div>
        </div>
      </main>
    );
  }
}
