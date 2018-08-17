import React from 'react';
import PropTypes from 'prop-types';

const TutorialSelector = (props) => {
  const { title } = props;
  return (<div>{title}</div>);
};

TutorialSelector.propTypes = {
  title: PropTypes.string.isRequired,
};

module.exports = TutorialSelector;
