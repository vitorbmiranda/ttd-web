import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/">The-elite Tutorials Database</a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="https://www.the-elite.net" rel="noopener noreferrer" target="_blank">the-elite.net</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ble">GE Tutorials Topic</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/ble">PD Tutorials Topic</a>
      </li>
    </ul>
  </nav>
);

module.exports = Header;
