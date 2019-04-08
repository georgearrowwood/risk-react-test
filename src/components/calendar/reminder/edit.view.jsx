import React from 'react';

import moment from 'moment';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ReminderEditView = (props) => {
  const { handleSubmit, data } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit} >
        <FormGroup>
          <Label for="time">Time</Label>
          <Input name="time" id="time" defaultValue={moment(data.time).format('YYYY-MM-DD HH:mm')} />
        </FormGroup>
        <FormGroup>
          <Label for="text">Text</Label>
          <Input name="text" id="text" defaultValue={data.text}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
};

// ReminderEditView.propTypes = {
//   title: PropTypes.string,
// };

export default ReminderEditView;