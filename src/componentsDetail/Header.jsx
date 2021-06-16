import React,{useContext} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RestaurantsContext } from "../context/RestaurantsContext";
import './header.css'

const Header = () => {


  const {dateOne,setDateOne,dateTwo,setDateTwo,category,setCategory } = useContext(RestaurantsContext);




  const handleOptionOne =(e)=>{
    setCategory(e.target.value)
  }












  return (
    <div className='containerOne'>
      <h2 >
      Daily Management Audit/Observation
      </h2>
      <div className='containerTwo'><DatePicker onChange={(e) => {
        setDateOne(e);
      }}
      selected={dateOne}
      className="select"
      dateFormat="dd MMM yyyy" relativeSize={true} /></div>
      <div className='containerThreee'><DatePicker onChange={(e) => {
        setDateTwo(e);
      }}
      selected={dateTwo}
      className="select"
      dateFormat="dd MMM yyyy" relativeSize={true} /></div>
      <div className='containerFour'>
      <div className="col">
          <select  className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
          <option value='shift'>Shift</option>
         <option value="A"   >A</option>
           <option value="B"  >B</option>
       <option value="C"  >C</option>
       <option value="G"  >G</option>
      </select>
          </div>

      </div>
    </div>
  );
};

export default Header;
