import React from "react";

// const UpdatedComponent = OriginalComponent => {
// const withCounter = WrappedComponent => {
const withCounter = (WrappedComponent,incrementNumber) => {

//   class NewComponent extends React.Component {
  class WithComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    increamentCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
        console.log(this.props.name);
      return <WrappedComponent count={this.state.count} increamentCount={this.increamentCount}  {...this.props}/>;
    //   return <OriginalComponent count={this.state.count} increamentCount={this.increamentCount} />;

    }
  }
  return WithComponent;
//   return NewComponent;

};

export default withCounter;
