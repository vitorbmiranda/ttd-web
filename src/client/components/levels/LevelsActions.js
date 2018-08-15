import get from './LevelsAPI';

export const FETCH_LEVELS = 'FETCH_LEVELS';

export function fetchLevels(game) {
  return {
    type: FETCH_LEVELS,
    payload: get(game.toLowerCase()),
  };
}
