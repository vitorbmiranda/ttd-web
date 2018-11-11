import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTutorials } from 'Components/tutorials/TutorialsActions';
import Button from 'Components/common/button/Button';

const LevelSelector = (props) => {
  const { level } = props;
  return (<Button label={level} onClick={() => props.fetchTutorials(level)} />);
};

LevelSelector.propTypes = {
  level: PropTypes.string.isRequired,
  fetchTutorials: PropTypes.func.isRequired,
};

module.exports = connect(null, { fetchTutorials })(LevelSelector);
