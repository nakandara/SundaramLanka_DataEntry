import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddLine = () => {
  let history = useHistory();
  const { addPressOther } = useContext(RestaurantsContext);
 
////////////////////////////////////////////////

  
  const [kaizen, setKaizen] = useState();
  const [nearmiss, setNearmiss]   = useState();
  const [ra, setRa]   = useState();
  const [bd, setBd]   = useState();
  const [nra, setNra]   = useState();
  const [shift, setShift]   = useState();
  const [date, setDate] = useState(new Date());
  const [press_no, setPress_no]   = useState();

/////////////////////////////////////
const handleOption =(e)=>{
   
  setPress_no(e.target.value)
}


const handleOptionOne =(e)=>{
   
  setShift(e.target.value)
}











  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/presswiselinedata/pressother", {
        kaizen,nearmiss,ra,nra,bd,shift,date,press_no
      });
     
      addPressOther(response.data.data.data);
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
          <option selected>Press No</option>
              <option value="101"   >101</option>
              <option value="102"   >102</option>
              <option value="103"  >103 </option>
              <option value="104"  >104</option>
              <option value="105"   >105</option>
              <option value="106"  >106 </option>
              <option value="107"   >107</option>
              <option value="151"   >151</option>
              <option value="152"   >152</option>
              <option value="153"  >153 </option>
              <option value="154"  >154</option>
              <option value="155"   >155</option>
              <option value="156"  >156 </option>

              <option value="303"  >303 </option>
              <option value="304"  >304</option>
              <option value="305"   >305</option>
              <option value="306"  >306 </option>



              <option value="401"  >401</option>
              <option value="402"   >402</option>
              <option value="501"  >501 </option>
              <option value="502"  >502</option>
              <option value="651"   >651</option>
              <option value="1001"  >1001 </option>
      
       
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
              value={kaizen}
              onChange={(e) => setKaizen(e.target.value)}
              type="number"
              className="form-control"
              placeholder="kaizen"
            />
          </div>

          <div className="col">
            <input
              value={nearmiss}
              onChange={(e) => setNearmiss(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Near Miss"
            />
          </div>
          <div className="col">
            <input
              value={bd}
              onChange={(e) => setBd(e.target.value)}
              type="number"
              className="form-control"
              placeholder="BD"
            />
          </div>
          <div className="col">
            <input
              value={ra}
              onChange={(e) => setRa(e.target.value)}
              type="number"
              className="form-control"
              placeholder="RA"
            />
          </div>
          <div className="col">
            <input
              value={nra}
              onChange={(e) => setNra(e.target.value)}
              type="number"
              className="form-control"
              placeholder="NRA"
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
