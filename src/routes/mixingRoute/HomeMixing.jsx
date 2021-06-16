import React from "react";
import Header from "../../MixingRccm/Header";
import AddMixingRccm from "../../MixingRccm/AddMixingRccm";
import MixingRccmList from "../../MixingRccm/MixingRccmList";
import './login.css'
const HomeMixing = () => {
  return (
    <div  className='mixing'>
      <Header />
      <AddMixingRccm />
      <MixingRccmList />
    </div>
  );
};

export default HomeMixing;
