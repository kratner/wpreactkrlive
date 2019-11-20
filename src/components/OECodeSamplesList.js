import React, { Component } from "react";
import { qryPostsFromOEDistributionCategory } from "./DataAccess/GetDataWPRESTAPI";
import { Button, CircularProgress } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

class OECodeSamplesList extends Component {
  state = {
    posts: [],
    loadState: "inactive"
  };

  loadOECodeSamplesList() {
    let appUrl = `${qryPostsFromOEDistributionCategory}`;
    this.setState({
      loadState: "loading"
    });
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data,
          loadState: "loaded"
        });
      });
  }

  componentDidMount() {}

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
    switch (this.state.loadState) {
      case "inactive":
        return (
          <div id="oe-code-samples-container">
            <React.Fragment>
              <Button
                className="button-standard"
                color="primary"
                onClick={() => {
                  this.loadOECodeSamplesList();
                }}
                size="large"
                title={this.props.sectionButtonLabel}
                variant="contained"
              >
                {this.props.sectionButtonLabel}
              </Button>
            </React.Fragment>
          </div>
        );
      case "loading":
        return (
          <div id="oe-code-samples-container">
            <React.Fragment>
              <CircularProgress className="progress" />
            </React.Fragment>
          </div>
        );
      case "loaded":
        /* content, externalLink, title */
        return (
          <div id="oe-code-samples-container">
            <React.Fragment>
              <h3>{this.props.codeSamplesTitle}</h3>
              <p>
                <a
                  href={this.props.codeSamplesExternalSiteURL}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={this.props.codeSamplesExternalSiteTitle}
                >
                  {this.props.codeSamplesExternalSiteName} <OpenInNewIcon />
                </a>
              </p>
              <p>Coming Soon: {OECodeSamples.length} VBA Procedures</p>
            </React.Fragment>
          </div>
        );
      default:
    }
  }
}

export default OECodeSamplesList;
