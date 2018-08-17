import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTutorials } from 'Components/tutorials/TutorialsActions';
import Button from 'Components/common/button/Button';

const LevelSelector = (props) => {
  const { name } = props;
  return (<Button label={name} onClick={() => props.fetchTutorials(name)} />);
};

LevelSelector.propTypes = {
  name: PropTypes.string.isRequired,
  fetchTutorials: PropTypes.func.isRequired,
};

module.exports = connect(null, { fetchTutorials })(LevelSelector);
