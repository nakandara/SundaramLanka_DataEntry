import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddENG = () => {
  let history = useHistory();
  const { addENG } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [energy_cost_kg, setenergy_cost_kg]   = useState();
  const [energy_cost_kg_plan, setenergy_cost_kg_plan]   = useState(5.5);
  const [energy_consumed, setenergy_consumed] = useState();
  const [energy_consumed_plan, setenergy_consumed_plan] = useState(380);
  const [break_down, setbreak_down] = useState()
  const [break_down_plan, setbreak_down_plan] = useState(6.67)
  const [firewood_cost_rate, setfirewood_cost_rate] = useState()
  const [firewood_cost_rate_plan, setfirewood_cost_rate_plan] = useState(6.3);

  const [oil, setoil] = useState()
  const [oil_plan, setoil_plan] = useState()
  const [pm, setpm] = useState()
  const [pm_plan, setpm_plan] = useState(100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/eng/", {
        date,
        energy_cost_kg,
        energy_cost_kg_plan,
         energy_consumed,
         energy_consumed_plan,
          break_down,
          break_down_plan,
          firewood_cost_rate,
          firewood_cost_rate_plan,
          oil,
          oil_plan,
          pm,
          pm_plan
      });
      console.log(response.data.data);
      addENG(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`eng/rccm`);}

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
              value={energy_cost_kg}
              onChange={(e) => setenergy_cost_kg(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Energy Cost/Kg"
            />
          </div>
          <div className="col">
            <input
              value={energy_consumed}
              onChange={(e) => setenergy_consumed(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Energy Consumed"
            />
          </div>
          <div className="col">
            <input
              value={break_down}
              onChange={(e) => setbreak_down(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Break Down"
            />
          </div>
          <div className="col">
            <input
              value={firewood_cost_rate}
              onChange={(e) => setfirewood_cost_rate(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Firewood Cost Rate"
            />
          </div>
         <div className="col"><input  className="form-control"
              value={oil}
              onChange={(e) => setoil(e.target.value)}
              type="number"
              placeholder="Oil"
            /></div>
             <div className="col"><input  className="form-control"
              value={pm}
              onChange={(e) => setpm(e.target.value)}
              type="number"
              placeholder="PM"
            />
            </div>
            {/* <div className="col"><input  className="form-control"
              value={pm_plan}
              onChange={(e) => setpm_plan(e.target.value)}
              type="number"
              placeholder="PM Plan"
            />
            </div> */}
            
              
         
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

export default AddENG;
