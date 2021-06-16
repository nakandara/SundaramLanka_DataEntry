import React, { useState, useContext,useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddPressNew = () => {
  let history = useHistory();
  const { addPress,builderPressDataOne,
    setBuilderPressDataOne ,sn, setSn} = useContext(RestaurantsContext);
  
////////////////////////////////////////////////

  
 
  const [press_no, setPress_no]    =useState();
  const [shift, setShift]          =useState();
  const [tyre_type, setTyre_type]  =useState();
  const [date,setDate]             =useState(new Date())
  const [weight,setWeight]         =useState(0)
  const [load_time,setLoad_time]         =useState()















  /////////////////////////////////////////////////


  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get(`/builderpressdata/builder/${sn}`);
      
      setBuilderPressDataOne(response.data.data.data);
      setDate(response.data.data.data.timezone);
      setWeight(response.data.data.data.actwgt);
      

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [sn]);




/////////////////////////////////////
const handleOption =(e)=>{
   
  setPress_no(e.target.value)
}


const handleOptionOne =(e)=>{
   
  setShift(e.target.value)
}

const handleOptionTwo =(e)=>{
   
  setTyre_type(e.target.value)
}










  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/pressdata/press/", {
        sn,
        press_no,
       shift,
          tyre_type,date,weight,load_time
      });
      console.log(response.data.data);
      addPress(response.data.data.data);
      alert('ස්තූතියි')
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
              value={sn}
              onChange={(e) => setSn(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Sn"
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
          <select className="col form-control " aria-label="Default select example"  onChange={(e)=>handleOptionTwo(e)}>
          <option selected>Tyre Type</option>
         <option value="SRT"   >SRT</option>
           <option value="POB"  >POB </option>
       <option value="APW"  >APW</option>
       <option value="SKS"  >SKS</option>
       <option value="PBB"  >PBB</option>
      </select>
          </div>
          
          <div className="col">
            <input
              value={load_time}
              onChange={(e) => setLoad_time(e.target.value)}
              type="time"
              className="form-control"
              placeholder="Load Time"
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

export default AddPressNew;
