import { Action, Message } from '../models';

export enum ActionTypes {
  ONE_TEST = '[TEST] TEST_ACTION',
  OTHER_TEST = '[TEST] TEST_ACTION'
}

export const oneTestAction = (message: Message): Action => ({
  type: ActionTypes.ONE_TEST,
  payload: message,
});

export const otherTestAction = (message: Message): Action => ({
  type: ActionTypes.OTHER_TEST,
  payload: message,
});
