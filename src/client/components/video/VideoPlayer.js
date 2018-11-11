import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

import CheckpointsList from './CheckpointsList';


import './style.scss';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    // need explicit binding so our functions can call setState
    this.ready = this.ready.bind(this);
    this.seekTo = this.seekTo.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { tutorial: { tutorial: { videoId }, position } } = this.props;

    // if the video url has changed
    if (prevProps.tutorial.tutorial && prevProps.tutorial.tutorial.videoId !== videoId) {
      this.setState({ loading: true }); // fix this!
    }

    // if the video position has been changed
    if (prevProps.position !== position) {
      this.seekTo(position);
    }
  }

  ready(e) {
    // add the player js object in the state so we can handle it later
    this.setState({ player: e, loading: false });
    this.seekTo(0);
  }

  seekTo(position) {
    const { player } = this.state;
    player.target.seekTo(position);
  }

  render() {
    const { tutorial } = this.props;

    if (!tutorial.tutorial || !tutorial.tutorial.videoId) {
      return <div>Select a tutorial!</div>;
    }

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div className="video-player">
        <CheckpointsList />
        <div className="embed-responsive embed-responsive-16by9">
          <YouTube
            videoId={tutorial.tutorial.videoId} // fix this!
            opts={opts}
            onReady={this.ready}
            // onStateChange={() => console.log('yay')}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tutorial: state.tutorial,
});

VideoPlayer.propTypes = {
  tutorial: PropTypes.object.isRequired,
  position: PropTypes.number,
};

VideoPlayer.defaultProps = {
  position: 0,
};

export default connect(mapStateToProps)(VideoPlayer);
