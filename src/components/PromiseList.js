import React from 'react';
import PromiseListItem from './PromiseListItem';

const PromiseList = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.promises.length } promises.
    { props.promises.map(promise => <PromiseListItem promise={promise}/>)}
  </div>
)

export default PromiseList;