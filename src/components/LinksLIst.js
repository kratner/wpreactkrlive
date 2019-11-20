import React, { Component } from "react";
import { qryPostsFromLinksCategory } from "./DataAccess/GetDataWPRESTAPI";
import { CircularProgress } from "@material-ui/core";

class LinksList extends Component {
  state = {
    posts: [],
    loadState: "inactive"
  };

  componentDidMount() {
    let appUrl = `${qryPostsFromLinksCategory}`;
    this.setState({
      loadState: "loading"
    });
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
              <span className={"icon-" + node.acf.icon} />
            </a>
          </li>
        );
      });
    switch (this.state.loadState) {
      case "inactive":
        return (
          <div id="links-container">
            <CircularProgress className="progress" />
          </div>
        );
      case "loading":
        return (
          <div id="links-container">
            <CircularProgress className="progress" />
          </div>
        );
      case "loaded":
        return (
          <div id="links-container">
            <div>
              <h1>Links</h1>
              <ul>{listProjectLinks}</ul>
            </div>
          </div>
        );
      default:
    }
  }
}

export default LinksList;
