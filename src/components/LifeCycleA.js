import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ganesh"
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA GetDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componenetDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true; // mandatory statement
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = event => {
    this.setState({
      name: "Bannu"
    });
  };

  render() {
    console.log("LifecycleA Render");
    return (
      <div>
        LifeCycleA
        <br />
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
