import React from 'react';
import PromiseListItem from './PromiseListItem';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
        <Card>
          <CardHeader
                title="New Promise Form"
              />
            <CardText>
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
                  hintText="Whiteboard ALL the things!"
                  floatingLabelText="Description of Promise"
                />
                <br/>
                <RaisedButton type="submit" label="Make A New Promise" primary={true}/>
              </form>
            </CardText>
        </Card>
        </MuiThemeProvider>
    );
  }
}

export default PromiseForm;