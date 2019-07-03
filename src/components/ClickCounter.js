import React, { Component } from "react";
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  
  render() {
    const {count,increamentCount} = this.props
    return (
     
        <button onClick={increamentCount}>{this.props.name} Clicked {count} Times</button>
      
    );
  }
}

export default UpdatedComponent(ClickCounter,5)
