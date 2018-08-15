import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'Components/common/button/Button';
import { fetchLevels } from '../levels/LevelsActions';

const GameSelector = (props) => {
  const { label } = props;
  return <Button label={label} onClick={() => props.getLevels(label)} />;
};

GameSelector.propTypes = {
  label: PropTypes.string.isRequired,
  getLevels: PropTypes.func.isRequired,
};

module.exports = connect(null, { getLevels: fetchLevels })(GameSelector);
