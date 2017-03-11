import React from 'react';
import PromiseListItem from './PromiseListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const PromiseList = (props) => (
  <MuiThemeProvider>
    <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Made by</TableHeaderColumn>
            <TableHeaderColumn>Made to</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          { props.promises.map( (promise, i) => <PromiseListItem promise={promise} key={i}/>)}
        </TableBody>
      </Table>
 </MuiThemeProvider>
);

export default PromiseList;