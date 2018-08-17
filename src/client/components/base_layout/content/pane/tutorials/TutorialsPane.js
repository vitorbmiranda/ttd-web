import React from 'react';
import TutorialsList from 'Components/tutorials/TutorialsList';
import './style.scss';

const TutorialsPane = () => (
  <div id="tutorials-pane" className="col-md-2">
    <TutorialsList />
  </div>
);

module.exports = TutorialsPane;
