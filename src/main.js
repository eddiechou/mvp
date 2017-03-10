import React from 'react';
import ReactDOM from 'react-dom';
import PointsCounter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <PointsCounter/>,
    document.getElementById('mount')
  );
});