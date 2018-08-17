import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LevelSelector from '../level_selector/LevelSelector';

class LevelsList extends Component {
  render() {
    const { levels, error } = this.props;

    if (error) {
      return <div>Oops something happened!</div>;
    } if (!levels) {
      return <div>Select a game!</div>;
    }

    return _.map(levels, (level => (
      <LevelSelector key={level.key} name={level.name} />
    )));
  }
}

const mapStateToProps = state => ({
  levels: state.levels.data,
  error: state.levels.error,
});

LevelsList.propTypes = {
  levels: PropTypes.object,
  error: PropTypes.object,
};

LevelsList.defaultProps = {
  levels: null,
  error: null,
};

module.exports = connect(mapStateToProps)(LevelsList);
