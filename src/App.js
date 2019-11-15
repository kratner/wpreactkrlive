import React, { Component } from "react";
import "./styles/normalize.css";
import "./styles/App.scss";
import ProjectLinksList from "./components/ProjectLinksList";
import SocialLinksList from "./components/SocialLinksList";
import MainImageGallery from "./components/MainImageGallery";
import KRMonogramSVG from "./components/KRMonogramSVG";
import NavBar from "./components/NavBar";
import VideoBackground from "./components/VideoBackground";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoBackground />
        <NavBar />
        <KRMonogramSVG />
        <div className="splash-container theme-light">
          <div className="front">
            <div className="brand-title">
              <h1>Keith Ratner</h1>
            </div>
            <ProjectLinksList />
            <MainImageGallery thumbnailPosition="top" />
            <SocialLinksList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
