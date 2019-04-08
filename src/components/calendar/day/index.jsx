import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import moment from 'moment';

import { deleteReminder } from '../actions';
import CalendarDayView from './view';
import calendar from '../module';

class CalendarDay extends Component {
  constructor() {
    super();
    this.onClickDeleteReminder = this.onClickDeleteReminder.bind(this);
  }

  onClickDeleteReminder(e, id){
    this.props.deleteReminder(id)
  }

  render() {
    return (
      <CalendarDayView 
        reminders={this.props.reminders} 
        currentDate={this.props.currentDate} 
        onClickDeleteReminder={this.onClickDeleteReminder}
      />
    );
  }
}

const mapStateToProps = (state, p) => {
  const currentDate = p.match.params.date ? p.match.params.date : moment().format('YYYY-MM-DD')
  return{
    reminders: calendar.getRemindersForADay(state.calendar.reminders, currentDate),
    currentDate,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReminder: id => dispatch(deleteReminder(id)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CalendarDay));