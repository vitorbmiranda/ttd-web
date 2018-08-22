import Header from 'Components/base_layout/header/Header';
import React from 'react';
import Content from 'Components/base_layout/content/Content';

const App = () => (
  <div id="app" className="container-fluid">
    <Header />
    <Content />
  </div>
);

module.exports = App;
