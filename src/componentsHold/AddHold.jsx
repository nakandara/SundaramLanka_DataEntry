import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddProduction = () => {
  let history = useHistory();
  const { addHold } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [hold_compound, sethold_compound]   = useState();
  const [hold_compound_plan, sethold_compound_plan]   = useState(0);
  const [reject_compound, setreject_compound] = useState();
  const [reject_compound_plan, setreject_compound_plan] = useState(0);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/hold/", {
        date,
        hold_compound,
        hold_compound_plan,
          reject_compound,reject_compound_plan
      });
      console.log(response.data.data);
      addHold(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`hold/rccm`);}

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
              value={hold_compound}
              onChange={(e) => sethold_compound(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Hold"
            />
          </div>
          <div className="col">
            <input
              value={reject_compound}
              onChange={(e) => setreject_compound(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Reject"
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
