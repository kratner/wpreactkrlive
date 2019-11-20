import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import { qryPostsFromLinksCategory } from "./DataAccess/GetDataWPRESTAPI";

class ProjectLinksList extends Component {
  state = {
    posts: [],
    loadState: "loading"
  };

  componentDidMount() {
    let appUrl = `${qryPostsFromLinksCategory}`;
    fetch(appUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data,
          loadState: "loaded"
        });
      });
  }

  render() {
    let listProjectLinks = this.state.posts
      .filter(node => node.acf.type === "project")
      .sort((a, b) => (a.acf.weight > b.acf.weight ? 1 : -1))
      .map((node, index) => {
        return (
          <li key={index}>
            <a
              href={node.acf.href}
              className={node.acf.class}
              title={node.title.rendered}
              target={node.acf.target}
            >
              {node.acf.text}
              <span className={"icon-" + node.acf.icon + " inline-icon"} />
            </a>
          </li>
        );
      });
    switch (this.state.loadState) {
      case "loading":
        return (
          <div id="project-links-container">
            <CircularProgress className="progress" />
          </div>
        );
      case "loaded":
        return (
          <div id="project-links-container">
            <h3>{this.props.projectLinksTitle}</h3>
            <ul>{listProjectLinks}</ul>
          </div>
        );
      default:
    }
  }
}

export default ProjectLinksList;
