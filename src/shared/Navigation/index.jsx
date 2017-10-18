import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Link className="Navigation-link" to="/">
        JSONPlaceholder
      </Link>
      <Link className="Navigation-link" to="/soundcloud">
        Soundcloud
      </Link>
      <Link className="Navigation-link" to="/youtube">
        Youtube
      </Link>
    </nav>
  );
};

export default Navigation;
