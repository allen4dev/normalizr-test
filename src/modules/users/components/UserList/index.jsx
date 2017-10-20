import React from 'react';

import User from './../User';

import './index.css';

const UserList = ({ items }) => {
  return (
    <ul className="UserList">
      {items.map(user => <User key={user.id} {...user} />)}
    </ul>
  );
};

export default UserList;
