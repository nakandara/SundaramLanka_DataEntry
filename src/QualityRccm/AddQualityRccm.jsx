import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";



const AddQualityRccm = () => {
  let history = useHistory();
  const { addQualityRccm } = useContext(RestaurantsContext);

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
      const response = await RestaurantFinder.post("/reporting/quality/rccm", {
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
        status,category
      });
      console.log(response.data.data);
      addQualityRccm(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; 
  
  const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`home/mom/sucess`);}

  return (

    <div className="" style={{margin:'30px'}}>
    <div className="mb-4">
      <form action="">
        <div className="form-group ">
          <div className="col m-1">
            <input
              value={in_date}
              onChange={(e) => setIn_date(e.target.value)}
              type="date"
              className="form-control"
              placeholder="In Date"
            />
          </div>
          <div className="col m-1">
            <input
              value={ap_no}
              onChange={(e) => setAp_no(e.target.value)}
              className="form-control"
              type="text"
              placeholder="AP No"
            />
          </div>
          <div className="col m-1">
            <input
              value={accountability}
              onChange={(e) => setAccountability(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Acountability"
            />
          </div>
          <div className="col m-1">
            <input
              value={metix}
              onChange={(e) => setMetix(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Metrix"
            />
          </div>
          <div className="col m-1">
            <input
              value={target_date}
              onChange={(e) => setTarget_date(e.target.value)}
              className="form-control"
              type="date"
              placeholder="Target Date"
            />
          </div>
          <div className="col m-1">
          <input
              value={actual}
              onChange={(e) => setActual(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Actual"
            /></div>
             <div className="col m-1">
          <input
              value={reason_achive_not_target}
              onChange={(e) => setReason_achive_not_target(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Reasone NAT"
            />
          </div>
          <div className="col m-1">
          <input
              value={root_cause}
              onChange={(e) => setRoot_cause(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Root Cause"
            />
          </div>
          <div className="col m-1">
          <input
              value={counter_measure}
              onChange={(e) => setCounter_measure(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Countermeasure"
            />
          </div>
          <div className="col m-1">
          <input
              value={resp}
              onChange={(e) => setResp(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Resp"
            />
          </div>
          <div className="col m-1">
          <input
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="form-control"
              type="date"
              placeholder="Complete Date"
            />
          </div>
          <div className="col m-1">
          <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Status"
            />
          </div><div className="col m-1">
          <select  className="form-control" aria-label="Default select example"  onChange={(e)=>handleOption(e)}>
          <option selected>Category</option>
         <option value="flash"   >Flash</option>
           <option value="berlc"  >BERLC</option>
       <option value="ftr"  >FTR</option>
      </select> </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary ml-4"
          >
            Add
          </button>
          <button
            onClick={handleSucess}
          
            className="btn btn-success m-1"
          >
          Sucess
          </button>
        </div>
      </form>
    </div></div>
  );
};

export default AddQualityRccm;
