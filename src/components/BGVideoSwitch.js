import React, { Component } from 'react';

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
  state = {
    videoURLs: [],
    switchBackgroundVideo: {},
    videoElement: {},
    videoSource: {}
  };

  // $('[data-ctl=bgvideoswitch]')

  componentDidMount() {
    let arrVideoURLs = [
      '/img/20181215_154218.mp4',
      '/img/20190103_151234.mp4',
      '/img/20190330_184310.mp4',
      '/img/20190330_190244.mp4',
      '/img/20190411_191105.mp4'
    ];

    this.setState({
      videoURLs: arrVideoURLs,
      videoElement: document.getElementsByClassName(
        'video-background__video'
      ),
      videoSource: document.getElementsByClassName(
        'video-background__video__source'
      ),
      switchBackgroundVideo: (arr, el_video, el_source) => {
        let new_random_item = Math.floor(
          Math.random() * arr.length
        );
        el_source[0].setAttribute(
          'src',
          arr[new_random_item]
        );
        el_video[0].load();
      }
    });
  }
  render() {
    return (
      <span
        data-ctl="bgvideoswitch"
        className="ctl icon-video-camera"
        title="Switch Video Background"
        onClick={this.handleClick}
      />
    );
  }
}

export default BGVideoSwitch;
