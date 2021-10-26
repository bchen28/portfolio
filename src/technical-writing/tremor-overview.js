import React, { Component } from "react";
import "../styles/global.css";

export default class TremorOverview extends Component {
  render(){
    return(
      <div>
        <a href="https://github.com/tremor-rs/tremor-www/blob/main/docs/overview.md">
          Tremor Project Overview Page
        </a>
        <p>
          I worked with the team at Tremor to rewrite their "Architecture Overview" Page into a general "Overview" page that catered towards new and potential users. The internal content was restructured to provide clearer parameters that conveyed what Tremor was and what it was best used for. Although I deemed it necessary, no content was refactored into separate pages (e.g. a separate "Model" page), and the existing content was rewritten, adhering to the Google developer documentation style guide, to be more concise and professional.
        </p>
        <a href="https://github.com/tremor-rs/tremor-www/pull/84">
          link to the Github pull request.
        </a>
        <br/>
        <div className = "tremor-text">
          <a href="https://github.com/tremor-rs/tremor-www/blob/main/docs/getting-started/getting-started.md">
            Tremor Project Getting Started Page
          </a>
          <p>
            I rewrote the Tremor Project's "Getting Started" Page to make instructions more concise and easier to follow for new users.  Previous language that negatively impacted the clarity or tone of the page was rewritten to be more direct and reflect a higher degree of professionalism.The document was also changed to adhere to the Google developer documentation style guide.
          </p>
          <a href="https://github.com/tremor-rs/tremor-www/pull/83">
            link to the Github pull request.
          </a>
        </div>
      </div>
    )
  }
}
