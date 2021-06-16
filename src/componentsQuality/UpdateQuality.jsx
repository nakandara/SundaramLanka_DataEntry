import React, { useState, useContext, useEffect } from "react";
import {  useHistory,useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateQuality = (props) => {
  const {id}=useParams()
  
  let history = useHistory();
  const { restaurants,quality } = useContext(RestaurantsContext);
  const [point_discussed, setpoint_discussed] = useState("");
  const [countermeasure, setcountermeasure]   = useState("");
  const [responsible, setresponsible] = useState("")
  const [revised_date, setrevised_date] = useState("");
  const [target_date, settarget_date] = useState("")
  const [rating, setrating] = useState("");

   const [dateOne, setDateOne] = useState("");
  const [flash, setFlash]   = useState();
  const [ftr, setFtr] = useState()
  const [b, setB] = useState();
  const [ea, setE] = useState()
  const [r, setR] = useState();
  const [l, setL] = useState();
  const [c, setC] = useState()
  const [berlc, setberlc] = useState()
  const [nm_dirty_tires, setNm_dirty_tires] = useState(null);




  var newd =  new Date(id);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();


    var date =yearNumber +'-'+monthNumber +'-'+ dateNumber;







  

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/reporting/quality/${date}`);
      console.log(response.data.data.data);
      setDateOne(response.data.data.data.date)
      setFlash(response.data.data.data.flash);
      setFtr(response.data.data.data.ftr);
      setB(response.data.data.data.b);
      setE(response.data.data.data.ea);
      setR(response.data.data.data.r);
      setL(response.data.data.data.l);
      setC(response.data.data.data.c);
      setberlc(response.data.data.data.berlc);
      setNm_dirty_tires(response.data.data.data.nm_dirty_tires);
      
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
    const update = await RestaurantFinder.post(`/reporting/quality/update/${date}`, {flash ,
      ftr,b,ea,r,l,c,berlc,nm_dirty_tires
     
    });
   console.log(update);
    history.push("/quality");
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
          <label htmlFor="name">Flash</label>
          <input
            value={ flash}
            onChange={(e) => setFlash(e.target.value)}
            id="name"
            className="form-control"
            type="number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">FTR</label>
          <input
            value={ftr}
            onChange={(e) => setFtr(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">B</label>
          <input
            value={b}
            onChange={(e) => setB(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
          <div className="form-group">
          <label htmlFor="location">E</label>
          <input
            value={ea}
            onChange={(e) => setE(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">R</label>
          <input
            value={r}
            onChange={(e) => setR(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">L</label>
          <input
            value={l}
            onChange={(e) => setL(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">C</label>
          <input
            value={c}
            onChange={(e) => setC(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">BERLC</label>
          <input
            value={berlc}
            onChange={(e) => setberlc(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">NM Dirty</label>
          <input
            value={nm_dirty_tires}
            onChange={(e) => setNm_dirty_tires(e.target.value)}
            id="location"
            className="form-control"
            type="number"
          />
        </div>
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


export default UpdateQuality;
