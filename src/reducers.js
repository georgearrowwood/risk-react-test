import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import calendar from './components/calendar/reducers';

export default (history) => combineReducers({
  calendar,
  router: connectRouter(history),
});
