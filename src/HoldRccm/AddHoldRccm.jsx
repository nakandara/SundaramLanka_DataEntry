import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import './momList.css'
const AddHoldRccm = () => {
  let history = useHistory();
  const { addHoldRccm } = useContext(RestaurantsContext);

  const [in_date, setIn_date] = useState(new Date());
  const [ap_no, setAp_no] = useState("");
  const [accountability, setAccountability]   = useState("");
  const [metix, setMetix] = useState();
  const [target_date, setTarget_date] = useState()
  const [actual, setActual] = useState()
  const [reason_achive_not_target, setReason_achive_not_target] = useState();
  const [root_cause, setRoot_cause] = useState()
  const [counter_measure, setCounter_measure] = useState("");
  const [resp, setResp] = useState()
  const [target, setTarget] = useState("");
  const [status, setStatus] = useState()
  const [category,setCategory] = useState()


  const handleOption =(e)=>{
   
    setCategory(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('ok');
    try {
      const response = await RestaurantFinder.post("/reporting/eng/rccm", {
        in_date,
        ap_no,
        accountability, 
        metix,
        target_date,
        actual,
        reason_achive_not_target,
        root_cause,
        counter_measure
        ,resp,
        target,
        status,
        category
      });
      console.log(response.data.data);
      addHoldRccm(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; 
  console.log(category);
  const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`home/mom/sucess`);}

  return (
    <div className="mb"  style={{margin:'30px'}}>
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={in_date}
              onChange={(e) => setIn_date(e.target.value)}
              type="date"
              className="form-control"
              placeholder="In Date"
            />
          </div>
          <div className="col">
            <input
              value={ap_no}
              onChange={(e) => setAp_no(e.target.value)}
              className="form-control"
              type="text"
              placeholder="AP No"
            />
          </div>
          <div className="col">
            <input
              value={accountability}
              onChange={(e) => setAccountability(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Acountability"
            />
          </div>
          <div className="col">
            <input
              value={metix}
              onChange={(e) => setMetix(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Metrix"
            />
          </div>
          <div className="col">
            <input
              value={target_date}
              onChange={(e) => setTarget_date(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Target Date"
            />
          </div>
          <div className="col">
          <input
              value={actual}
              onChange={(e) => setActual(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Actual"
            /></div>
             <div className="col">
          <input
              value={reason_achive_not_target}
              onChange={(e) => setReason_achive_not_target(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Reasone NAT"
            />
          </div>
          <div className="col">
          <input
              value={root_cause}
              onChange={(e) => setRoot_cause(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Root Cause"
            />
          </div>
          <div className="col">
          <input
              value={counter_measure}
              onChange={(e) => setCounter_measure(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Countermeasure"
            />
          </div>
          <div className="col">
          <input
              value={resp}
              onChange={(e) => setResp(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Resp"
            />
          </div>
          <div className="col">
          <input
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Target"
            />
          </div>
          <div className="col">
          <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Status"
            />
          </div>
         
          <div className="col">
          <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Status"
            />
          </div>
          <select  aria-label="Default select example"  onChange={(e)=>handleOption(e)}>
          <option selected>Category</option>
         <option value="hold_compound"   >Hold</option>
           <option value="reject_compound"  >Reject</option>
       
      </select>
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
          Sucess
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHoldRccm;

