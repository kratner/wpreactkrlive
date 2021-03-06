import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import { qryPostsFromPrintsCategory } from "./DataAccess/GetDataWPRESTAPI";
import ImageGallery from "react-image-gallery";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import LiveButton from "./LiveButton";

class MainImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loadState: "inactive"
    };
    this.numLoadedImages = 0;
  }

  loadMainImageGallery() {
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

  handleImageLoad(e) {
    this.numLoadedImages++;
    if (this.numLoadedImages === this.state.images.length) {
      document.getElementById("imageGalleryLoadProgress").style.display =
        "none";
      document.getElementById("imageGalleryContainer").style.visibility =
        "visible";
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
        return {
          original: imageURL,
          originalAlt: title,
          originalTitle: title,
          thumbnail: imageURL,
          thumbnailAlt: title,
          thumbnailTitle: title,
          description: title
        };
      });
    switch (this.state.loadState) {
      case "inactive":
        return (
          <div id="image-gallery-container">
            <React.Fragment>
              <LiveButton
                className="button-standard"
                color="primary"
                onClick={() => {
                  this.loadMainImageGallery();
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
          <div id="image-gallery-container">
            <CircularProgress className="progress" />
          </div>
        );
      case "loaded":
        const progressStyle = {
          position: "relative",
          top: "3em"
        };
        const hiddenDivStyle = {
          visibility: "hidden"
        };
        return (
          <div id="image-gallery-container">
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
              <div id="imageGalleryLoadProgress">
                <CircularProgress className="progress" style={progressStyle} />
              </div>
              <div style={hiddenDivStyle} id="imageGalleryContainer">
                <ImageGallery
                  onImageLoad={e => {
                    this.handleImageLoad(e);
                  }}
                  className="image-gallery"
                  items={images}
                  thumbnailPosition={this.props.thumbnailPosition}
                />
              </div>
            </React.Fragment>
          </div>
        );
      default:
    }
  }
}

export default MainImageGallery;
