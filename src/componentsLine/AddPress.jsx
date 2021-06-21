import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddLine = () => {
  let history = useHistory();
  const { addPressLine } = useContext(RestaurantsContext);
 
////////////////////////////////////////////////

  
  const [mp, setMp] = useState();
  const [dot, setDot]   = useState();
  const [head_count, setHead_count]   = useState();
  const [ai, setAi]   = useState();
  const [ani, setAni]   = useState();
  const [shift, setShift]   = useState();
  const [date, setDate] = useState(new Date());
  const [line_no, setLine_no]   = useState();

/////////////////////////////////////
const handleOption =(e)=>{
   
  setLine_no(e.target.value)
}


const handleOptionOne =(e)=>{
   
  setShift(e.target.value)
}











  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/presswiselinedata/pressline", {
        date, shift,mp,dot,head_count,ai,ani,line_no
      });
      console.log(response.data.data);
      addPressLine(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`hold/rccm`);}

  return (
    <div className="mb-2" style={{marginLeft:'2%',marginRight:'3%'}}>
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="form-control"
              placeholder="Date"
            />
          </div>
          <div className="col">
          <select className="col form-control " aria-label="Default select example"  onChange={(e)=>handleOption(e)}>
          <option selected>Line No</option>
          <option value="1"   >1</option>
         <option value="2"   >2</option>
           <option value="3"  >3 </option>
       <option value="4"  >4</option>
      
       
      </select>
          </div>
          <div className="col">
          <select className="col form-control " aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
          <option selected>Shift</option>
         <option value="A"   >A</option>
           <option value="B"  >B </option>
       <option value="C"  >C</option>
      </select>
          </div>

          <div className="col">
            <input
              value={mp}
              onChange={(e) => setMp(e.target.value)}
              type="number"
              className="form-control"
              placeholder="MP"
            />
          </div>

          <div className="col">
            <input
              value={dot}
              onChange={(e) => setDot(e.target.value)}
              type="number"
              className="form-control"
              placeholder="DOT"
            />
          </div>
          <div className="col">
            <input
              value={head_count}
              onChange={(e) => setHead_count(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Head Count"
            />
          </div>
          <div className="col">
            <input
              value={ai}
              onChange={(e) => setAi(e.target.value)}
              type="number"
              className="form-control"
              placeholder="AI"
            />
          </div>
          <div className="col">
            <input
              value={ani}
              onChange={(e) => setAni(e.target.value)}
              type="number"
              className="form-control"
              placeholder="ANI"
            />
          </div>
          
          
              
         
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
         
        </div>
      </form>
    </div>
  );
};

export default AddLine;
