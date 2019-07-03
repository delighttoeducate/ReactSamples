import React from "react";
import TableData from "./TableData";

function Fragments() {
  return (
    <div>
      <table border={2}>
        <tbody>
          <tr>
            <TableData />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Fragments;
