import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdatePressLine = (props) => {


  const {id}=useParams()

  console.log(id);
  
  let history = useHistory();
  

 
  const [line_no, setLine_no]   = useState();
  const [shift, setShift] = useState();
  const[ mp,setMp] = useState()
  const [dot,setDot] = useState()
  const [head_count,setHead_count] = useState()
  const [ai,setAi] = useState()
  const [ani,setAni] = useState()
  const [date,setDate] = useState()


  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var dates =yearNumber +'-'+monthNumber +'-'+ dateNumber;

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/presswiselinedata/pressline/${id}`);
     
     
      setLine_no(response.data.data.data.line_no);
      setShift(response.data.data.data.shift);
      setDate(response.data.data.data.date);
      setMp(response.data.data.data.mp);
      setDot(response.data.data.data.dot);
      setHead_count(response.data.data.data.head_count);
      setAi(response.data.data.data.ai);
      setAni(response.data.data.data.ani);
      
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
    const update = await RestaurantFinder.post(`/presswiselinedata/pressline/update/${id}`, { date, shift,mp,dot,head_count,ai,ani,line_no
     ,
    });
   console.log(update);
    history.push("/pressline");
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
          <label htmlFor="location">Man Power</label>
          <input
            value={mp}
            onChange={(e) => setMp(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="location">DOT</label>
          <input
            value={dot}
            onChange={(e) => setDot(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Head Count</label>
          <input
            value={mp}
            onChange={(e) => setMp(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">AI</label>
          <input
            value={ai}
            onChange={(e) => setAi(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">ANI</label>
          <input
            value={ani}
            onChange={(e) => setAni(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">LINE NO</label>
          <input
            value={line_no}
            onChange={(e) => setLine_no(e.target.value)}
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
