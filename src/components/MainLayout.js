import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

var MainLayout = React.createClass({

  render: function() {
    return (
      <MuiThemeProvider>
        <AppBar title="PromiseKeeper" />
      </MuiThemeProvider>
    );
  }
});

export default MainLayout;