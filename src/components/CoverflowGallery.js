import React, { Component } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { qryPostsFromPrintsCategory } from "./DataAccess/GetDataWPRESTAPI";
import Coverflow from "react-coverflow";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

class CoverflowGallery extends Component {
  state = {
    images: [],
    loadState: "inactive"
  };

  loadImageData() {
    let appUrl = `${qryPostsFromPrintsCategory}`;
    this.setState({
      loadState: "loading"
    });
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          images: data,
          loadState: "loaded"
        });
      });
  }

  componentDidMount() {}

  render() {
    let images = this.state.images
      // .filter(node => node.acf.type === "social")
      // .sort((a, b) => (a.acf.weight > b.acf.weight ? 1 : -1))
      .map(node => {
        let title = node.title.rendered;
        let imageURL = node.jetpack_featured_media_url;
        return <img src={imageURL} alt={title} />;
      });
    // <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
    switch (this.state.loadState) {
      case "inactive":
        return (
          <div id="coverflow-gallery-container">
            <React.Fragment>
              <Button
                className="button-standard"
                color="primary"
                onClick={() => {
                  this.loadImageData();
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
          <div id="coverflow-gallery-container">
            <CircularProgress className="progress" />
          </div>
        );
      case "loaded":
        return (
          <div id="coverflow-gallery-container">
            <React.Fragment>
              <h3>{this.props.galleryTitle}</h3>
              <p>
                <a
                  href={this.props.galleryLinkURL}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={this.props.galleryLinkTitle}
                >
                  {this.props.galleryLinkText} <OpenInNewIcon />
                </a>
              </p>
              <Coverflow
                displayQuantityOfSide={2}
                navigation={true}
                enableHeading={true}
                clickable={true}
                media={{
                  "@media (max-width: 900px)": {
                    width: "600px",
                    height: "300px"
                  },
                  "@media (min-width: 900px)": {
                    width: "960px",
                    height: "600px"
                  }
                }}
                className="coverflow-gallery"
              >
                {images}
              </Coverflow>
            </React.Fragment>
          </div>
        );
      default:
    }
  }
}

export default CoverflowGallery;
