import React from 'react';
import { Alert, Button } from 'reactstrap';
import moment from 'moment';
import {  Link } from "react-router-dom";

import './style.scss';

const renderReminder = (reminder, key, currentDate, onClickDeleteReminder) => {
  return (
    <Alert color="primary" key={key}>
      <Link  to={`/day/${currentDate}/reminder/${reminder.id}`}>
        {moment(reminder.time).format('DD.MM.YYYY HH:mm')} {reminder.text}
      </Link>
      <Button
        color="danger"
        size="sm"
        className="day-reminder-delete-button"
        onClick={e => onClickDeleteReminder(e, reminder.id)}
      >
        Delete
      </Button>
    </Alert>
  )
}

const CalendarDayView = ({reminders, currentDate, onClickDeleteReminder}) => (
  <div>
    { reminders.length > 0 &&
      reminders.map((el, key) => renderReminder(el, key, currentDate, onClickDeleteReminder))
    }
    <Link  to={`/day/${currentDate}/reminder/new`}>
      <Button color="info" size="lg">Add New Reminder</Button>
    </Link>
    <Link  to={`/month/${currentDate}`}>
      <Button color="primary" size="lg">Back To Month View</Button>
    </Link>
  </div>
);

// CalendarDayView.propTypes = {
//   title: PropTypes.string,
// };

export default CalendarDayView;
