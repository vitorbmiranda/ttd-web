import _ from 'lodash';
import { FETCH_LEVELS } from './LevelsActions';

const INITIAL_STATE = { data: null, error: null };

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_LEVELS:
      return { ...state, error: payload.error, data: _.mapKeys(payload.data, 'level') };
    default:
      return state;
  }
}
