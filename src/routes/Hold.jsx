import React from "react";
import Header from "../componentsHold/Header";
import AddHold from "../componentsHold/AddHold";
import HoldList from "../componentsHold/HoldList";
import './route.css'
const Hold = () => {
  return (
    <div className='hold'>
      <Header />
      <AddHold />
      <HoldList />
    </div>
  );
};

export default Hold;
