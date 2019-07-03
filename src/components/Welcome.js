import React from "react";

const Welcome = props => {
  /* props usage in functional component */

  return (
    <div>
      <p>Welcome back {props.name}</p>
      <hr />
    </div>
  );
};

export default Welcome;
