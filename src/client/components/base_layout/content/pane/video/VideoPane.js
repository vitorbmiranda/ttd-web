import React from 'react';
import VideoPlayer from 'Components/video/VideoPlayer';
import './style.scss';

const VideoPane = () => (
  <div id="video-pane" className="col-md-8">
    <VideoPlayer url="https://www.youtube.com/embed/yfrvHO99mks" />
  </div>
);

module.exports = VideoPane;
