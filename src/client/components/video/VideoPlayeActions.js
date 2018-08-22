export const SEEK_TO_POSITION = 'SEEK_TO_POSITION';

export function seekToPosition(position) {
  console.log('yay');
  return {
    type: SEEK_TO_POSITION,
    position,
  };
}
