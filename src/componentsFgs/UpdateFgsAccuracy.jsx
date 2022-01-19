import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateQuality = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,quality } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");

   const [dateOne, setDateOne] = useState("");
  const [fgs_invert, setFgs_invert]   = useState();
  
  const [daily_pdi, setDaily_pdi] = useState();
 
  const [shipment_dispatch, setShipment_dispatch] = useState()
  const [shipment_plan, setShipment_plan] = useState();
  const [actual_stock, setActual_stock] = useState();
  




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/fgsAccuracy/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setFgs_invert(response.data.data.data.fgs_invert);
      setDaily_pdi(response.data.data.data.daily_pdi);
      setShipment_dispatch(response.data.data.data.shipment_dispatch);
      setShipment_plan(response.data.data.data.shipment_plan);
      setActual_stock(response.data.data.data.actual_stock);
    
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
    const update = await RestaurantFinder.post(`/reporting/fgsAccuracy/update/${date}`, {fgs_invert ,
        daily_pdi,shipment_dispatch,shipment_plan,actual_stock
     
    });
   console.log(update);
    history.push("/fgsaccuracy");
  };

  return (
    <div>
      <form action="">
      <div className="form-group">
          <label htmlFor="name">Date</label>
          <input
            value={dateOne}
            onChange={(e) => setDateOne(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Fgs Invert</label>
          <input
            value={fgs_invert}
            onChange={(e) => setFgs_invert(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Daily Pdi</label>
          <input
            value={daily_pdi}
            onChange={(e) => setDaily_pdi(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Shipment Dispatch</label>
          <input
            value={shipment_dispatch}
            onChange={(e) =>setShipment_dispatch (e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
          <div className="form-group">
          <label htmlFor="location">Shipment Plan</label>
          <input
            value={shipment_plan}
            onChange={(e) =>setShipment_plan(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">actual Stock</label>
          <input
            value={actual_stock}
            onChange={(e) => setActual_stock(e.target.value)}
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


export default UpdateQuality;
