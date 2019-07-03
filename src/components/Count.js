import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCounter() {
    /*
    this.setState({
        count:this.state.count+1
    }, ()=>{console.log("Call Back value is ",this.state.count)}
    )*/

    // using set State method
    this.setState((prevState, props) => ({
      //count: prevState.count + props.addValue
      count: prevState.count + 1
    }));
    //console.log(this.state.count);
  }

  incrementFive() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }

  render() {
    return (
      <div>
        count - {this.state.count} <br />
        <button onClick={() => this.incrementCounter()}> Click me</button>
      </div>
    );
  }
}

export default Count;
