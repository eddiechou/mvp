import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import RaisedButton from 'material-ui/RaisedButton';

var Login = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar title="PromiseKeeper" />
        <Card>
          <CardHeader title="Log In"/>
            <CardText>
              <form action="/promises" onSubmit={this.props.handleSignIn} className="promiseForm" >
                <TextField name="username"
                  floatingLabelText="Username"
                />
                <br/>
                <TextField name="password"
                  floatingLabelText="Password"
                  type="password"
                />
                <br/>
                <RaisedButton type="submit" label="Log In" primary={true}/>
              </form>
            </CardText>
        </Card>
      </div>
    );
  }
});

export default Login;