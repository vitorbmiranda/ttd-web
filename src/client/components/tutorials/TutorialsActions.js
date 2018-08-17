import get from './TutorialsAPI';

export const FETCH_TUTORIALS = 'FETCH_TUTORIALS';

export function fetchTutorials(level) {
  return {
    type: FETCH_TUTORIALS,
    payload: get(level),
  };
}
