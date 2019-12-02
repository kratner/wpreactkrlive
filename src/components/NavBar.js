import React, { Component } from "react";
import Copyright from "./Copyright";
import BGVideoSwitch from "./BGVideoSwitch";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-right: 1em;
  position: fixed;
  width: 100%;
`;

class NavBar extends Component {
  render() {
    return (
      <Wrapper className="nav">
        <Copyright />
        <BGVideoSwitch className="ctl" title="Switch Video Background" />
      </Wrapper>
    );
  }
}

export default NavBar;
