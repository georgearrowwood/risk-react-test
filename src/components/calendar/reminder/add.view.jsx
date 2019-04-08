import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ReminderAddView = (props) => {
  const {handleSubmit, currentDate} = props;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input name="date" id="date" value={currentDate} disabled/>
        </FormGroup>
        <FormGroup>
          <Label for="time">Time</Label>
          <Input name="time" id="time" placeholder="HH:MM" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Text</Label>
          <Input name="text" id="text" placeholder="Text of reminder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
};

// ReminderAddView.propTypes = {
//   title: PropTypes.string,
// };

export default ReminderAddView;