import React from 'react';
import AppBar from 'material-ui/AppBar';

var Login = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar title="PromiseKeeper" />
        <h1>Login Page</h1>
      </div>
    );
  }
});

export default Login;