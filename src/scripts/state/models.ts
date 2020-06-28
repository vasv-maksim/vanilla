export interface State {
  testState: string
}

export interface Action {
  type: string;
  payload?: any;
}

export interface Message {
  message: string;
}

export interface ActionMessage {
  type: string;
  payload: Message;
}
