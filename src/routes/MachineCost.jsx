import React from "react";
import Header from "../componentsMachineCost/Header";

import './route.css'
import AddMachineCost from "../componentsMachineCost/AddMachineCost";
import MachineCostList from "../componentsMachineCost/MachineCostList";
const MachineCost = () => {
  return (
    <div className='mt-2 mr-4 ml-4'>
      <Header />
      <AddMachineCost />
      <MachineCostList />
    </div>
  );
};

export default MachineCost;
