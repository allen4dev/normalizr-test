import React, { Component } from 'react';
// import { connect } from 'react-redux';

class JSONPlaceholder extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="JPlaceholder container">
        <h1 className="title">Users</h1>
      </div>
    );
  }
}

export default JSONPlaceholder;
