import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const AddMachineCost = () => {
  let history = useHistory();
  const { addMachineCost } = useContext(RestaurantsContext);
  
////////////////////////////////////////////////

  
  const [date, setDate] = useState(new Date());
  const [pm_cost, setPm_cost]   = useState(0);
  const [bd_cost, setBd_cost]   = useState(0);
  const [pro_cost, setPro_cost] = useState(0);
  const [machine_name, setMachine_name] = useState(0);




  const handleOption =(e)=>{
   
    setMachine_name(e.target.value)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/machinecost/cost/", {
        date, pm_cost,bd_cost, pro_cost,machine_name
      });
      console.log(response.data.data);
      addMachineCost(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`hold/rccm`);}

  return (
    <div className="mb-4 ml-4 mr-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="form-control"
              placeholder="date"
            />
          </div>
          <div className="col">
            <input
              value={pm_cost}
              onChange={(e) => setPm_cost(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Pm Cost"
            />
          </div>
          <div className="col">
            <input
              value={bd_cost}
              onChange={(e) => setBd_cost(e.target.value)}
              className="form-control"
              type="number"
              placeholder="BD Cost"
            />
          </div>
          <div className="col">
            <input
              value={pro_cost}
              onChange={(e) => setPro_cost(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Project Cost"
            />
          </div>
          
          
          <div className="col m-1">
          <select  className="form-control" aria-label="Default select example"  onChange={(e)=>handleOption(e)}>
          <option selected>Name</option>
         <option value="84_mill"   >84 mill</option>
           <option value="60_chinese_Mill"  >60" chinese Mill</option>
       <option value="60_mill"  >60" mill (Tyre Building)</option>
       <option value="48_mill"  >48" mill (Tyre Building)</option>
       <option value="42_mill"  >42" mill</option>
       <option value="Cracker_Mill"  >Cracker Mill</option>
       <option value="Batch_off"  >Batch off</option>
       <option value="Extruder"  >Extruder</option>
       <option value="Shot_Blasting_Machine_001"  >Shot Blasting Machine 001</option>
       <option value="Shot_Blasting_Machine_002"  >Shot Blasting Machine 002</option>
       <option value="Kneeder"  >Kneeder</option>
       <option value="Creel_Bead_Machine"  >Creel Bead Machine</option>
       <option value="Curing_press_1001"  >Curing press 1001</option>
       <option value="Curing_press_651"  >Curing press 651</option>
       <option value="Curing_press_401"  >Curing press 401</option>
       <option value="Curing_press_402"  >Curing press 402</option>
       <option value="Curing_press_101"  >Curing press 101</option>
       <option value="Curing_press_501"  >Curing press 501</option>
       <option value="Curing_press_502"  >Curing press 502</option>
       <option value="Bumping_Press"  >Bumping Press</option>
       <option value="L/Un_Loading_press_20T_Line_01"  >L/Un Loading press 20T - Line 01</option>
       <option value="L/Un_Loading_press_20T_Line_02"  >L/Un Loading press 20T - Line 02</option>
       <option value="L/Un_Loading_press_20T_Line_03"  >L/Un Loading press 20T - Line 03</option>
       <option value="Curing_press_303"  >Curing press 303</option>
       <option value="Curing_press_304"  >Curing press 304</option>
       <option value="Curing_press_305"  >Curing press 305</option>
       <option value="Curing_press_306"  >Curing press 306</option>
       <option value="Curing_press_102"  >Curing press 102</option>
       <option value="Curing_press_103"  >Curing press 103</option>

       <option value="Curing_press_104"  >Curing press 104</option>
       <option value="Curing_press_105"  >Curing press 105</option>
       <option value="Curing_press_106"  >Curing press 106</option>
       <option value="Curing_press_151"  >Curing press 151</option>
       <option value="Curing_press_152"  >Curing press 152</option>
       <option value="Curing_press_153"  >Curing press 153</option>
       <option value="5T_Hoist"  >5T Hoist (Daesun,Press 1001)</option>
       <option value="5T_Hoist_Daesun_Press_651"  >5T Hoist (Daesun,Press 651)</option>
       <option value="3T_Hoist_Daesun_Bumping_Press_01"  >3T Hoist (Daesun, Bumping Press 01)</option>
       <option value="3T_Hoist_Dausun_L/Un_Loading_Press_01"  >3T Hoist (Dausun, L/Un Loading Press 01)</option>
       <option value="3T_Hoist_Daesun_Battary_Press"  >3T Hoist (Daesun, Battary Press)</option>
       <option value="3T_Hoist_Daesun_L/Un_Loading_Press_02"  >3T Hoist (Daesun, L/Un Loading Press 02)</option>
       <option value="3T_Hoist_Daesun_Line_03_Press"  >3T Hoist (Daesun, Line 03 Press)</option>
       <option value="3T_Hoist_Daesun_Line_03_Press"  >3T Hoist (Daesun, Line 03 Press)</option>
       <option value="3T_Hoist_Daesun_42_Mill"  >3T Hoist (Daesun, 42" Mill)</option>
       <option value="1T_Hoist_Daesun_48_Mill"  >1T Hoist (Daesun, 48" Mill)</option>
       <option value="Boiler_Fire_Wood"  >Boiler - Fire Wood </option>
       <option value="Air_Compressor_001"  >Air Compressor 001</option>
       <option value="Air_Compressor_002"  >Air Compressor 002</option>
       <option value="Air_Compressor_003"  >Air Compressor 003</option>
       <option value="Cooling_Tower_001"  >Cooling Tower 001</option>
       <option value="Cooling_Tower_002"  >Cooling Tower 002</option>
       <option value="Mould_Traviling_trolly_No_1_Line_01"  >Mould Traviling trolly No 1 - Line 01</option>
       <option value="Mould_Traviling_trolly_No_2_Line_01"  >Mould Traviling trolly No 2 - Line 01</option>
       <option value="Mould_Traviling_trolly_No_3_Line_01"  >Mould Traviling trolly No 3 - Line 01</option>
       <option value="Mould_Traviling_trolly_No_4_Line_02"  >Mould Traviling trolly No 4 - Line 02</option>
       <option value="Mould_Traviling_trolly_No_5_Line_02"  >Mould Traviling trolly No 5 - Line 02</option>
       <option value="Mould_Traviling_trolly_No_6_B/Press"  >Mould Traviling trolly No 6 - B/Press</option>
       <option value="Mould_Traviling_trolly_No_7_B/Press"  >Mould Traviling trolly No 7 - B/Press</option>
       <option value="Mould_Traviling_trolly_No_8_Line_03"  >Mould Traviling trolly No 8 -  Line 03</option>
       <option value="Mould_Traviling_trolly_No_9_Line_03"  >Mould Traviling trolly No 9 - Line 03</option>
       
       

      </select> </div> 
         
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

export default AddMachineCost;
