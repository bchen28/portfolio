import React, { Component } from "react";
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import TremorOverview from "../technical-writing/tremor-overview.js"
import "../styles/global.css";

export default class TechnicalWritingPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: <TremorOverview/>, title: "Tremor"}
    this.switchText = this.switchText.bind(this)
  }

  switchText(clickContent,clickTitle){
    this.setState({content: clickContent});
    console.log(this.state.content);
    this.forceUpdate();
  }

  render(){
    const textlist = [
      {
        title: "Tremor",
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
