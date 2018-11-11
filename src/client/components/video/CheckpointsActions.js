import get from './CheckpointsAPI';

export const FETCH_CHECKPOINTS = 'FETCH_CHECKPOINTS';

export function fetchCheckpoints(tutorialId) {
  return {
    type: FETCH_CHECKPOINTS,
    payload: get(tutorialId),
  };
}
