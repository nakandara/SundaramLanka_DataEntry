import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateBead = (props) => {
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
  const [creel_bead_actual, setcreel_bead_actual]   = useState("");
  const [creel_bead_plan, setcreel_bead_plan] = useState("")
  const [reject_bead, setreject_bead] = useState("");
  const [bead_energy, setbead_energy] = useState("")
  const [bead_breakdown, setbead_breakdown] = useState("");
  const [bead_productivity_actual, setbead_productivity_actual] = useState("")
  const [bead_manpower_actual, setbead_manpower_actual] = useState("");




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/bead/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setcreel_bead_actual(response.data.data.data.creel_bead_actual);
      setcreel_bead_plan(response.data.data.data.creel_bead_plan);
      setreject_bead(response.data.data.data.reject_bead);
      setbead_energy(response.data.data.data.bead_energy);
      setbead_breakdown(response.data.data.data.bead_breakdown);
      setcreel_bead_plan(response.data.data.data.creel_bead_plan);
      setbead_productivity_actual(response.data.data.data.bead_productivity_actual);
      setbead_manpower_actual(response.data.data.data.bead_manpower_actual);
      
      
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
    const update = await RestaurantFinder.post(`/reporting/bead/update/${date}`, { 
      date,creel_bead_actual,creel_bead_plan,reject_bead,bead_energy,bead_breakdown,bead_productivity_actual,bead_manpower_actual
    });
   console.log(update);
    history.push("/bead");
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
          <label htmlFor="name">Bead Actual</label>
          <input
            value={ creel_bead_actual}
            onChange={(e) => setcreel_bead_actual(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Bead Plan</label>
          <input
            value={creel_bead_plan}
            onChange={(e) => setcreel_bead_plan(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Reject Bead</label>
          <input
            value={reject_bead}
            onChange={(e) => setreject_bead(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
          <div className="form-group">
          <label htmlFor="location">Breakdown</label>
          <input
            value={bead_breakdown}
            onChange={(e) => setbead_breakdown(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Productivity</label>
          <input
            value={bead_productivity_actual}
            onChange={(e) => setbead_productivity_actual(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Energy</label>
          <input
            value={bead_energy}
            onChange={(e) => setbead_energy(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Manpower</label>
          <input
            value={bead_manpower_actual}
            onChange={(e) => setbead_manpower_actual(e.target.value)}
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

export default UpdateBead;
