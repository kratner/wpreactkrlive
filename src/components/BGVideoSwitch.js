import React, { Component } from "react";
import { qryPostsFromLinksCategory } from "./DataAccess/GetDataWPRESTAPI";
import SwitchVideoIcon from "@material-ui/icons/SwitchVideo";

class BGVideoSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.state.switchBackgroundVideo(
      this.state.videoURLs,
      this.state.videoElement,
      this.state.videoSource
    );
  }
  toggleBGVideoSwitch(isVisible) {
    document.getElementsByClassName(
      "ctl__bgvideoswitch"
    )[0].style.visibility = isVisible ? "visible" : "hidden";
  }
  state = {
    videoURLs: [],
    switchBackgroundVideo: {},
    videoElement: {},
    videoSource: {}
  };

  // $('[data-ctl=bgvideoswitch]')

  componentDidMount() {
    this.toggleBGVideoSwitch(false);
    let appUrl = `${qryPostsFromLinksCategory}`;
    let arrVideoURLs = ["/img/20181215_154218.mp4"];
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.state.populateVideoURLArray(data);
        this.state.switchBackgroundVideo(
          this.state.videoURLs,
          this.state.videoElement,
          this.state.videoSource
        );
        this.toggleBGVideoSwitch(true);
      });

    this.setState({
      videoURLs: arrVideoURLs,
      videoElement: document.getElementsByClassName("video-background__video"),
      videoSource: document.getElementsByClassName(
        "video-background__video__source"
      ),
      switchBackgroundVideo: (arr, el_video, el_source) => {
        let new_random_item = Math.floor(Math.random() * arr.length);
        el_source[0].setAttribute("src", arr[new_random_item]);
        el_video[0].load();
      },
      populateVideoURLArray: data => {
        let videoURLArray = data
          .filter(node => node.acf.type === "video")
          .sort((a, b) => (a.acf.weight > b.acf.weight ? 1 : -1))
          .map((node, index) => {
            return node.acf.href;
          });
        this.setState({
          videoURLs: videoURLArray
        });
        //this.state.toggleBGVideoSwitch(true);
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <span
          data-ctl="bgvideoswitch"
          className="ctl ctl__bgvideoswitch"
          title="Switch Video Background"
          onClick={this.handleClick}
        >
          <SwitchVideoIcon fontSize="large" />
        </span>
      </React.Fragment>
    );
  }
}

export default BGVideoSwitch;
