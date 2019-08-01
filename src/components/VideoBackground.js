import React, { Component } from 'react';

class VideoBackground extends Component {
  render() {
    return (
      <div className="video-background">
        <video
          autoPlay
          loop
          className="video-background__video"
          muted
          playsInline
        >
          <source
            src="/img/20181215_154218.mp4"
            type="video/mp4"
            className="video-background__video__source"
          />
        </video>
      </div>
    );
  }
}

export default VideoBackground;
