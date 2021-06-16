import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddBead = () => {
  let history = useHistory();
  const { addBead } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [creel_bead_actual, setcreel_bead_actual]   = useState();
  const [creel_bead_plan, setcreel_bead_plan]   = useState();
  const [reject_bead, setreject_bead] = useState();
  const [reject_bead_plan, setreject_bead_plan] = useState();
  const [bead_energy, setbead_energy] = useState()
  const [bead_energy_plan, setbead_energy_plan] = useState()
  const [bead_breakdown, setbead_breakdown] = useState()
  const [bead_breakdown_plan, setbead_breakdown_plan] = useState();

  const [bead_productivity_actual, setbead_productivity_actual] = useState()
  const [bead_productivity_plan, setbead_productivity_plan] = useState()
  const [bead_manpower_actual, setbead_manpower_actual] = useState()
  const [bead_manpower_plan, setbead_manpower_plan] = useState();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/bead/", {
        date,
         creel_bead_actual,
         creel_bead_plan,
          reject_bead,
          reject_bead_plan,
         bead_energy,
         bead_energy_plan,
          bead_breakdown,
         bead_breakdown_plan,
         bead_productivity_actual,
         bead_productivity_plan,
         bead_manpower_actual,bead_manpower_plan
      });
      console.log(response.data.data);
      addBead(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`bead/rccm`);}

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
              value={creel_bead_actual}
              onChange={(e) => setcreel_bead_actual(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Bead Actual"
            />
          </div>
          <div className="col">
            <input
              value={creel_bead_plan}
              onChange={(e) => setcreel_bead_plan(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Bead Plan"
            />
          </div>
          <div className="col">
            <input
              value={reject_bead}
              onChange={(e) => setreject_bead(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Bead Reject"
            />
          </div>
          <div className="col">
            <input
              value={bead_energy}
              onChange={(e) => setbead_energy(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Energy"
            />
          </div >
          <div className="col">
            <input
              value={bead_breakdown}
              onChange={(e) => setbead_breakdown(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Break Down"
            />
          </div >
         <div className="col"> <input
              value={bead_productivity_actual}
              onChange={(e) => setbead_productivity_actual(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Productivity"
            />
            </div>
            <div className="col"> <input className="form-control"
              value={bead_manpower_actual}
              onChange={(e) => setbead_manpower_actual(e.target.value)}
              type="number"
              placeholder="Man Power"
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

export default AddBead;
