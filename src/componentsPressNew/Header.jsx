import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { RestaurantsContext } from "../context/RestaurantsContext";
import  './momList.css'
import { useHistory } from "react-router-dom";
const Header = () => {


  let history = useHistory();


  const handleChange=()=>{
    history.push(`/pressnew`);
  }
  const {time,setTime}= useContext(RestaurantsContext)
  return (
    
  <h1 style={{marginLeft:'40%' ,marginBottom:'1%',marginTop:'-3%'}}  onClick ={(e)=>handleChange(e)}>
     Press Data
      </h1>  
  );
};

export default Header;
