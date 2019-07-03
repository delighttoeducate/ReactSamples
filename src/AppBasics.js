import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Subscription from "./components/Subscription";
// Bodyspace named export
import { BodySpace } from "./components/BodySpace";
import Count from "./components/Count";
import Welcome from "./components/Welcome";
import StyleSheet from "./components/StyleSheet";
import Iniline from "./components/Iniline";
import appStyles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Tables from "./components/Tables";
import PurceComponent from "./components/PurceComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import RegParentComp from "./components/RegParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FrParentInput from "./components/FrParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundry from "./components/ErrorBoundry";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import ComponentC from "./components/ComponentC";
import {UserProvider} from './components/userContext'
import PostList from "./components/PostList";
import PostFrom from "./components/PostFrom";
class App extends Component {
  render() {
    return (
      <>
      <PostFrom/>
      {/* <PostList/> */}
      {/* <UserProvider value="Ganesh">
      <ComponentC />
      </UserProvider> */}
        {/* <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
{/* 
        <Counter>
        {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter> */}
        

        {/* <ClickCounterTwo/>
          <HoverCounterTwo/>
          <User render={(isLoggedIn)=> isLoggedIn ? 'Ganesh' : 'Guest' }/> */}

        {/* Hoc Aproach*/}
        {/* <HoverCounter  /> 
         <ClickCounter name="Ganesh"/> */}

        {/* <ErrorBoundry>
          <Hero heroName="Ganesh" />
          </ErrorBoundry>
         <ErrorBoundry> 
          <Hero heroName="Joker" />
        </ErrorBoundry> */}
        {/* <PortalDemo /> */}
        {/* <FrParentInput/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
        {/* <NameList/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <ConditionalRendering/> */}
        {/* <RegParentComp/> */}
        {/* <Tables/> */}
        {/* <FragmentDemo/> */}
        {/* <LifeCycleA/> */}
        {/* <Form/> */}
        {/* <StyleSheet primary={true}/> */}
        {/* <h2 className={appStyles.success}>Success</h2> */}
        {/* <Iniline/> */}
        {/* <Header/>
   <Welcome name="Bannu"/>
   <Greet name="Ganesh"/> */}

        {/* Adding children in custom tags */}
        {/* <BodySpace teammember1="Ganesh" teammember2="Bannu">
      <p>Hello All we are happy to help you!.</p>
   </BodySpace> */}
        {/* <Count addValue={10}/> */}
        {/* <Footer/> */}
        {/* <Subscription/>  */}
        
      </>
    );
  }
}
export default App;
