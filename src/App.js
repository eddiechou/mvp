import React from 'react';
import $ from 'jquery';

import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promises: [],
      loggedIn: true,
      username: ''
    };
  }

  componentDidMount() {
    // AJAX call to retrieve all the promises
    $.ajax({
      url: '/promises', 
      success: (data) => {
        this.setState({
          promises: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <MuiThemeProvider>
          <Dashboard promises={this.state.promises}/>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
          <SignIn/>
        </MuiThemeProvider>
      );
    } 
  }
}
export default App;