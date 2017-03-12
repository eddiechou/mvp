import React from 'react';
import PromiseListItem from './PromiseListItem';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

      // <MuiThemeProvider>
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
          <br/>
          <TextField name="toUser"
            hintText="Erik"
            floatingLabelText="Person promise is being made to"
          />
          <br/>
          <TextField name="description"
            hintText="Make an awesome MVP!"
            floatingLabelText="Description of Promise"
          />
          <br/>
          <input type="submit" value="Promise!" />
        </form>
        </div>
        </MuiThemeProvider>
    );
  }
}
      // </MuiThemeProvider>);

export default PromiseForm;