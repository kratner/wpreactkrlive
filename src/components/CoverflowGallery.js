import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import { qryPostsFromPrintsCategory } from "./DataAccess/GetDataWPRESTAPI";
import Coverflow from "react-coverflow";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LiveButton from "./LiveButton";

class CoverflowGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loadState: "inactive"
    };
    this.numLoadedImages = 0;
  }

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

  incrementLoadedImages(thisRef) {
    this.numLoadedImages++;
    if (this.numLoadedImages === this.state.images.length) {
      this.checkRenderInterval = setInterval(() => {
        if (document.getElementById("coverflowgallery") !== null) {
          document.getElementById("coverflowLoadProgress").style.display =
            "none";
          document.getElementById(
            "coverflow-gallery-container"
          ).style.visibility = "visible";
          clearInterval(this.checkRenderInterval);
        }
      }, 500);
    }
  }

  componentDidMount() {}

  render() {
    let images = this.state.images
      // .filter(node => node.acf.type === "social")
      // .sort((a, b) => (a.acf.weight > b.acf.weight ? 1 : -1))
      .map((node, index) => {
        let title = node.title.rendered;
        let imageURL = node.jetpack_featured_media_url;
        return (
          <img
            key={index}
            src={imageURL}
            alt={title}
            onLoad={this.incrementLoadedImages(this)}
          />
        );
      });
    // <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
    switch (this.state.loadState) {
      case "inactive":
        return (
          <div id="coverflow-gallery-container">
            <React.Fragment>
              <LiveButton
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
              </LiveButton>
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
        const hiddenDivStyle = { visibility: "hidden" };
        const coverflowProgressStyle = {
          position: "relative",
          top: "3em"
        };
        return (
          <React.Fragment>
            <div id="coverflowLoadProgress" style={coverflowProgressStyle}>
              <CircularProgress className="progress" />
            </div>
            <div id="coverflow-gallery-container" style={hiddenDivStyle}>
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
              <div id="coverflowgallery">
                <Coverflow
                  displayQuantityOfSide={2}
                  navigation={true}
                  enableHeading={true}
                  clickable={true}
                  media={{
                    "@media (max-width: 900px)": {
                      /*
                      width: "600px",
                      height: "300px"
                      */
                      width: "100vw",
                      height: "300px"
                    },
                    "@media (min-width: 900px)": {
                      width: "960px",
                      height: "600px"
                    }
                  }}
                >
                  {images}
                </Coverflow>
              </div>
            </div>
          </React.Fragment>
        );
      default:
    }
  }
}

export default CoverflowGallery;
