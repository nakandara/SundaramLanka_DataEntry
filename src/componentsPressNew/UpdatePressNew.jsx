import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdatePressNew = (props) => {
  const {id}=useParams()

  console.log(id);
  
  let history = useHistory();
  const { restaurants,hold } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");


  const [sn, setSn] = useState();
  const [press_no, setPress_no]   = useState();
  const [shift, setShift] = useState();
  const [tyre_type, setTyre_type] = useState()
  const [load_time,setLoad_time]  =useState()




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/pressdata/press/${id}`);
      console.log(response.data.data.data);
      setSn(response.data.data.data.sn)
      setPress_no(response.data.data.data.press_no);
      setShift(response.data.data.data.shift);
      setTyre_type(response.data.data.data.tyre_type);
      setLoad_time(response.data.data.data.load_time);
     
      
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
    const update = await RestaurantFinder.post(`/pressdata/press/update/${sn}`, { sn,press_no,shift,tyre_type,load_time
     ,
    });
   console.log(update);
    history.push(`/pressnew/${sn}`);
  };

  return (
    <div>
      <form action="">
      <div className="form-group">
          <label htmlFor="name">SN</label>
          <input
            value={ sn}
            onChange={(e) => setSn(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Press no</label>
          <input
            value={press_no}
            onChange={(e) => setPress_no(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Shift</label>
          <input
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Type</label>
          <input
            value={tyre_type}
            onChange={(e) => setTyre_type(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Type</label>
          <input
            value={load_time}
            onChange={(e) => setLoad_time(e.target.value)}
            id="location"
            className="form-control"
            type="time"
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
 
export default UpdatePressNew;
