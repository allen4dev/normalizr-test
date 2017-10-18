import React from 'react';

import './index.css';

const Post = props => {
  return (
    <li className="Post">
      <h4 className="Post-title">{props.title}</h4>
      <p className="Post-body">{props.body}</p>
    </li>
  );
};

export default Post;
