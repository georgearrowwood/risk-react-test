import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store'

import CalendarMonth from './components/calendar/month';
import CalendarDay from './components/calendar/day';
import Reminder from './components/calendar/reminder';

const history = createBrowserHistory();
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={CalendarMonth} />
            <Route path="/month/:date" exact component={CalendarMonth} />
            <Route path="/day/:date/reminder/:id" component={Reminder} />
            <Route path="/day/:date" component={CalendarDay} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
