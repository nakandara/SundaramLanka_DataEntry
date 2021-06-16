import React from "react";
import Header from "../componentsPress/Header";
import AddPress from "../componentsPress/AddPress";
import PressList from "../componentsPress/PressList";
import './route.css'
const Press= () => {
  return (
    <div className='hold'>
      <Header />
      <AddPress />
      <PressList />
    </div>
  );
};

export default Press;
