import React from 'react';
import $ from 'jquery';

import Home from './components/Home';
import LoggedIn from './components/LoggedIn';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promises: []
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
    // If logged in
    // if (this.state.idToken) {
    return (
      <MuiThemeProvider>
        <LoggedIn promises={this.state.promises} lock={this.lock} idToken={this.state.idToken} />
      </MuiThemeProvider>);
    // } else {  // Not logged in
      // return (<Home lock={this.lock} />);
    // }
  }


}
export default App;