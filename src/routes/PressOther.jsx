import React from "react";
import Header from "../componentsPressOther/Header";
import AddPressOther from "../componentsPressOther/AddPressOther";
import PressOtherList from "../componentsPressOther/PressOtherList";
import './route.css'
const Press= () => {
  return (
    <div className='hold'>
      <Header />
      <AddPressOther />
      <PressOtherList />
    </div>
  );
};

export default Press;
