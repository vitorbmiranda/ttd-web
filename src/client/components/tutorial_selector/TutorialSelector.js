import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Components/common/button/Button';
import { selectTutorial } from './TutorialSelectorActions';
import { fetchCheckpoints } from '../video/CheckpointsActions';

const TutorialSelector = (props) => {
  const { title, videoId, id } = props;
  const tutorial = { videoId };
  return (
    <Button
      label={title}
      onClick={() => props.selectTutorial(tutorial) && props.fetchCheckpoints(id)}
    />
  );
};

TutorialSelector.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectTutorial: PropTypes.func.isRequired,
  fetchCheckpoints: PropTypes.func.isRequired,
};

module.exports = connect(null, { selectTutorial, fetchCheckpoints })(TutorialSelector);
