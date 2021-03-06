import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddFgsList = () => {
  let history = useHistory();
  const { addFgsaccuracy } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  
  const [fgs_invert, setFgs_invert]   = useState([]);
  const [daily_pdi, setDaily_pdi]   = useState([]);
  const [shipment_dispatch, setShipment_dispatch]   = useState([]);
  const [shipment_plan, setShipment_plan]   = useState([]);
  const [actual_stock, setActual_stock]   = useState([]);
 

  
  
  const handleSubmitQuality = async (e) => {
    e.preventDefault();
    try {  
      const response = await RestaurantFinder.post("/reporting/fgs", {
        date, fgs_invert,daily_pdi,shipment_dispatch,shipment_plan,actual_stock
      });
      console.log(response);
      console.log("dsihfdhgfdi")
      addFgsaccuracy(response.data.data.data);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`quality/rccm`);}

  return (
    <div className="mb-3 ml-4 mr-5">
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
              value={fgs_invert}
              onChange={(e) => setFgs_invert(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Fgs invert"
            />
          </div>
          
          
          <div className="col">
            <input
              value={daily_pdi}
              onChange={(e) =>setDaily_pdi (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Daily Pdi"
            />
          </div>
        
          <div className="col">
            <input
              value={shipment_dispatch}
              onChange={(e) =>setShipment_dispatch (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Shipment Up to Date Dispatch"
            />
          </div>
          <div className="col">
            <input
              value={shipment_plan}
              onChange={(e) =>setShipment_plan (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Shipment Plan"
            />
          </div>
          <div className="col">
            <input
              value={actual_stock}
              onChange={(e) =>setActual_stock (e.target.value)}
              className="form-control"
              type="number"
              placeholder="Actual stock"
            />
          </div>
          
              
         
          <button
            onClick={handleSubmitQuality}
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

export default AddFgsList;
