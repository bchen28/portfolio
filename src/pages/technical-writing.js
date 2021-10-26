import React, { Component } from "react";
import NavBar from "../components/navbar.js"
import SideBar from "../components/sidebar.js"
import TremorOverview from "../technical-writing/tremor-overview.js"
import TremorGettingStarted from "../technical-writing/tremor-getting-started.js"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../styles/global.css";

export default class TechnicalWritingPage extends Component {
  constructor(props){
    super(props);
    this.state = {content: <TremorOverview/>, title: "Tremor", expand:false}
    this.switchText = this.switchText.bind(this)
    this.expandSideBar = this.expandSideBar.bind(this)
  }

  switchText(clickContent,clickTitle){
    this.setState({content: clickContent});
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
        title: "Tremor",
        content: <TremorOverview/>,
      },
    ];
    const content = this.state.content;
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
                <div className = {expand==true ? "expand-list-item":""}>
                  <a onClick={()=>this.switchText(item.content)} style ={{color: item.title==this.state.title ? 'red' : 'black'}}>{item.title}</a>
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
