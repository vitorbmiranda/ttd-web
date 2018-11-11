import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoSeeker from './VideoSeeker';

class LevelsList extends Component {
  render() {
    const { checkpoints, error } = this.props;

    if (error) {
      return <div>Oops something happened!</div>;
    }

    return _.map(checkpoints, (chk => (
      <VideoSeeker key={chk.id} label={chk.label} position={chk.seconds} />
    )));
  }
}

const mapStateToProps = state => ({
  checkpoints: state.checkpoints.data,
  error: state.checkpoints.error,
});

LevelsList.propTypes = {
  checkpoints: PropTypes.object,
  error: PropTypes.object,
};

LevelsList.defaultProps = {
  checkpoints: null,
  error: null,
};

module.exports = connect(mapStateToProps)(LevelsList);
