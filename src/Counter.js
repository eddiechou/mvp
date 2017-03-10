import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class PointsCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Points: {this.state.count}
      </button>
    );
  }
}
export default PointsCounter;