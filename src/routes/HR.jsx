import React from "react";
import Header from "../componentsHR/Header";
import AddHR from "../componentsHR/AddHR";
import HRList from "../componentsHR/HRList";
import './route.css'
const HR = () => {
  return (
    <div className='hr'>
      <Header />
      <AddHR />
      <HRList />
    </div>
  );
};

export default HR;
