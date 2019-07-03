import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <ComponentF />
        ComponentE context - {this.context}
      </div>
      
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;
