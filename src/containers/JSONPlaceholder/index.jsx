import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../../modules/users/components/UserList';

import users from './../../modules/users';

class JSONPlaceholder extends Component {
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
    const { fetchUsers } = this.props;

    this.setState({ loading: true });
    await fetchUsers();
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="JPlaceholder container">
        <h1 className="title">JSONPlaceholder Users</h1>
        <UserList items={this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.users.byType['jplaceholder'];

  return {
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUsers: users.actions.fetchUsers,
})(JSONPlaceholder);
