import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReduser from './redusers/rootReduser';
import './redusers/test.reduser';

export const store = createStore(rootReduser,
  composeWithDevTools(applyMiddleware(thunk)));
