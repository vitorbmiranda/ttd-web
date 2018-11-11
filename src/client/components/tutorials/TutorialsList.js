import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TutorialSelector from '../tutorial_selector/TutorialSelector';

class TutorialsList extends Component {
  render() {
    const { tutorials, error } = this.props;

    if (error) {
      return <div>Oops something happened!</div>;
    } if (!tutorials) {
      return <div>Select a level!</div>;
    }

    return _.map(tutorials, (tutorial => (
      <TutorialSelector
        key={tutorial.id}
        id={tutorial.id}
        title={tutorial.title}
        videoId={tutorial.video_id}
      />
    )));
  }
}

const mapStateToProps = state => ({
  tutorials: state.tutorials.data,
  error: state.tutorials.error,
});

TutorialsList.propTypes = {
  tutorials: PropTypes.object,
  error: PropTypes.object,
};

TutorialsList.defaultProps = {
  tutorials: null,
  error: null,
};

module.exports = connect(mapStateToProps)(TutorialsList);
