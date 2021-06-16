import React from "react";
import Header from "../../QualityRccm/Header";
import AddQualityRccm from "../../QualityRccm/AddQualityRccm";
import QualityRccmList from "../../QualityRccm/QualityRccmList";
const HomeQuality = () => {
  return (
    <div  className=''>
      <Header />
      <AddQualityRccm />
      <QualityRccmList />
    </div>
  );
};

export default HomeQuality;
