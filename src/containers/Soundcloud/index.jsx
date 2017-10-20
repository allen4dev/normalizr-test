import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../../modules/users/components/UserList';

import users from './../../modules/users';

class Soundcloud extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.items.length === 0) {
      this.fetchData();
    }

    this.setState({ loading: false });
  }

  async fetchData() {
    const { searchUsers } = this.props;

    this.setState({ loading: true });
    await searchUsers('allen');
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="Soundcloud container">
        <h1 className="title">Soundcloud Users</h1>
        <UserList items={this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.users.byType['soundcloud'];

  return {
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchUsers: users.actions.searchUsers,
})(Soundcloud);
