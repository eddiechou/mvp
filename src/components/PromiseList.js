import React from 'react';
import PromiseListItem from './PromiseListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const PromiseList = (props) => (
  <MuiThemeProvider>
    <Table>
        <TableHeader displaySelectAll={null} adjustForCheckbox={null}>
          <TableRow>
            <TableHeaderColumn>Made by</TableHeaderColumn>
            <TableHeaderColumn>Made to</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={null}>
          { props.promises.map(promise => <PromiseListItem promise={promise}/>)}
        </TableBody>
      </Table>
 </MuiThemeProvider>
)

export default PromiseList;