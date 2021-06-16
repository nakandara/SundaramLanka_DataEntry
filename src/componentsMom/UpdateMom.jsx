import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import moment from 'moment'
const UpdateMom = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { restaurants } = useContext(RestaurantsContext);
 
 
  const [four_m,setFour_m] =useState()
  const [in_date,setIn_date] =useState()
  const [disc_date,setDisc_date] =useState()
  const [issue,setIssue] =useState()
  
  const [disc_point,setDisc_point] =useState()
  const [status,setStatus] =useState()
  const [res,setRes] =useState()
  const [target_date,setTarget_date] =useState()
  

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/momdpr/mom/${id}`);
      console.log(response.data.data.data);
      setFour_m(response.data.data.data.four_m)
      setIn_date(response.data.data.data.in_date)
      setDisc_date(response.data.data.data.disc_date)
      setIssue(response.data.data.data.issue)
      setDisc_point(response.data.data.data.disc_point)
      setStatus(response.data.data.data.status)
      setRes(response.data.data.data.res)
      setTarget_date(response.data.data.data.target_date)
      
      
     
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const update = await RestaurantFinder.post(`/momdpr/mom/update/${id}`, {
       four_m, in_date,disc_date,issue,disc_point,res,status,target_date
      
    });
   console.log(update);
    history.push("/mom");
  };

  return (
    <div>
      <form action="" className='ml-5 mr-5 mt-4'>
       


      <div className="form-group">
          <label htmlFor="location">Four M</label>
          <input
            value={four_m}
            onChange={(e) => setFour_m(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Date In</label>
          <input
            value={ in_date}
            onChange={(e) => setIn_date(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Disc Date</label>
          <input
            value={disc_date}
            onChange={(e) => setDisc_date(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
          <div className="form-group">
          <label htmlFor="location">Issue</label>
          <input
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Disc Point</label>
          <input
            value={disc_point}
            onChange={(e) => setDisc_point(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Responsible</label>
          <input
            value={res}
            onChange={(e) => setRes(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="price_range">Target date</label>
          <input
            value={target_date}
            onChange={(e) => setTarget_date(e.target.value)}
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

export default UpdateMom;
