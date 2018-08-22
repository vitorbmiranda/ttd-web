import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Components/common/button/Button';
import { selectTutorial } from './TutorialSelectorActions';

const TutorialSelector = (props) => {
  const { title, videoId } = props;
  const tutorial = { videoId };
  return (<Button label={title} onClick={() => props.selectTutorial(tutorial)} />);
};

TutorialSelector.propTypes = {
  title: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  selectTutorial: PropTypes.func.isRequired,
};

module.exports = connect(null, { selectTutorial })(TutorialSelector);
