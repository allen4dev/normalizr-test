import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from './../../modules/posts/components/PostList';

import posts from './../../modules/posts';

import helpers from './../../utils/helpers';

class JSONPlaceholder extends Component {
  constructor(props) {
    super(props);

    this.fetchRandomPost = this.fetchRandomPost.bind(this);

    this.state = { loading: true };
  }

  componentDidMount() {
    const { items } = this.props;
    if (items.length === 0) {
      this.fetchData();
    }

    this.setState({ loading: false });
  }

  async fetchData() {
    const { fetchPosts } = this.props;

    this.setState({ loading: true });
    await fetchPosts();
  }

  async fetchRandomPost() {
    const randomID = helpers.fromOneTo(100);
    const { fetchPost } = this.props;

    await fetchPost(randomID);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="JPlaceholder container">
        <h1 className="title">Posts</h1>
        <button onClick={this.fetchRandomPost}>Fetch random Post</button>
        <PostList posts={this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: Object.values(state.posts.entities),
  };
}

export default connect(mapStateToProps, {
  fetchPosts: posts.actions.fetchPosts,
  fetchPost: posts.actions.fetchPost,
})(JSONPlaceholder);
