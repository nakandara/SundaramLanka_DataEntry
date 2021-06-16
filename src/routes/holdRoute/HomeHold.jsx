import React from "react";
import Header from "../../HoldRccm/Header";
import AddHoldRccm from "../../HoldRccm/AddHoldRccm";
import HoldRccmList from "../../HoldRccm/HoldRccmList";

const HomeHold = () => {
  return (
    <div style={{margin:'20px'}}>
      <Header />
      <AddHoldRccm />
      <HoldRccmList />
    </div>
  );
};

export default HomeHold;
