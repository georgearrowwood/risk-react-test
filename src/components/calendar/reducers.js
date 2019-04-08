import moment from 'moment';

const defaultState = {
  reminders: [
    {time: moment("2019-04-05 12:12:12",  "YYYY-MM-DD HH:mm:SS").format(), text: "Go to shop", id: '32534'},
    {time: moment("2019-04-05 15:12:12",  "YYYY-MM-DD HH:mm:SS").format(), text: "Go to library", id: '5353453'},
    {time: moment("2019-04-05 13:12:12",  "YYYY-MM-DD HH:mm:SS").format(), text: "Go to another shop", id: '34535345'},
    {time: moment("2019-04-08 12:12:12",  "YYYY-MM-DD HH:mm:SS").format(), text: "Go to shop", id: '45353453'},
  ],
  calendar: null,
};

function calendarReducer(state = defaultState, action) {
  switch (action.type) {
  case 'ADD_REMINDER':
    return {
      ...state,
      reminders: [ ...state.reminders, { ...action.reminder, id: Math.floor(Math.random() * 100) } ]
    };
  case 'DELETE_REMINDER':
    return {
      ...state,
      reminders: state.reminders.filter(item => item.id != action.id)
    };
  case 'SET_CURRENT_REMINDER':
    return {
      ...state,
      currentReminder: state.reminders.find(row => row.id === action.id)
    };
  case 'UPDATE_REMINDER':
    return {
      ...state,
      reminders: [
        ...state.reminders.filter(row => row.id != action.id),
        { ...action.data, id: action.id }
      ]
    };
  default:
    return state;
  }
}

export default calendarReducer;
