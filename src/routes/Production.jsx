import React from "react";
import Header from "../componentsProduction/Header";
import AddProduction from "../componentsProduction/AddProduction";
import ProductionList from "../componentsProduction/ProductionList";
import './route.css'
const Production = () => {
  return (
    <div className='production'>
      <Header/>
      <AddProduction />
      <ProductionList />
    </div>
  );
};

export default Production;
