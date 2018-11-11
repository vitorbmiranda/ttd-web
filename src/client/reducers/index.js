import { combineReducers } from 'redux';
import LevelsReducer from 'Components/levels/LevelsReducer';
import TutorialsReducer from 'Components/tutorials/TutorialsReducer';
import VideoPlayerReducer from 'Components/video/VideoPlayerReducer';
import CheckpointsReducer from 'Components/video/CheckpointsReducer';

const rootReducer = combineReducers({
  levels: LevelsReducer,
  tutorials: TutorialsReducer,
  tutorial: VideoPlayerReducer,
  checkpoints: CheckpointsReducer,
});

export default rootReducer;
