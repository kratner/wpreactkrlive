import React, { Component } from "react";
import "./styles/normalize.css";
import "./styles/App.scss";
import ProjectLinksList from "./components/ProjectLinksList";
import SocialLinksList from "./components/SocialLinksList";
import OECodeSamplesList from "./components/OECodeSamplesList";
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
            <MainImageGallery
              sectionButtonLabel="Load Art Gallery"
              galleryTitle="Art Gallery"
              galleryLinkURL="https://keithratner.live/shop"
              galleryLinkTitle="Purchase Prints Online"
              galleryLinkText="Visit the Store"
              thumbnailPosition="left"
            />
            <OECodeSamplesList
              sectionButtonLabel="Load VBA Code Samples"
              codeSamplesTitle="VBA Code Samples"
              codeSamplesExternalSiteURL="https://optionexplicit.live"
              codeSamplesExternalSiteTitle="Visit Option Explicit"
              codeSamplesExternalSiteName="Option Explicit"
            />
            <SocialLinksList />
            <ProjectLinksList projectLinksTitle="Suggested Links" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
