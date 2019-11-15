import React, { Component } from "react";
import { LinearProgress } from "@material-ui/core";
import { qryPostsFromPrintsCategory } from "./DataAccess/GetDataWPRESTAPI";
// # SCSS

// # CSS
//@import "~react-image-gallery/styles/css/image-gallery.css";

// # Stylesheet with no icons
//node_modules/react-image-gallery/styles/scss/image-gallery-no-icon.scss
//node_modules/react-image-gallery/styles/css/image-gallery-no-icon.css

import ImageGallery from "react-image-gallery";

class MainImageGallery extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    let appUrl = `${qryPostsFromPrintsCategory}`;
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          images: data
        });
      });
  }

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
    return (
      <div className="image-gallery" id="image-gallery-container">
        {images.length === 0 ? (
          <LinearProgress className="progress" />
        ) : (
          <ImageGallery
            items={images}
            thumbnailPosition={this.props.thumbnailPosition}
          />
        )}
      </div>
    );
  }
}

export default MainImageGallery;
