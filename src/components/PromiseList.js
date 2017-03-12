import React from 'react';
import PromiseListItem from './PromiseListItem';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const idColWidth = { width: '2rem' };
const nameColWidth = { width: '4rem' };
const descColWidth = { width: '16rem' };
const statusColWidth = { width: '8rem' };

const PromiseList = (props) => (
  <div>
    <h1>Promise Dashboard</h1>
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Made by</TableHeaderColumn>
            <TableHeaderColumn>Made to</TableHeaderColumn>
            <TableHeaderColumn style={ descColWidth }>Description</TableHeaderColumn>
            <TableHeaderColumn style={ statusColWidth }>Status</TableHeaderColumn>
            <TableHeaderColumn>Accept</TableHeaderColumn>
            <TableHeaderColumn>Reject</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { props.promises.map( (promise, i) => <PromiseListItem promise={promise} key={i}/>)}
        </TableBody>
      </Table>
    </div>
);

export default PromiseList;