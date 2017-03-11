import React from 'react';
import PromiseForm from './PromiseForm';
import PromiseList from './PromiseList';
import AppBar from 'material-ui/AppBar';

var LoggedIn = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar title="My AppBar" />
        <h1>Promise Dashboard</h1>
        <PromiseList promises={this.props.promises}/>
        <PromiseForm/>
      </div>
    );
  }
});

export default LoggedIn;