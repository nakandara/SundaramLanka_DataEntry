import React from "react";
import Header from "../componentsENG/Header";
import AddENG from "../componentsENG/AddENG";
import ENGList from "../componentsENG/ENGList";
import './route.css'
const ENG = () => {
  return (
    <div className='eng'>
      <Header />
      <AddENG />
      <ENGList />
    </div>
  );
};

export default ENG;
