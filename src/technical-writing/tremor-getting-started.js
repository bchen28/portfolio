import React, { Component } from "react";
import "../styles/global.css";

export default class TremorGettingStarted extends Component {
  render(){
    return(
      <div>
        <a href="https://github.com/tremor-rs/tremor-www/blob/main/docs/getting-started/getting-started.md">
          Tremor Project Getting Started Page
        </a>
        <p>
          I rewrote the Tremor Project's "Getting Started" Page to make instructions more concise and easier to follow for new users. The document was changed to adhere to the Google developer documentation style guide. Previous language that negatively impacted the clarity or tone of the page was rewritten to be more direct and reflect a higher degree of professionalism.
        </p>
        <a href="https://github.com/tremor-rs/tremor-www/pull/83">
          link to the Github pull request.
        </a>
      </div>
    )
  }
}
