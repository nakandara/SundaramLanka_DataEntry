import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import './zoom.css'
const AddProduction = () => {
  let history = useHistory();
  const { addQuality } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [revised_date, setrevised_date] = useState(new Date());
  const [responsible, setresponsible] = useState("")
  const [target_date, settarget_date] = useState(new Date())
  const [rating, setrating] = useState("1");
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [flash, setFlash]   = useState();
  const [flash_plan, setFlash_plan]   = useState(1.2);
  const [ftr, setFtr] = useState();
  const [ftr_plan, setFtr_plan] = useState(90);
  const [b, setB] = useState()
  const [b_plan, setBplan] = useState(0.15)
  

  const [ea, setE] = useState()
  const [e_plan, setEplan] = useState(0)
  const [r, setR] = useState()
  const [r_plan, setRplan] = useState(0.15)
 
  const [l, setL] = useState();
  const [l_plan, setLplan] = useState(0)
  const [c, setC] = useState();
  const [c_plan, setCplan] = useState(0)
  const [nm_dirty_tires, setNmDirty] = useState(null);
  const [nm_dirty_tires_plan, setNmDirtyPlan] = useState(0);

  const [berlc, setberlc] = useState();
  const [berlc_plan, setberlcplan] = useState(0.3)

  const handleSubmitQuality = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/reporting/quality", {
        date,flash,flash_plan,ftr,ftr_plan,b,b_plan,ea,e_plan,r,r_plan,l,l_plan,c,c_plan,nm_dirty_tires,nm_dirty_tires_plan,berlc,berlc_plan
      });
      console.log(response);
      addQuality(response.data.data.data);
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
              value={flash}
              onChange={(e) => setFlash(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Flash"
            />
          </div>
          <div className="col">
            <input
              value={ftr}
              onChange={(e) => setFtr(e.target.value)}
              className="form-control"
              type="number"
              placeholder="FTR"
            />
          </div>
           <div className="col">
            <input
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="form-control"
              type="number"
              placeholder="B"
            />
          </div>
          <div className="col">
            <input
              value={ea}
              onChange={(e) => setE(e.target.value)}
              className="form-control"
              type="number"
              placeholder="E"
            />
          </div>
          <div className="col">
            <input
              value={r}
              onChange={(e) => setR(e.target.value)}
              className="form-control"
              type="number"
              placeholder="R"
            />
          </div>
          <div className="col">
            <input
              value={l}
              onChange={(e) => setL(e.target.value)}
              className="form-control"
              type="number"
              placeholder="L"
            />
          </div>
          <div className="col">
            <input
              value={c}
              onChange={(e) => setC(e.target.value)}
              className="form-control"
              type="number"
              placeholder="C"
            />
          </div> 
          <div className="col">
            <input
              value={berlc}
              onChange={(e) => setberlc(e.target.value)}
              className="form-control"
              type="number"
              placeholder="BERLC"
            />
          </div>
          <div className="col">
            <input
              value={nm_dirty_tires}
              onChange={(e) => setNmDirty(e.target.value)}
              type="number"
              placeholder="NM Dirty"
              className="form-control"
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

export default AddProduction;
