import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddProduction = () => {
  let history = useHistory();
  const { addHR } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [absent_inform, setabsent_inform]   = useState();
  const [absent_inform_plan, setabsent_inform_plan]   = useState(0);
  const [absent_non_inform, setabsent_non_inform] = useState();
  const [absent_non_inform_plan, setabsent_non_inform_plan] = useState(0);
  const [late, setlate] = useState()
  const [late_plan, setlate_plan] = useState(0)
  const [dot, setdot] = useState()
  const [dot_plan, setdot_plan] = useState(0)
  const [reportable_accident, setreportable_accident] = useState();
  const [reportable_accident_plan, setreportable_accident_plan] = useState(0);
  const [non_reportable_accident, setnon_reportable_accident] = useState();
  const [non_reportable_accident_plan, setnon_reportable_accident_plan] = useState(0);
  const [near_miss, setnear_miss] = useState()
  const [near_miss_plan, setnear_miss_plan] = useState(1)
  const [kaizen, setkaizen] = useState()
  const [kaizen_plan, setkaizen_plan] = useState(1);
  const [training, settraining] = useState()
  const [training_plan, settraining_plan] = useState(2.58);
  const [man_power, setman_power] = useState()
  const [man_power_plan, setman_power_plan] = useState(45);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/hr/", {
        date,
        absent_inform ,absent_inform_plan,
         absent_non_inform,absent_non_inform_plan,
         late,late_plan,
         man_power,man_power_plan,
          dot,dot_plan,
          reportable_accident,reportable_accident_plan,
         non_reportable_accident,non_reportable_accident_plan,
          near_miss,near_miss_plan,
          kaizen,kaizen_plan,
          training,training_plan
      });
      console.log(response.data.data);
      addHR(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`hr/rccm`);}

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
              value={absent_inform}
              onChange={(e) => setabsent_inform(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Absent Inform"
            />
          </div>
          <div className="col">
            <input
              value={absent_non_inform}
              onChange={(e) => setabsent_non_inform(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Absent Non Inform"
            />
          </div>
          <div className="col">
            <input
              value={man_power}
              onChange={(e) => setman_power(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Manpower"
            />
          </div>
          <div className="col">
            <input
              value={dot}
              onChange={(e) => setdot(e.target.value)}
              className="form-control"
              type="number"
              placeholder="DOT"
            />
          </div>
         <div className="col"><input className="form-control"
              value={reportable_accident}
              onChange={(e) => setreportable_accident(e.target.value)}
              type="number"
              placeholder="Reportable Accident"
            /></div>

<div className="col"><input className="form-control"
              value={non_reportable_accident}
              onChange={(e) => setnon_reportable_accident(e.target.value)}
              type="number"
              placeholder="Non Reportable Accident"
            /></div>
            <div className="col"><input className="form-control"
              value={near_miss}
              onChange={(e) => setnear_miss(e.target.value)}
              type="number"
              placeholder="Near Miss"
            /></div>
             <div className="col"><input className="form-control"
              value={kaizen}
              onChange={(e) => setkaizen(e.target.value)}
              type="number"
              placeholder="Kaizen"
            /></div>
             <div className="col"><input className="form-control"
              value={training}
              onChange={(e) => settraining(e.target.value)}
              type="number"
              placeholder="Training"
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

export default AddProduction;
