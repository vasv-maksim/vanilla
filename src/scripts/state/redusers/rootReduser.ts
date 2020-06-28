import { combineReducers } from 'redux';
import { testReducer } from './test.reduser';

const rootReduser = combineReducers({
  test: testReducer,
});

export default rootReduser;
