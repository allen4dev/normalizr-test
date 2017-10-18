import React from 'react';

import Post from './../Post';

import './index.css';

const PostList = ({ posts }) => {
  return (
    <ul className="PostsList">
      {posts.map(post => <Post key={post.id} {...post} />)}
    </ul>
  );
};

export default PostList;
