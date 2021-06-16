import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddMixing = () => {
  let history = useHistory();
  const { addMixing } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [compound_weight_actual, setcompound_weight_actual]   = useState();
  const [compound_weight_plan, setcompound_weight_plan]   = useState();
  const [mixing_break_down, setmixing_break_down] = useState();
  const [mixing_break_down_plan, setmixing_break_down_plan] = useState();
  const [mixing_productivity, setmixing_productivity] = useState()
  const [mixing_productivity_plan, setmixing_productivity_plan] = useState()
  const [mixing_man_power, setmixing_man_power] = useState()
  const [mixing_man_power_plan, setmixing_man_power_plan] = useState();
  const [mixing_energy, setmixing_energy] = useState()
  const [mixing_energy_plan, setmixing_energy_plan] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/mixing/", {
        date,
         compound_weight_actual,
        compound_weight_plan,
          mixing_break_down,
          mixing_break_down_plan,
         mixing_productivity,
         mixing_productivity_plan,
          mixing_man_power,
         mixing_man_power_plan,mixing_energy,mixing_energy_plan,
      });
      console.log(response.data.data);
      addMixing(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`mixing/rccm`);}

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
              value={compound_weight_actual}
              onChange={(e) => setcompound_weight_actual(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Compoun Weight Actual"
            />
          </div>
          <div className="col">
            <input
              value={compound_weight_plan}
              onChange={(e) => setcompound_weight_plan(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Compound Weight Plan"
            />
          </div>
          <div className="col">
            <input
              value={mixing_break_down}
              onChange={(e) => setmixing_break_down(e.target.value)}
              className="form-control"
              type="number"
              placeholder=" Break Down"
            />
          </div>
          <div className="col">
            <input
              value={mixing_productivity}
              onChange={(e) => setmixing_productivity(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Productivity"
            />
          </div>
         <div className="col"><input className="form-control"
              value={mixing_man_power}
              onChange={(e) => setmixing_man_power(e.target.value)}
              type="number"
              placeholder="Man Power"
            /></div>

<div className="col"><input className="form-control"
              value={mixing_energy}
              onChange={(e) => setmixing_energy(e.target.value)}
              type="number"
              placeholder=" Energy"
            /></div>
            
              
         
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

export default AddMixing;
