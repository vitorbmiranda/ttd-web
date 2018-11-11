import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Components/common/button/Button';
import { seekToPosition } from './VideoPlayerActions';

const VideoSeeker = (props) => {
  const { label, position } = props;
  return (<Button label={label} onClick={() => props.seekToPosition(position)} />);
};

VideoSeeker.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  seekToPosition: PropTypes.func.isRequired,
};

module.exports = connect(null, { seekToPosition })(VideoSeeker);
