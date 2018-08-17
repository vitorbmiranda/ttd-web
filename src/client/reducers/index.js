import { combineReducers } from 'redux';
import LevelsReducer from 'Components/levels/LevelsReducer';
import TutorialsReducer from 'Components/tutorials/TutorialsReducer';

const rootReducer = combineReducers({
  levels: LevelsReducer,
  tutorials: TutorialsReducer,
});

export default rootReducer;
