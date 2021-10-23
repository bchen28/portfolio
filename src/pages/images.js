import React, { Component } from "react";
import Carousel from "../components/carousel.js"
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import {ColorImages,IndexImages, ArchiveImages, GoodwinImages} from "../images/index.js"
import "../styles/global.css";

export default class ColorPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: ColorImages, title: "color"}
    this.switchCarousel = this.switchCarousel.bind(this)
    // this.sideBarRef = React.createRef();
  }

  switchCarousel(clickContent, clickTitle){
    this.setState({content: clickContent, title: clickTitle});
    console.log(this.state.content);
    this.forceUpdate();
  }

  render(){
    const numberlist = [
      {
        title: "color",
        content: ColorImages,
      },
      {
        title: "black & white",
        content: IndexImages,
      },
      {
        title: "archival",
        content: ArchiveImages,
      },
      {
        title: "iphone",
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

            <div className={this.state.title=="archival" ? "archival-images":"images"}>
              <Carousel images={content}/>
            </div>
            {this.state.title=="archival" &&
              <div>
                <p className = "archive-image-label"> <i>All specimens were digitized in collaboration with the Brown University Herbarium.</i> <br/> Shown below are samples from the <i>exsiccatae</i> (or bound collection) of Hannah Wilkinson Goodwin</p>
                <div className = "archival-images">
                  <Carousel images = {GoodwinImages}/>
                </div>
              </div>
            }
          </div>

        </div>
      </main>
    );
  }
}
