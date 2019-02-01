import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function PageHeader() {
    return (
        <header className="app-header">
          <h1 className="title">{` { FriendsList } `}</h1>
          <div className="add-friend-btn">
            <NavLink to="/add" activeClassName="active-link">(+) Add Friend</NavLink>
          </div>
          <div className="home-ink">
            <NavLink to="/" activeClassName="active-link">Home</NavLink>
          </div>
        </header>
    );
}

export default PageHeader;