import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from "react-router-dom";
import moment from 'moment';
import { Button } from 'reactstrap';

import './style.scss';

const renderReminder = (reminder, key) => {
  return (
    <div key={key} className="calendar-month__day-reminder-block">
      <div className="calendar-month__day-reminder-content">
        {moment(reminder.time).format('HH:mm')} {reminder.text}
      </div>
    </div>
  )
};

const renderDay = (day, key) => {
  const dayLink = `/day/${day.date}`;
  return (
    <div key={key} className="calendar-month__day">
      <div className="calendar-month__day-number-label">
        {day.date && (
          <Link  to={dayLink}>
            {day.day}
          </Link>
        )}
      </div>
      {day.reminders.length > 0 && (
        <div className="calendar-month__day-reminders-block">
          {(day.reminders.length > 2 ? day.reminders.slice(0,2) : day.reminders).map(renderReminder)}
        </div>
      )}
      {day.reminders.length > 2 && (
        <div className="calendar-month__day-reminders-view-all">
          <Link to={dayLink}>
            View {day.reminders.length - 2} more
          </Link>
        </div>
      )}
    </div>
  );
};

const renderWeek = (week, key) => (
  <div key={key} className="calendar-month__week">
    {week.map(renderDay)}
  </div>
);

const CalendarView = ({calender, currentDate }) => {
  const prevMonthLink = `/month/${moment(currentDate).subtract(1, 'months').format('YYYY-MM-01')}`;
  const nextMonthLink = `/month/${moment(currentDate).add(1, 'months').format('YYYY-MM-01')}`;
  return (
    <div>
      <h2>
        {moment(currentDate).format('MMMM, YYYY')}
      </h2>
      <div className="calendar-month">
        <div className="calendar-month__header">
          <div>Monday</div>
          <div>Tuesday</div>
          <div >Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        {calender &&
          calender.map(renderWeek)
        }
      </div>
      <div>
        <Link to={prevMonthLink}>
          <Button color="primary" size="lg">Previous Month</Button>
        </Link>
        <Link to={nextMonthLink}>
          <Button color="primary" size="lg">Next Month</Button>
        </Link>
      </div>
    </div>
  )
};

// CalendarView.propTypes = {
//   calender: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
// };

export default CalendarView;
