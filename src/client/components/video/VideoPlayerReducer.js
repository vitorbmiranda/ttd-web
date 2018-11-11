import { SELECT_TUTORIAL } from 'Components/tutorial_selector/TutorialSelectorActions';
import { SEEK_TO_POSITION } from './VideoPlayerActions';

const INITIAL_STATE = { tutorial: null, position: 0 };

export default function (state = INITIAL_STATE, { type, tutorial, position }) {
  switch (type) {
    case SELECT_TUTORIAL:
      return { ...state, tutorial };
    case SEEK_TO_POSITION:
      return { ...state, position };
    default:
      return state;
  }
}
