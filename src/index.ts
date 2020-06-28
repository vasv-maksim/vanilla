import './styles/global.scss';
import { store } from './scripts/state/store';
import { oneTestAction, otherTestAction } from './scripts/state/actions/actions';

const main = (): void => {
  // Code entry
  store.dispatch(oneTestAction({ message: 'Test Massege' }));
  store.dispatch(otherTestAction({ message: 'Other Tast massege' }));
};
main();
