import React from "react";
import Header from "../componentsLine/Header";
import AddPress from "../componentsLine/AddPress";
import PressLineList from "../componentsLine/PressLineList";
import './route.css'
const Press= () => {
  return (
    <div className='hold'>
      <Header />
      <AddPress />
      <PressLineList />
    </div>
  );
};

export default Press;
