import React, { Component } from "react";
import Carousel from "../components/carousel.js"
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import {ColorImages,IndexImages, ArchiveImages, GoodwinImages, IphoneImages} from "../images/index.js"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "../styles/global.css";

export default class ColorPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: ColorImages, title: "color", slidesToShow: 1, expand:false}
    this.switchCarousel = this.switchCarousel.bind(this)
    this.expandSideBar = this.expandSideBar.bind(this)
  }

  switchCarousel(clickContent, clickTitle, slides){
    this.setState({content: clickContent, title: clickTitle, slidesToShow:slides});
    console.log(this.state.content);
    this.forceUpdate();
  }

  fetchState(){
    if (this.state.title == "archival"){
      return "archival-images";
    }
    if (this.state.title == "iphone"){
      return "iphone-images";
    }
    return "images";
  }

  expandSideBar(){
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  }

  render(){
    const numberlist = [
      {
        title: "color",
        content: ColorImages,
        slidesToShow: 1,
      },
      {
        title: "black & white",
        content: IndexImages,
        slidesToShow: 1,
      },
      {
        title: "archival",
        content: ArchiveImages,
        slidesToShow: 1,
      },
      {
        title: "iphone",
        content: IphoneImages,
        slidesToShow: 1,
      }
    ];
    const {content} = this.state;
    const slidesToShow =this.state.slidesToShow;
    const expand = this.state.expand;
    let arrow;
    if (expand==true) {
      arrow = <BsChevronLeft className = "expand-arrow"/>;
    } else {
      arrow = <BsChevronRight className = "expand-arrow"/>;
    }
    return(
      <main>
        <div className={expand==false ? "expand-sideBar": "collapse-sideBar"} onClick = {this.expandSideBar}>
          {arrow}
        </div>
        <div className = "cssgrid">
          <div className ={expand==true ? "expand-sideBar-bg": "none"}>
            <div className={expand==false ? "sideBar": "expand-text"}>
              {numberlist.map((item)=>{
                return (
                  <div className = {expand==true ? "expand-list-item":""}>
                    <a  onClick={()=>this.switchCarousel(item.content, item.title, item.slidesToShow)} style ={{color: item.title==this.state.title ? 'red' : 'black'}} >{item.title}</a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="text-body">
            <header>
              <NavBar/>
            </header>
            <div className = "carousel">
              <div className={this.fetchState()}>
                <Carousel images={content} slides = {slidesToShow}/>
              </div>
            {this.state.title=="archival" &&
              <div>
                <p className = "archive-image-label"> <i>All specimens were digitized in collaboration with the Brown University Herbarium.</i> <br/> Shown below are samples from the <i>exsiccatae</i> (or bound collection) of Hannah Wilkinson Goodwin</p>
                <div className = "archival-images">
                  <Carousel images = {GoodwinImages} slides = {slidesToShow}/>
                </div>
              </div>
            }
            </div>
          </div>

        </div>
      </main>
    );
  }
}
