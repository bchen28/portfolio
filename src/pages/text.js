import React, { Component } from "react";
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import PhotoEssay from "../text/photo-essay.js"
import "../styles/global.css";

export default class TextPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: <PhotoEssay/>, title: "Escaping the Frame"}
    this.switchText = this.switchText.bind(this)
    // this.sideBarRef = React.createRef();
  }

  switchText(clickContent,clickTitle){
    this.setState({content: clickContent});
    console.log(this.state.content);
    this.forceUpdate();
  }

  render(){
    const textlist = [
      {
        title: "Escaping the Frame",
        state: "color",
        content: <PhotoEssay/>,
      },
      {
        title: "NFT",
        state:"black & white",
        content: null,
      },
    ];
    const content = this.state.content;
    return(
      <main>
      <div className = "cssgrid">
          <div className="sideBar">
            {textlist.map((item)=>{
              return (
                <div>
                  <a onClick={()=>this.switchText(item.content)} style ={{color: item.title==this.state.title ? 'red' : 'black'}}>{item.title}</a>
                </div>
              )
            })}
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
