import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateMixing = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,mixing } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");

   const [dateOne, setDateOne] = useState("");
  const [compound_weight_actual, setcompound_weight_actual]   = useState("");
  const [compound_weight_plan, setcompound_weight_plan] = useState("")
  const [mixing_break_down, setmixing_break_down] = useState("");
  const [mixing_productivity, setmixing_productivity] = useState("")
  const [mixing_man_power, setmixing_man_power] = useState("");
  const [mixing_energy, setmixing_energy] = useState("");




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+ monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/mixing/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setcompound_weight_actual(response.data.data.data.compound_weight_actual);
      setcompound_weight_plan(response.data.data.data.compound_weight_plan);
      setmixing_break_down(response.data.data.data.mixing_break_down);
      setmixing_productivity(response.data.data.data.mixing_productivity);
      setmixing_man_power(response.data.data.data.mixing_man_power);
      setmixing_energy(response.data.data.data.mixing_energy);
      
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
    const update = await RestaurantFinder.post(`/reporting/mixing/update/${date}`, { compound_weight_actual,
     compound_weight_plan,
      mixing_break_down,
     mixing_productivity,
     mixing_man_power,mixing_energy
    });
   console.log(update);
    history.push("/mixing");
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
          <label htmlFor="name">Compound Weight Actual</label>
          <input
            value={compound_weight_actual}
            onChange={(e) => setcompound_weight_actual(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Compound Weight Plan</label>
          <input
            value={compound_weight_plan}
            onChange={(e) => setcompound_weight_plan(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Break Down</label>
          <input
            value={mixing_break_down}
            onChange={(e) => setmixing_break_down(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
          <div className="form-group">
          <label htmlFor="location">Productivity</label>
          <input
            value={mixing_productivity}
            onChange={(e) => setmixing_productivity(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Man Power</label>
          <input  
            value={mixing_man_power}
            onChange={(e) => setmixing_man_power(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Energy</label>
          <input  
            value={mixing_energy}
            onChange={(e) => setmixing_energy(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
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

export default UpdateMixing;
