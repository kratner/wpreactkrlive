import React, { Component } from "react";
import { qryPostsFromOEDistributionCategory } from "./DataAccess/GetDataWPRESTAPI";
import { LinearProgress } from "@material-ui/core";

class OECodeSamplesList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    let appUrl = `${qryPostsFromOEDistributionCategory}`;
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    let OECodeSamples = this.state.posts
      /*
      .filter(node => node.acf.type === 'project')
      .sort((a, b) =>
        a.acf.weight > b.acf.weight ? 1 : -1
      )
      */
      .map((node, index) => {
        let title = node.title;
        let externalLink = node.link;
        let content = node.content.rendered;
        return {
          title: title,
          externalLink: externalLink,
          content: content
        };
      });
    return (
      <div id="oe-code-samples">
        {OECodeSamples.length === 0 ? (
          <React.Fragment>
            <LinearProgress className="progress" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{this.props.codeSamplesTitle}</h3>
            <p>
              <a
                href={this.props.codeSamplesExternalSiteURL}
                rel="noopener noreferrer"
                target="_blank"
                title={this.props.codeSamplesExternalSiteTitle}
              >
                {this.props.codeSamplesExternalSiteName}
              </a>
            </p>
            <p>Coming Soon: {OECodeSamples.length} VBA Procedures</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default OECodeSamplesList;
