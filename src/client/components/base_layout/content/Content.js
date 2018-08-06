import React from 'react';
import LevelsPane from './pane/levels/LevelsPane';
import TutorialsPane from './pane/tutorials/TutorialsPane';
import VideoPane from './pane/video/VideoPane';
import './style.scss';

const Content = () => (
  <div id="content" className="row">
    <LevelsPane />
    <TutorialsPane />
    <VideoPane />
  </div>
);

module.exports = Content;
