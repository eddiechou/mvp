import React from 'react';
import PromiseListItem from './PromiseListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class PromiseForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hello');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <h1>New Promise Form</h1>
        <form action="/promises" method="post" className="promiseForm" >
          <TextField name="byUser"
            hintText="Eddie"
            floatingLabelText="Person making the promise"
          />
          <TextField name="toUser"
            hintText="Erik"
            floatingLabelText="Person promise is being made to"
          />
          <TextField name="description"
            hintText="Make an awesome MVP!"
            floatingLabelText="Description of Promise"
          />
          <input type="submit" value="Promise!" />
        </form>
        </div>
      </MuiThemeProvider>);
  }
}

export default PromiseForm;