import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateProduction = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,production } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");

   const [dateOne, setDateOne] = useState("");
  const [energy_cost_kg, setenergy_cost_kg]   = useState("");
  const [energy_consumed, setenergy_consumed] = useState("")
  const [break_down, setbreak_down] = useState("");
  const [firewood_cost_rate, setfirewood_cost_rate] = useState("")
  const [oil, setoil] = useState("");
  const [pm, setpm] = useState("");
  const [pm_plan, setpm_plan] = useState("");




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/eng/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setenergy_cost_kg(response.data.data.data.energy_cost_kg);
      setenergy_consumed(response.data.data.data.energy_consumed);
      setbreak_down(response.data.data.data.break_down);
      setfirewood_cost_rate(response.data.data.data.firewood_cost_rate);
      setoil(response.data.data.data.oil);
      setpm(response.data.data.data.pm);
      setpm_plan(response.data.data.data.pm_plan);
    };

    fetchData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({
    //   point_discussed,
    //   countermeasure,
    //   responsible,
    //   target_date,
    //   revised_date,
    //   rating,
    // });
    const update = await RestaurantFinder.post(`/reporting/eng/update/${date}`, { energy_cost_kg,
     energy_consumed,
      break_down,
     firewood_cost_rate,
      oil,pm,pm_plan
    });
   console.log(update);
    history.push("/eng");
  };

  return (
    <div>
      <form action="">
      <div className="form-group">
          <label htmlFor="name">Date</label>
          <input
            value={ dateOne}
            onChange={(e) => setDateOne(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Energy Cost Kg</label>
          <input
            value={ energy_cost_kg}
            onChange={(e) => setenergy_cost_kg(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Energy Consumed</label>
          <input
            value={energy_consumed}
            onChange={(e) => setenergy_consumed(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Break Down</label>
          <input
            value={break_down}
            onChange={(e) => setbreak_down(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
          <div className="form-group">
          <label htmlFor="location">Firewood Cost Rate</label>
          <input
            value={firewood_cost_rate}
            onChange={(e) => setfirewood_cost_rate(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Oil</label>
          <input
            value={oil}
            onChange={(e) => setoil(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">PM</label>
          <input
            value={pm}
            onChange={(e) => setpm(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="location">PM Plan</label>
          <input
            value={pm_plan}
            onChange={(e) => setpm_plan(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div> */}
        </div>
       
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProduction;
