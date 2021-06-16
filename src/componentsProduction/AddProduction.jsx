import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddProduction = () => {
  let history = useHistory();
  const { addProduction } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [plant_utilization, setPlant_utilization]   = useState();
  const [plant_utilization_plan, setPlant_utilization_plan]   = useState(95);
 const [plan_adherence, setPlan_adherence] = useState();
  const [plan_adherence_plan, setPlan_adherence_plan] = useState(95);
  const [actual_weight, setActual_weight] = useState()
  const [plan_weight, setPlan_weight] = useState()
  const [productivity, setProductivity] = useState()
  const [productivity_plan, setProductivity_plan] = useState(19.1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/mom/", {
        date,
         plant_utilization,
         plant_utilization_plan,
          plan_adherence,
          plan_adherence_plan,
          actual_weight,
          plan_weight,
          productivity,
          productivity_plan
      });
      console.log(response.data.data);
      addProduction(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`production/rccm`);}

  //setPlan_adherence(plan_weight && actual_weight) 
  // const  plan_adherence = actual_weight/plan_weight
  // console.log(plan_adherence);
  return (
    <div className="mb-4">
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
              value={plant_utilization}
              onChange={(e) => setPlant_utilization(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Utilization"
            />
          </div>
           <div className="col">
            <input
              value={plan_adherence}
              onChange={(e) => setPlan_adherence (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Adherence"
            />
          </div> 
          <div className="col">
            <input
              value={actual_weight}
              onChange={(e) => setActual_weight(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Actual Weight"
            />
          </div>
          <div className="col">
            <input
              value={plan_weight}
              onChange={(e) => setPlan_weight(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Plan Weight"
            />
          </div>
          <div className="col">
            <input
            className="form-control"
              value={productivity}
              onChange={(e) => setProductivity(e.target.value)}
              type="number"
              placeholder="Productivity"
            />
             </div>
              
         
          <button
            onClick={handleSubmit}
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

export default AddProduction;
