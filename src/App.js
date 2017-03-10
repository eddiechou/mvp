import React from 'react';
import $ from 'jquery';
import PointsCounter from './Counter';
import PromiseList from './components/PromiseList';


/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promises: []
    };
  }

  componentDidMount() {
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

  render() {
    return (<div>
        <h1>PromiseKeeper</h1>
        <PointsCounter/>
        <PromiseList promises={this.state.promises}/>
      </div>
    );
  }
}
export default App;