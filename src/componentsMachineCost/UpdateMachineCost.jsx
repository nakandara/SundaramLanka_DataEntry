import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateMachineCost = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,machineCost } = useContext(RestaurantsContext);
 

  const [dateOne, setDateOne] = useState("");
  const [pm_cost, setPm_cost]   = useState("");
  const [bd_cost, setBd_cost] = useState("")
  const [pro_cost, setPro_cost] = useState("");
  const [machine_name, setMachine_name] = useState("");
  




  // var newd =  new Date(id);
  //   let monthNumber = newd.getMonth() + 1;                                       
  //   let yearNumber = newd.getFullYear() ;
  //   let dateNumber = newd.getDate();


  //   var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/machinecost/cost/${id}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setPm_cost(response.data.data.data.pm_cost);
      setBd_cost(response.data.data.data.bd_cost);
      setPro_cost(response.data.data.data.pro_cost);
      setMachine_name(response.data.data.data.machine_name);
     
      
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
    const update = await RestaurantFinder.post(`/machinecost/cost/update/${id}`, { pm_cost , bd_cost,pro_cost,machine_name
    });
   console.log(update);
    history.push("/machinecost");
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
          <label htmlFor="name">PM Cost</label>
          <input
            value={ pm_cost}
            onChange={(e) => setPm_cost(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">BD Cost</label>
          <input
            value={bd_cost}
            onChange={(e) => setBd_cost(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Project Cost</label>
          <input
            value={pro_cost}
            onChange={(e) => setPro_cost(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Machine Name</label>
          <input
            value={machine_name}
            onChange={(e) => setMachine_name(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
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

export default UpdateMachineCost;
