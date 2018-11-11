import _ from 'lodash';
import { FETCH_CHECKPOINTS } from './CheckpointsActions';

const INITIAL_STATE = { data: null, error: null };

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_CHECKPOINTS:
      return { ...state, error: payload.error, data: _.mapKeys(payload.data, 'label') };
    default:
      return state;
  }
}
