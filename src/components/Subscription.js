import React, { Component } from "react";

class Subscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Please Subscribe to Our Channel"
    };
  }

  subscribe() {
    this.setState(
      {
        message: "Thanks for Subscribing"
      },
      () => {
        console.log(this.state.message);
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.message}
        <br />
        <button onClick={() => this.subscribe()}>
          Click here to Subscribe
        </button>
      </div>
    );
  }
}

export default Subscription;
