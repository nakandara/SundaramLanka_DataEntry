import React from "react";
import Header from "../componentsMixing/Header";
import AddMixing from "../componentsMixing/AddMixing";
import MixingList from "../componentsMixing/MixingList";
import './route.css'
const Mixing = () => {
  return (
    <div className='mixing'>
      <Header />
      <AddMixing />
      <MixingList />
    </div>
  );
};

export default Mixing;
