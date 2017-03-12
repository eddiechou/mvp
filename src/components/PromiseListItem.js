import React from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';
const style = {
  margin: 0,
};

const idColWidth = { width: '3rem' };
const nameColWidth = { width: '4rem' };
const descColWidth = { width: '16rem' };
const statusColWidth = { width: '8rem' };

class PromiseListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAccept() {
    console.log('handling accept', this.props.promise._id);
    this.props.promise.status = 'in progress';
    this.forceUpdate();
    $.post({
      url: '/acceptPromise', 
      data: {id: this.props.promise._id},

      success: (data) => {
        console.log('client: successful submit accept for promise');
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleReject() {
    console.log('handling reject: ', this.props.promise._id);
    this.props.promise.status = 'rejected';
    this.forceUpdate();
    $.post({
      url: '/rejectPromise', 
      data: {id: this.props.promise._id},

      success: (data) => {
        console.log('client: successful submit accept for promise');
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    console.log(this.props);
    if (this.props.promise.status === 'waiting approval') {
    // if (true) {
      return (<TableRow>
        <TableRowColumn>{this.props.promise.byUser}</TableRowColumn>
        <TableRowColumn>{this.props.promise.toUser}</TableRowColumn>
        <TableRowColumn style={ descColWidth }>{this.props.promise.description}</TableRowColumn>
        <TableRowColumn style={ statusColWidth }>{this.props.promise.status}</TableRowColumn>
          <TableRowColumn><RaisedButton onClick={this.handleAccept.bind(this)} label="Accept" primary={true} style={style} /></TableRowColumn>
          <TableRowColumn><RaisedButton onClick={this.handleReject.bind(this)} label="Reject" secondary={true} style={style} /></TableRowColumn>
      </TableRow>);
    } else {
      return (<TableRow>
        <TableRowColumn>{this.props.promise.byUser}</TableRowColumn>
        <TableRowColumn>{this.props.promise.toUser}</TableRowColumn>
        <TableRowColumn style={ descColWidth }>{this.props.promise.description}</TableRowColumn>
        <TableRowColumn style={ statusColWidth }>{this.props.promise.status}</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>);
    }

  }
}

export default PromiseListItem;