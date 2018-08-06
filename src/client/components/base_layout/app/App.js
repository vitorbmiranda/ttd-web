import Header from 'Components/base_layout/header/Header';
import React from 'react';
import Content from 'Components/base_layout/content/Content';
import Footer from 'Components/base_layout/footer/Footer';

const App = () => (
  <div id="app" className="container-fluid">
    <Header />
    <Content />
    <Footer />
  </div>
);

module.exports = App;
