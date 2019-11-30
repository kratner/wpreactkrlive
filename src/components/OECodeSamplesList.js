import React, { Component } from "react";
import { qryPostsFromOEDistributionCategory } from "./DataAccess/GetDataWPRESTAPI";
import { CircularProgress } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import SimpleCard from "./SimpleCard";
import LiveButton from "./LiveButton";

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

  handleOECodeCardClick(externalLink) {
    window.open(externalLink, "_blank");
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
      .sort((a, b) => (a.title > b.title ? 1 : -1))
      .map((node, index) => {
        let title = node.title.rendered;
        let externalLink = node.link;
        let content = node.content.rendered;
        let buttonLabel = "View on Website";
        let buttonTitle = "Go to " + externalLink;
        return (
          <SimpleCard
            contentTitle={title}
            mainContent={content}
            externalLink={externalLink}
            linkButtonLabel={buttonLabel}
            linkButtonTitle={buttonTitle}
            onClick={() => {
              this.handleOECodeCardClick(externalLink);
            }}
          />
        );
      });
    switch (this.state.loadState) {
      case "inactive":
        return (
          <div id="oe-code-samples-container">
            <LiveButton
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
            </LiveButton>
          </div>
        );
      case "loading":
        return (
          <div id="oe-code-samples-container">
            <CircularProgress className="progress" />
          </div>
        );
      case "loaded":
        return (
          <div id="oe-code-samples-container">
            <h3>{this.props.codeSamplesTitle}</h3>
            <p>
              <a
                href={this.props.codeSamplesExternalSiteURL}
                rel="noopener noreferrer"
                target="_blank"
                title={this.props.codeSamplesExternalSiteTitle}
              >
                {this.props.codeSamplesExternalSiteName}{" "}
                <OpenInNewIcon
                  fontSize={"inherit"}
                  style={{ marginBottom: "-0.1em" }}
                />
              </a>
            </p>
            <div className="oe-code-samples">{OECodeSamples}</div>
          </div>
        );
      default:
    }
  }
}

export default OECodeSamplesList;
