import React from 'react';
import { NavLink } from 'react-router-dom';

function PageHeader() {
    return (
        <header className="app-header">
          <h1>Friends List</h1>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add">Add Friend</NavLink>
          </div>
        </header>
    );
}

export default PageHeader;