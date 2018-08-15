import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LevelsList extends Component {
  render() {
    const { levels, error } = this.props;
    console.log(error);
    if (!levels) return <div>empty!</div>;
    if (error) return <div>oops something happened!</div>;
    return _.map(levels, (level => (
      <div key={level.name}>{level.name}</div>
    )));
  }
}

function mapStateToProps(state) {
  return {
    levels: state.levels.data,
    error: state.levels.error,
  };
}

LevelsList.propTypes = {
  levels: PropTypes.object,
  error: PropTypes.object,
};

LevelsList.defaultProps = {
  levels: null,
  error: null,
};

module.exports = connect(mapStateToProps)(LevelsList);
