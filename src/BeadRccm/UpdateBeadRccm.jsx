import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateBeadRccm = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { restaurants,rccm } = useContext(RestaurantsContext);
  const [in_date, setIn_date] = useState();
  const [ap_no, setAp_no] = useState();
  const [accountability, setAccountability]   = useState();
  const [metix, setMetix] = useState();
  const [target_date, setTarget_date] = useState()
  const [actual, setActual] = useState()
  const [reason_achive_not_target, setReason_achive_not_target] = useState();
  const [root_cause, setRoot_cause] = useState()
  const [counter_measure, setCounter_measure] = useState();
  const [resp, setResp] = useState()
  const [target, setTarget] = useState();
  const [status, setStatus] = useState()
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/bead/rccm/${id}`);
      console.log(response.data.data.data);
      setIn_date(response.data.data.data.in_date);
      setAp_no(response.data.data.data.ap_no);
      setAccountability(response.data.data.data.accountability);
      setMetix(response.data.data.data.metix);
      setTarget_date(response.data.data.data.target_date);
      setActual(response.data.data.data.actual);

      setReason_achive_not_target(response.data.data.data.reason_achive_not_target);
      setRoot_cause(response.data.data.data.root_cause);
      setCounter_measure(response.data.data.data.counter_measure);
      setResp(response.data.data.data.resp);
      setTarget(response.data.data.data.target);
      setStatus(response.data.data.data.status);
    };

    fetchData();
  }, []);

  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      in_date,
      ap_no,
      accountability, 
      metix,
      target_date,
      actual,
      reason_achive_not_target,
      root_cause,
      counter_measure
      ,resp,target,status,
    });
    const update = await RestaurantFinder.put(`/reporting/bead/rccm/${id}/update`, { in_date,
      ap_no,
      accountability, 
      metix,
      target_date,
      actual,
      reason_achive_not_target,
      root_cause,
      counter_measure
      ,resp,target,status
    });
   console.log(update);
    history.push("/bead/rccm");
  };

  return (
    <div>
      <form action="" enctype="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">In Date</label>
          <input
            value={ in_date}
            onChange={(e) => setIn_date(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Ap No</label>
          <input
            value={ap_no}
            onChange={(e) => setAp_no(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Accountabilty</label>
          <input
            value={accountability}
            onChange={(e) => setAccountability(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
          <div className="form-group">
          <label htmlFor="location">Metrix</label>
          <input
            value={metix}
            onChange={(e) => setMetix(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Target Date</label>
          <input
            value={target_date}
            onChange={(e) => setTarget_date(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Actual</label>
          <input
            value={actual}
            onChange={(e) => setActual(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Reason achive not Target Date</label>
          <input
            value={reason_achive_not_target}
            onChange={(e) => setReason_achive_not_target(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Root Cause</label>
          <input
            value={root_cause}
            onChange={(e) => setRoot_cause(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Countermeasure</label>
          <input
            value={counter_measure}
            onChange={(e) => setCounter_measure(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Resp</label>
          <input
            value={resp}
            onChange={(e) => setResp(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Target</label>
          <input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Status</label>
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            id="price_range"
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

export default UpdateBeadRccm;
