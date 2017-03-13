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
    $.ajax({
      url: '/promises',
      success: (data) => {
        this.setState({
          promises: data,
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  handleSignIn(username) {
    console.log('Handling signin', this);
    this.setState({
      loggedIn: true,
      username: 'eddie'
    });
    this.forceUpdate();
    console.log('After setState', this);

    
  }

  render() {
    if (!this.state.loggedIn) {
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