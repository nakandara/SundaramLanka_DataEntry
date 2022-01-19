import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddshotBlasting = () => {
  let history = useHistory();
  const { addShotBlasting } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  
  const [m1_plan, setM1_plan]   = useState([]);
  const [m2_plan, setM2_plan]   = useState([]);
  const [m1_actual, setM1_actual]   = useState([]);
  const [m2_actual, setM2_actual]   = useState([]);
 
 

  
  
  const handleSubmitQuality = async (e) => {
    e.preventDefault();
    try {
        console.log(date)
      const response = await RestaurantFinder.post("/reporting/shotblasting", {
        date,m1_plan,m2_plan,m1_actual,m2_actual
      });
      console.log(response);
      addShotBlasting(response.data.data.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    window.location.reload();
    history.push(`quality/rccm`);
    
  }
    

  return (
    <div className="mb-3 ml-4 mr-5">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="form-control"
              placeholder="date"
            />
          </div>
          <div className="col">
            <input
              value={m1_plan}
              onChange={(e) => setM1_plan(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Machine1 plan"
            />
          </div>
          
          
          <div className="col">
            <input
              value={m2_plan}
              onChange={(e) =>setM2_plan (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Machine2 plan"
            />
          </div>
        
          <div className="col">
            <input
              value={m1_actual}
              onChange={(e) =>setM1_actual (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Machine 1 actual"
            />
          </div>
          <div className="col">
            <input
              value={m2_actual}
              onChange={(e) =>setM2_actual (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Machine 2 actual"
            />
          </div>
          
          
              
         
          <button
            onClick={handleSubmitQuality}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
          <button
            onClick={handleSucess}
          
            className="btn btn-success"
          >
          RCCM
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddshotBlasting;
