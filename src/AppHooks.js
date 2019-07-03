import React from "react";
import ClassCounter from "./Hooks/ClassCounter";
import HookCounter from "./Hooks/HookCounter";
import HookCounterTwo from "./Hooks/HookCounterTwo";
import "./index.css";
import HookCounterThree from "./Hooks/HookCounterThree";
import HookCounterFour from "./Hooks/HookCounterFour";
import EffectHookCounterOne from "./Hooks/EffectHookCounterOne";
import MouseMove from "./Hooks/MouseMove";
import MouseContainer from "./Hooks/MouseContainer";
import IntervalHookCounter from "./Hooks/IntervalHookCounter";
import DataFetchig from "./Hooks/DataFetchig";
import DataFetchingSingle from "./Hooks/DataFetchingSingle";
import ContextHook from "./Hooks/ContextHook";
import CounterOne from "./Hooks/CounterOne";
export const SessionContext = React.createContext();
function AppHooks() {
  
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}

      {/* <HookCounterFour/> */}
      {/* <EffectHookCounterOne/> */}
      {/* <MouseMove/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetchig/> */}
      {/* <DataFetchingSingle/> */}
      {/* <SessionContext.Provider value={"Ganesh"}>
        <ContextHook />
      </SessionContext.Provider> */}
      <CounterOne/>
    </div>
  );
}

export default AppHooks;
