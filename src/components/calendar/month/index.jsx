import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import CalendarMonthView from './view';
import calendar from '../module';


class CalendarMonth extends Component {
  render() {
    return (
      <CalendarMonthView calender={this.props.calender} currentDate={this.props.currentDate}/>
    );
  }
}

const mapStateToProps = (state, p) => {
  const currentDate = p.match.params.date ? p.match.params.date : moment().format('YYYY-MM-DD')
  return {
    calender: calendar.buildMonthDaysWithReminders(currentDate, state.calendar.reminders),
    currentDate,
  }
};

export default withRouter(connect(mapStateToProps)(CalendarMonth));