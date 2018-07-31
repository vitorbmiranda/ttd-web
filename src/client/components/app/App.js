const React = require('react');
const Header = require('Components/header/Header');
const Body = require('Components/body/Body');

const App = () => (
  <div className="container-fluid">
    <Header />
    <Body />
  </div>
);

module.exports = App;
