export const SELECT_TUTORIAL = 'SELECT_TUTORIAL';

export function selectTutorial(tutorial) {
  return {
    type: SELECT_TUTORIAL,
    tutorial,
  };
}
