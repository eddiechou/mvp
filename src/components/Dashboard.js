import React from 'react';
import PromiseForm from './PromiseForm';
import PromiseList from './PromiseList';
import AppBar from 'material-ui/AppBar';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


var Dashboard = React.createClass({

  render: function() {
    return (

      <div>
        <AppBar title="PromiseKeeper" />
        <PromiseList promises={this.props.promises}/>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <PromiseForm/>
        </MuiThemeProvider>
      </div>
    );
  }
});

export default Dashboard;