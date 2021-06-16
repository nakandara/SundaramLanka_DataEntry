import React from "react";
import Header from "../../componentsMom/Header";
import AddMom from "../../componentsMom/AddMom";
import MomList from "../../componentsMom/MomList";

const HomeMom = () => {
  return (
    <div>
      <Header />
      <AddMom />
      <MomList />
    </div>
  );
};

export default HomeMom;
