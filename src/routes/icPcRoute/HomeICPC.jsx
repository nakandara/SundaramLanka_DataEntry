import React from "react";
import Header from "../../componentIcPc/Header";
import AddICPC from "../../componentIcPc/AddICPC";
import ICPCList from "../../componentIcPc/ICPCList";

const HomeICPC = () => {
  return (
    <div>
      <Header />
      <AddICPC />
      <ICPCList />
    </div>
  );
};

export default HomeICPC;
