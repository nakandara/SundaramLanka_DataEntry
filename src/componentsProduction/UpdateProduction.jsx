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
  const [plant_utilization, setPlant_utilization]   = useState("");
  const [plan_adherence, setPlan_adherence] = useState("")
  const [actual_weight, setActual_weight] = useState("");
  const [plan_weight, setPlan_weight] = useState("")
  const [productivity, setProductivity] = useState("");




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/mom/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setPlant_utilization(response.data.data.data.plant_utilization);
      setPlan_adherence(response.data.data.data.plan_adherence);
      setActual_weight(response.data.data.data.actual_weight);
      setPlan_weight(response.data.data.data.plan_weight);
      setProductivity(response.data.data.data.productivity);
      
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
    const update = await RestaurantFinder.post(`/reporting/mom/update/${date}`, { plant_utilization,
     plan_adherence,
      actual_weight,
      plan_weight,
      productivity,
    });
   console.log(update);
    history.push("/production");
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
          <label htmlFor="name">Plant Utilization</label>
          <input
            value={ plant_utilization}
            onChange={(e) => setPlant_utilization(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Plan Adherence</label>
          <input
            value={plan_adherence}
            onChange={(e) => setPlan_adherence(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Actual Weight</label>
          <input
            value={actual_weight}
            onChange={(e) => setActual_weight(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
          <div className="form-group">
          <label htmlFor="location">Plan Weight</label>
          <input
            value={plan_weight}
            onChange={(e) => setPlan_weight(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Productivity</label>
          <input
            value={productivity}
            onChange={(e) => setProductivity(e.target.value)}
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

export default UpdateProduction;
