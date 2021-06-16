import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateICPC = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { restaurants } = useContext(RestaurantsContext);
 
const [date_in,set_date_in] =useState()
const [date_out,setdate_out] =useState()
const [actual_date_out,setactual_date_out] =useState()
const [issue,setissue] =useState()
const [reason,setreason] =useState()
const [corrective_action,setcorrective_action] =useState()
const [preventive_action,setpreventive_action] =useState()
const [shift,setshift] =useState()
const [person_reporting,setperson_reporting] =useState()
const [epf_no,setepf_no] =useState()
const [field,setfield] =useState()
const [resonable_person,setresonable_person] =useState()

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/card/icpc/${id}`);
      console.log(response.data.data.data);
      set_date_in(response.data.data.data.date_in)
      setdate_out(response.data.data.data.date_out)
      setactual_date_out(response.data.data.data.actual_date_out)
      setissue(response.data.data.data.issue)
      setreason(response.data.data.data.reason)
      setcorrective_action(response.data.data.data.corrective_action)
      setpreventive_action(response.data.data.data.preventive_action)
      setshift(response.data.data.data.shift)
      setperson_reporting(response.data.data.data.person_reporting)
      setepf_no(response.data.data.data.epf_no)
      setfield(response.data.data.data.field)
      setresonable_person(response.data.data.data.resonable_person)
      
      
     
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const update = await RestaurantFinder.post(`/card/icpc/update/${id}`, {
      
         date_in, 
         date_out,
         actual_date_out,
         issue,reason,
         corrective_action,
         preventive_action,
         shift,person_reporting,
         epf_no, 
         field,
         resonable_person
      
    });
   console.log(update);
    history.push("/icpc");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Card No</label>
          <input
            value={id}
            
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Date In</label>
          <input
            value={date_in}
            onChange={(e) => set_date_in(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Out Date</label>
          <input
            value={date_out}
            onChange={(e) => setdate_out(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
          <div className="form-group">
          <label htmlFor="location">Actual Date Out</label>
          <input
            value={actual_date_out}
            onChange={(e) => setactual_date_out(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Issue</label>
          <input
            value={issue}
            onChange={(e) => setissue(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Reason</label>
          <input
            value={reason}
            onChange={(e) => setreason(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Corrective Action</label>
          <input
            value={corrective_action}
            onChange={(e) => setcorrective_action(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Preventive Action</label>
          <input
            value={preventive_action}
            onChange={(e) => setpreventive_action(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Shift</label>
          <input
            value={shift}
            onChange={(e) => setshift(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Person Reporting</label>
          <input
            value={person_reporting}
            onChange={(e) => setperson_reporting(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">EPF No</label>
          <input
            value={epf_no}
            onChange={(e) => setepf_no(e.target.value)}
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Field</label>
          <input
            value={field}
            onChange={(e) => setfield(e.target.value)}
            id="price_range"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Reasonable Person</label>
          <input
            value={resonable_person}
            onChange={(e) => setresonable_person(e.target.value)}
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

export default UpdateICPC;
