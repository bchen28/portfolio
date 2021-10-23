import React, { Component } from "react";
import "./styles/global.css";

export default class Info extends Component {
  render(){
    return(
      <div>
        <p>
        Bowen Chen (b.1999) is a writer, photographer, and lover of technology with an A.B. in Computer Science and English from Brown University (2021). <br/>
        <br/>"iphone" images were taken on an iPhone 5.
        <br/>"archival" images were shot top-down on a Canon EOS Mark-II.
        <br/>All other images were uploaded from scanned negatives.
        </p>
        <p>
          Contact <br/>
          Email: bowen_chen@brown.edu<br/>
          Instagram: @brownuniversitysports<br/>
          Github: bchen28 <br/>

          <br/>Resume and private portfolio are available upon request.
        </p>
      </div>
    );
  }
}
