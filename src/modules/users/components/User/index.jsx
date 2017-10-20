import React from 'react';

import './index.css';

const User = props => {
  const name = props.full_name || props.username;
  const info = props.permalink_url || props.email;

  return (
    <li className="User">
      <h4 className="User-name">{name}</h4>
      <span className="User-lastname">{info}</span>
    </li>
  );
};

export default User;
