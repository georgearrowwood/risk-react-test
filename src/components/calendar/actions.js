
export const addNewReminder = data => ({
  type: 'ADD_REMINDER',
  reminder: data,
});

export const deleteReminder = id => ({
  type: 'DELETE_REMINDER',
  id,
});

export const updateReminder = (id, data) => ({
  type: 'UPDATE_REMINDER',
  id,
  data,
});
