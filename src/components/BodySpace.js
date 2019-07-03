import React from "react";

// Destructing the props
//export const BodySpace = (props) => {
//Method:1
export const BodySpace = ({teammember1,teammember2,children})=>{
//Method:2
//export const BodySpace = props => { 
// const { teammember1, teammember2, children } = props;
  return (
    <div>
      <h3>Body Space Componeet</h3>
      {/* getting children elements from the parent */}
      {children}
      We have a Team of two members. Please kindly see the information below for
      the same.
      <br />
      <br />
      {/* Team member 1) {props.teammember1}  <br/>
      Team member 2) {props.teammember2} */}
      Team member 1) {teammember1} <br />
      Team member 2) {teammember2}
      <hr />
    </div>
  );
};
