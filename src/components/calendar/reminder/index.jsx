import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import moment from 'moment';

import { addNewReminder, updateReminder } from '../actions';
import ReminderAddView from './add.view';
import ReminderEditView from './edit.view';

class Reminder extends Component {
  constructor() {
    super();
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

  onClickAdd(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    this.props.addNewReminder({
      time: this.props.currentDate + ' ' + data.get('time'),
      text: data.get('text'),
    })
    this.props.history.push(`/day/${this.props.currentDate}`)
  }

  onClickUpdate(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    this.props.updateReminder(this.props.currentReminder.id, {
      time: data.get('time'),
      text: data.get('text'),
    })
    this.props.history.push(`/day/${this.props.currentDate}`)
  }

  render() {
    return (
      <div>
        {this.props.mode === 'add' && this.props.currentDate != null &&
          <ReminderAddView handleSubmit={this.onClickAdd} currentDate={this.props.currentDate}/>
        }  
        {this.props.mode === 'edit' && this.props.currentReminder != null &&
          <ReminderEditView handleSubmit={this.onClickUpdate} data={this.props.currentReminder} />
        }  
      </div>
    );
  }
}

const mapStateToProps = (state, p) => {
  const currentDate = p.match.params.date ? p.match.params.date : moment().format('YYYY-MM-DD');
  const id = p.match && p.match.params && p.match.params.id ? p.match.params.id : 'new';
  const mode = id === 'new' ? 'add' : 'edit';
  const props = {
    currentDate,
    mode,
  }
  if (mode === 'edit' && state.calendar) {
    props.currentReminder = state.calendar.reminders.find(el => el.id == id);
  }
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    addNewReminder: (data) => dispatch(addNewReminder(data)),
    updateReminder: (id, data) => dispatch(updateReminder(id, data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reminder));