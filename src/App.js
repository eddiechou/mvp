import React, {Component} from 'react';
import $ from 'jquery';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import MainLayout from './components/MainLayout';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

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
          promises: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleSignIn(username) {
    this.setState({
      loggedIn: true,
      username: username
    });
  }

  // render() {
  //   if(!this.state.isLoggedIn) {
  //     return 
  //   }
  //   return (
  //     <Router history={hashHistory}>
  //       <Route component={MainLayout}>
  //         <Route path ='/' component={Dashboard} promises={this.state.promises}/>
  //         <Route path="login" component={Login} />
  //       </Route>
  //     </Router>
  //   );
  // }

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
          <Login handleSignIn={this.handleSignIn.bind(this)}/>
        </MuiThemeProvider>
      );
    } 
  }

}



export default App;