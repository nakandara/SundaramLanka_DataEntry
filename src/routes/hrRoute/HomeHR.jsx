import React from "react";
import Header from "../../HRRccm/Header";
import AddHRRccm from "../../HRRccm/AddHRRccm";
import HRRccmList from "../../HRRccm/HRRccmList";
import './hr.css'
const HomeHR = () => {
  return (
    <div className='homeHr'>
      <Header />
      <AddHRRccm />
      <HRRccmList />
    </div>
  );
};

export default HomeHR;
