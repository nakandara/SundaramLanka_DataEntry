import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdatePressLine = (props) => {


  const {id}=useParams()

  console.log(id);
  
  let history = useHistory();
  

 
  const [kaizen, setKaizen] = useState();
  const [nearmiss, setNearmiss]   = useState();
  const [ra, setRa]   = useState();
  const [bd, setBd]   = useState();
  const [nra, setNra]   = useState();
  const [shift, setShift]   = useState();
  const [date, setDate] = useState(new Date());
  const [press_no, setPress_no]   = useState();

  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var dates =yearNumber +'-'+monthNumber +'-'+ dateNumber;

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/presswiselinedata/pressother/${id}`);
     
     
      setPress_no(response.data.data.data.press_no);
      setShift(response.data.data.data.shift);
      setDate(response.data.data.data.date);
      setKaizen(response.data.data.data.kaizen);
      setNearmiss(response.data.data.data.nearmiss);
      setRa(response.data.data.data.ra);
      setNra(response.data.data.data.nra);
      setBd(response.data.data.data.bd);
      
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
    const update = await RestaurantFinder.post(`/presswiselinedata/pressother/update/${id}`, { kaizen,nearmiss,ra,nra,bd,shift,date,press_no
     ,
    });
   console.log(update);
    history.push("/pressother");
  };

  return (
    <div>
      <form action="">
      
        <div className="form-group">
          <label htmlFor="name">DATE</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id="name"
            className="form-control"
            type="date"
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
          <label htmlFor="location">Kaizen</label>
          <input
            value={kaizen}
            onChange={(e) => setKaizen(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="location">Nearmiss</label>
          <input
            value={nearmiss}
            onChange={(e) => setNearmiss(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">RA</label>
          <input
            value={ra}
            onChange={(e) => setRa(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">AI</label>
          <input
            value={ra}
            onChange={(e) => setRa(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">NRA</label>
          <input
            value={nra}
            onChange={(e) => setNra(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Press NO</label>
          <input
            value={bd}
            onChange={(e) => setBd(e.target.value)}
            id="location"
            className="form-control"
            type="number"
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

export default UpdatePressLine;
