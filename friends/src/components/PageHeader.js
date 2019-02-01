import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function PageHeader() {
    return (
        <header className="app-header">
          <h1 className="title">
          <Link to="/">{` { FriendsList } `} </Link>
          </h1>
          <Link to="/add" className="add-friend-btn">
            <div>(+) Add Friend</div>
          </Link>
          <Link to="/" className="home-ink">
            <h2>Home</h2>
          </Link>
        </header>
    );
}

export default PageHeader;