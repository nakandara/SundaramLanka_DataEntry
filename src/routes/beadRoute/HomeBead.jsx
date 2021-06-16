import React from "react";
import Header from "../../BeadRccm/Header";
import AddBeadRccm from "../../BeadRccm/AddBeadRccm";
import BeadRccmList from "../../BeadRccm/BeadRccmList";
import './login.css'
const HomeBead = () => {
  return (
    <div className='bead'>
      <Header />
      <AddBeadRccm />
      <BeadRccmList />
    </div>
  );
};

export default HomeBead;
