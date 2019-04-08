import moment from 'moment';

export default {

  buildMonthDays(date, reminders) {
    if (!date) return null;
    const firstMonthDay = moment(date).format('YYYY-MM-01')
    const firstMonthDayWeekDay = moment(firstMonthDay).day();
    let row = 0;
    const days = [[]]

    for (let day = 1; day < firstMonthDayWeekDay; day++ ) {
      days[row].push(this.createDay());
    }
    let dayOfWeek = firstMonthDayWeekDay;
    for (let monthDay = 0; monthDay < moment(date, "YYYY-MM-DD").daysInMonth(); monthDay++ ) {
      if (dayOfWeek === 8) {
        row++;
        dayOfWeek = 1;
      }
      if (!days[row]) days[row] = [];
      days[row].push(this.createDay(moment(date).date((monthDay + 1)).format('YYYY-MM-DD'), reminders));
      dayOfWeek++;
    }
    for (let day = 0; day <= 7 - dayOfWeek; day++ ) {
      days[row].push(this.createDay());
    }
    return days;
  },

  createDay(date, reminders) {
    return {
      day: date ? moment(date).format("D") : null,
      date,
      reminders: this.getRemindersForADay(reminders, date),
    };
  },

  getRemindersForADay(reminders, date) {
    if (!reminders || !reminders.length) return [];
    const startTime = moment(date, "YYYY-MM-DD").set({hour:0,minute:0,second:0});
    const endTime = moment(date,  "YYYY-MM-DD").set({hour:23,minute:59,second:59});
    return reminders.filter(row => moment(row.time).isBetween(
      startTime,
      endTime
    ))
      .sort((a, b) => (a.time < b.time ? -1 : 1))
  },

  buildMonthDaysWithReminders(date, reminders) {
    const sortedReminders = reminders.sort((a, b) => a.time < b.time);
    return this.buildMonthDays(date, sortedReminders);
  },
};
