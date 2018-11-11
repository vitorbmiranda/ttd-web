import _ from 'lodash';
import { FETCH_TUTORIALS } from './TutorialsActions';
import { FETCH_LEVELS } from '../levels/LevelsActions';

const INITIAL_STATE = { data: null, error: null };

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_TUTORIALS:
      return { ...state, error: payload.error, data: _.mapKeys(payload.data, 'id') };
    case FETCH_LEVELS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}
