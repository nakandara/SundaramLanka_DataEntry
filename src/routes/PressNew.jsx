import React from "react";
import Header from "../componentsPressNew/Header";
import AddPressNew from "../componentsPressNew/AddPressNew";
import PressNewList from "../componentsPressNew/PressNewList";
import './route.css'
const Press= () => {
  return (
    <div className='hold'>
      <Header />
      <AddPressNew />
      <PressNewList />
    </div>
  );
};

export default Press;
