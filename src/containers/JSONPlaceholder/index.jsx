import React, { Component } from 'react';

import api from './../../utils/api';

class JSONPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="JSONPlaceholder container">
        <h1>yay</h1>
      </div>
    );
  }
}

export default JSONPlaceholder;
