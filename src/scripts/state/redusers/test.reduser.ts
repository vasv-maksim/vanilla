import { ActionTypes } from '../actions/actions';
import { State, ActionMessage } from '../models';

const initialState: State = { testState: 'initial' };

export function testReducer(state = initialState, action: ActionMessage) {
  switch (action.type) {
    case ActionTypes.ONE_TEST:
      return { ...state, testState: action.payload.message };
    case ActionTypes.OTHER_TEST:
      return { ...state, testState: action.payload.message };
    default:
      return state;
  }
}
