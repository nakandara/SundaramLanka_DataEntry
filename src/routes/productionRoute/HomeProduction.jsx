import React from "react";
import Header from "../../ProductionRccm/Header";
import AddProductionRccm from "../../ProductionRccm/AddProductionRccm";
import ProductionRccmList from "../../ProductionRccm/ProductionRccmList";
import './p.css'
const HomeProduction = () => {
  return (
    <div className='production'>
      <Header />
      <AddProductionRccm />
      <ProductionRccmList />
    </div>
  );
};

export default HomeProduction;
