import React, { Component } from 'react';
import Copyright from './Copyright';
import BGVideoSwitch from './BGVideoSwitch';
class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Copyright />
        <BGVideoSwitch />
      </div>
    );
  }
}

export default NavBar;
