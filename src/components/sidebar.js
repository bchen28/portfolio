import React, { Component } from "react";
import "../styles/global.css";

export default class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {content:""}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({content: this.props.content})
  }

  render(){
    const {items} = this.props;
    return(
      <div className = "sideBar">
        {items.map((item)=>{
          return (
            <div>
              <a onClick = {this.handleClick}>{item.title}</a>
            </div>
          )
        })}
      </div>
    );
  }
}
