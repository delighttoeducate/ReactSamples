import React, { PureComponent } from "react";
import Fragments from "./AdTopics/Fragments";
import NormalComp from "./AdTopics/NormalComp";
import PureComp from "./AdTopics/PureComp";
import Portals from "./AdTopics/Portals";
import ErrorTry from "./AdTopics/ErrorTry";
import ErrorBoundry from "./AdTopics/ErrorBoundry";
import StyledComponent from "./components/StyledComponent";

function App() {
  return (
    <>
      <StyledComponent/>
      {/* <Fragments /> */}
      {/* <NormalComp/> */}
      {/* <ErrorBoundry>
        <ErrorTry name="Ganesh" />
       
      </ErrorBoundry>

      <PureComp />
      <Portals />
       */}
    </>
  );
}

export default App;
