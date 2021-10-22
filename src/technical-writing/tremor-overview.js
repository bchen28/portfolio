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

      </div>
    )
  }
}
