import React from "react";
import UpdateProduction from "../componentsProduction/UpdateProduction";
import './route.css'

const UpdatePage = () => {
  return (
    <div className='update'>
      <h1 className="text-center">Update Production </h1>
      <UpdateProduction />
    </div>
  );
};

export default UpdatePage;
