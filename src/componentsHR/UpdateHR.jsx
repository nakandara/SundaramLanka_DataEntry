import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateProduction = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,production } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");

   const [dateOne, setDateOne] = useState("");
  const [absent_inform, setabsent_inform]   = useState("");
  const [absent_non_inform, setabsent_non_inform] = useState("")
  const [late, setlate] = useState("");
  const [dot, setdot] = useState("")
  const [reportable_accident, setreportable_accident] = useState("");
  const [near_miss, setnear_miss] = useState("")
  const [kaizen, setkaizen] = useState("");
  const [training, settraining] = useState("")
  const [non_reportable_accident, setnon_reportable_accident] = useState("");
  const [man_power, setman_power] = useState("")




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/hr/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setabsent_inform(response.data.data.data.absent_inform);
      setabsent_non_inform(response.data.data.data.absent_non_inform);
      setlate(response.data.data.data.late);
      setdot(response.data.data.data.dot);
      setreportable_accident(response.data.data.data.reportable_accident);
      setnear_miss(response.data.data.data.near_miss);
      setkaizen(response.data.data.data.kaizen);
      settraining(response.data.data.data.training);
      setnon_reportable_accident(response.data.data.data.non_reportable_accident);
      setman_power(response.data.data.data.man_power);
      
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
    const update = await RestaurantFinder.post(`/reporting/hr/update/${date}`, { date, absent_inform, absent_non_inform,late,man_power,dot,reportable_accident,near_miss,kaizen,training,non_reportable_accident,
    });
   console.log(update);
    history.push("/hr");
  };

  return (
    <div>
      <form action="">
      <div className="form-group">
          <label htmlFor="name">Date</label>
          <input
            value={ dateOne}
            onChange={(e) => setDateOne(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Absent Inform</label>
          <input
            value={ absent_inform}
            onChange={(e) => setabsent_inform(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Absent Non Inform</label>
          <input
            value={absent_non_inform}
            onChange={(e) => setabsent_non_inform(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        
         
          
          <div className="form-group">
          <label htmlFor="location">Late</label>
          <input
            value={late}
            onChange={(e) => setlate(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">DOT</label>
          <input
            value={dot}
            onChange={(e) => setdot(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Reportable Accident</label>
          <input
            value={reportable_accident}
            onChange={(e) => setreportable_accident(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Non Reportable Accident</label>
          <input
            value={non_reportable_accident}
            onChange={(e) => setnon_reportable_accident(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Near Miss</label>
          <input
            value={near_miss}
            onChange={(e) => setnear_miss(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Kaizen</label>
          <input
            value={kaizen}
            onChange={(e) => setkaizen(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Man Power</label>
          <input
            value={man_power}
            onChange={(e) => setman_power(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Training</label>
          <input
            value={training}
            onChange={(e) => settraining(e.target.value)}
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

export default UpdateProduction;
