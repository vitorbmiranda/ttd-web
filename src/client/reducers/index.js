import { combineReducers } from 'redux';
import LevelsReducer from 'Components/levels/LevelsReducer';

const rootReducer = combineReducers({
  levels: LevelsReducer,
});

export default rootReducer;
