import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import './detail.css'
const AddDetail = () => {
  let history = useHistory();
  const { addDetail } = useContext(RestaurantsContext);
  const [reported_person, setreported_person] = useState();
  const [observation, setobservation]   = useState();
  const [responsible, setresponsible] = useState();
  const [action, setaction] = useState()
  const [date, setdate] = useState(new Date())
  const [shift, setshift] = useState();
  const [status, setstatus] = useState();



  const handleOptionOne =(e)=>{
    setshift(e.target.value)
  }
  const handleOptionTwo =(e)=>{
    setstatus(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/momdetail/detail/", {
        reported_person,observation, responsible,action,date,shift,status
      });
      console.log(response.data.data);
      addDetail(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`home/mom/sucess`);}

  return (
    <div  className ='detail'>
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={reported_person}
              onChange={(e) => setreported_person(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Reported Person"
            />
          </div>
          <div className="col">
            <input
              value={observation}
              onChange={(e) => setobservation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Observation"
            />
          </div>
          <div className="col">
            <input
              value={responsible}
              onChange={(e) => setresponsible(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Responsible"
            />
          </div>
          <div className="col">
            <input
              value={action}
              onChange={(e) => setaction(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Action"
            />
          </div>
          <div className="col">
            <input
              value={date}
              onChange={(e) => setdate(e.target.value)}
              className="form-control"
              type="Date"
              placeholder="Date"
            />
          </div>


          <div className="col">
          <select  className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
          <option value='null'>Shift</option>
         <option value="A"   >A</option>
           <option value="B"  >B</option>
       <option value="C"  >C</option>
      </select>
          </div>

          <div className="col">
          <select className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionTwo(e)}>
          <option selected>Status</option>
         <option value="Completed"   >Completed</option>
           <option value="OnGoing"  >OnGoing</option>
       <option value=""  ></option>
      </select>
          </div>
          {/* <div className="col">
            <select
              value={rating}
              onChange={(e) => setrating(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Rating</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div> */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
         
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddDetail;
