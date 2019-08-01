import React, { Component } from 'react';

class Copyright extends Component {
  render() {
    let copyrightYear = (() => new Date())().getFullYear();
    return (
      <span className="copyright">
        &copy;{copyrightYear}
      </span>
    );
  }
}

export default Copyright;
