import React, { Component } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { qryPostsFromPrintsCategory } from "./DataAccess/GetDataWPRESTAPI";
import ImageGallery from "react-image-gallery";

class MainImageGallery extends Component {
  state = {
    images: [],
    loadState: "inactive"
  };

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
              <Button
                className="button-standard"
                color="primary"
                onClick={() => {
                  this.loadMainImageGallery();
                }}
                size="large"
                variant="contained"
              >
                {this.props.sectionButtonLabel}
              </Button>
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
                  {this.props.galleryLinkText}
                </a>
              </p>
              <ImageGallery
                className="image-gallery"
                items={images}
                thumbnailPosition={this.props.thumbnailPosition}
              />
            </React.Fragment>
          </div>
        );
      default:
    }
  }
}

export default MainImageGallery;
