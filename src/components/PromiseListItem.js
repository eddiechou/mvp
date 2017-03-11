import React from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const PromiseListItem = (props) => (
  <TableRow>
    <TableRowColumn>{props.promise.byUser}</TableRowColumn>
    <TableRowColumn>{props.promise.toUser}</TableRowColumn>
    <TableRowColumn>{props.promise.description}</TableRowColumn>
  </TableRow>
)

export default PromiseListItem;