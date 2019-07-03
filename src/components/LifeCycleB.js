import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ganesh"
    };
    console.log("LifeCycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB GetDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componenetDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true; // mandatory statement
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB Render");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
