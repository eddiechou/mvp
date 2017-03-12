import React, {Component} from 'react';
import $ from 'jquery';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promises: [],
      loggedIn: false,
      username: ''
    };
  }

  componentDidMount() {
    // AJAX call to retrieve all the promises
    
  }

  handleSignIn(username) {
    console.log('Handling signin');
    this.setState({
      loggedIn: true,
      username: 'eddie'
    });

    $.ajax({
      url: '/promises',
      data: '/',
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
          <Dashboard username={this.state.username} promises={this.state.promises}/>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider>
          <Login handleSignIn={this.handleSignIn.bind(this)}/>
        </MuiThemeProvider>
      );
    } 
  }
}



export default App;