import React, { Component } from "react";
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import PhotoEssay from "../text/photo-essay.js"
import NFTEssay from "../text/nft-essay.js"
import AAEssay from "../text/aa-essay.js"
import HumanHeart from "../text/human-heart.js"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../styles/global.css";

export default class TextPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: <PhotoEssay/>, title: "escaping the frame", expand: false}
    this.switchText = this.switchText.bind(this)
    this.expandSideBar = this.expandSideBar.bind(this)
  }

  switchText(clickContent,clickTitle){
    this.setState({content: clickContent, title:clickTitle});
    console.log(this.state.content);
    this.forceUpdate();
  }

  expandSideBar(){
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
  }
  render(){
    const textlist = [
      {
        title: "escaping the frame",
        content: <PhotoEssay/>,
      },
      {
        title: "does anyone still care about nfts?",
        content: <NFTEssay/>,
      },
      {
        title: "human heart",
        content: <HumanHeart/>
      },
      {
        title: "a thin line",
        content: <AAEssay/>
      },

    ];
    const content = this.state.content;
    const title = this.state.title;
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
            <div className={expand==false ? "text-sideBar": "expand-text"}>
              {textlist.map((item)=>{
                return (
                  <div className = {expand==true ? "expand-list-item" : "none"}>
                    <a onClick={()=>this.switchText(item.content, item.title)} style ={{color: item.title==this.state.title ? 'red' : 'black'}}>{item.title}</a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="text-body">
            <header>
              <NavBar/>
            </header>
            <div className = "writing">
              {content}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
