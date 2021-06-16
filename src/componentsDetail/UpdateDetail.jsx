import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateDetail= (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { restaurants } = useContext(RestaurantsContext);
  const [reported_person, setreported_person] = useState();
  const [observation, setobservation]   = useState();
  const [responsible, setresponsible] = useState();
  const [action, setaction] = useState()
  const [date, setdate] = useState()
  const [shift, setshift] = useState();
  const [status, setstatus] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/momdetail/detail/${id}`);
      console.log(response.data.data.data.reported_person);
      setreported_person(response.data.data.data.reported_person);
      setobservation(response.data.data.data.observation);
      setresponsible(response.data.data.data.responsible);
      setaction(response.data.data.data.action);
      setdate(response.data.data.data.date);
      setshift(response.data.data.data.shift);
      setstatus(response.data.data.data.status);
      
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await RestaurantFinder.post(`/momdetail/detail/update/${id}`, {
      reported_person,observation, responsible,action,date,shift,status
    });
   console.log(update);
    history.push("/detail");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Reported Person</label>
          <input
            value={ reported_person}
            onChange={(e) => setreported_person(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Observation</label>
          <input
            value={observation}
            onChange={(e) => setobservation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Responsible</label>
          <input
            value={responsible}
            onChange={(e) => setresponsible(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
          <div className="form-group">
          <label htmlFor="location">Action</label>
          <input
            value={action}
            onChange={(e) => setaction(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Shift</label>
          <input
            value={shift}
            onChange={(e) => setshift(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Status</label>
          <input
            value={ status}
            onChange={(e) => setstatus(e.target.value)}
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

export default UpdateDetail;
