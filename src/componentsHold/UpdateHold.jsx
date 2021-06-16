import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateHold = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,hold } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");


  const [dateOne, setDateOne] = useState("");
  const [hold_compound, sethold_compound]   = useState("");
  const [hold_compound_plan, sethold_compound_plan] = useState("")
  const [reject_compound, setreject_compound] = useState("");
  const [reject_compound_plan, setreject_compound_plan] = useState("")
  




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/hold/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      sethold_compound(response.data.data.data.hold_compound);
      setreject_compound(response.data.data.data.reject_compound);
     
      
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
    const update = await RestaurantFinder.post(`/reporting/hold/update/${date}`, { hold_compound,
     reject_compound,
    });
   console.log(update);
    history.push("/hold");
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
          <label htmlFor="name">Hold Compound</label>
          <input
            value={ hold_compound}
            onChange={(e) => sethold_compound(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Reject Compound</label>
          <input
            value={reject_compound}
            onChange={(e) => setreject_compound(e.target.value)}
            id="location"
            className="form-control"
            type="number"
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

export default UpdateHold;
