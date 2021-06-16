import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";



const AddMom = () => {
  let history = useHistory();
 
  const { addMom } = useContext(RestaurantsContext);

  const [id,setId] =useState()
const [four_m,setFour_m] =useState()
const [in_date,setIn_date] =useState()
const [disc_date,setDisc_date] =useState()
const [issue,setIssue] =useState()

const [disc_point,setDisc_point] =useState()
const [status,setStatus] =useState()
const [res,setRes] =useState()
const [target_date,setTarget_date] =useState()



























  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/momdpr/mom/", {
        four_m, in_date,disc_date,issue,disc_point,res,status,target_date
      });
      console.log(response.data.data.data);
      addMom(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`mom/sucess`);}


const handleOptionOne =(e)=>{
  setFour_m(e.target.value)
}

const handleOptionTwo =(e)=>{
  
}












  return (
    <div className="ml-4 mb-4 mt-3 mr-5">
      <form action="">
        <div className="form-group">
          <div className="col m-1 d-flex">

            <div> <label htmlFor="name" className='ml-2'>Four M</label><select className="form-control " aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}  style={{width:'100%'}}>
          <option selected  >Four M</option>
         <option value="Man"   >Man</option>
           <option value="Material"  >Material</option>
       <option value="Machine"  >Machine</option>
       <option value="Logistic"  >Logistic</option>
       
      </select></div>
            
        <div>  <label htmlFor="name" className='ml-1'>In Date</label>
            <input
              value={in_date}
              onChange={(e) => setIn_date(e.target.value)}
              className="form-control ml-1 mr-1"
              type="date"
              placeholder="In Date"
             style={{width:'100%'}}
            /> </div>

            <div>
            <label htmlFor="name"  className='ml-2'>Discuss Date</label>
            <input
              value={disc_date}
              onChange={(e) => setDisc_date(e.target.value)}
              className="form-control ml-2 mr-1"
              type="date"
              placeholder="Discuss Date"
              style={{width:'100%'}}
            />
            </div>

            <div>
            <label htmlFor="name " className='ml-3'>Status</label>
            <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="form-control ml-3"
              type="text"
              placeholder="Status"
              style={{width:'100%'}}
              
            />
  
            </div>
            <div> <div  className='d-flex mt-3'>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-danger ml-4 mt-3"
            style={{width:'500px'}}
          >
            Add
          </button>
          {/* <button
            onClick={handleSucess}
            style={{width:'100%'}}
          
            className="btn btn-success ml-2 mt-3"
          >
          Sucess
          </button>     */}
        </div></div>
          </div>
          
          <div className="col m-1">
            <input
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Issue"
            />
          </div>
          <div className="col m-1">
            <input
              value={disc_point}
              onChange={(e) => setDisc_point(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Discuss Point"
            />
          </div>

          <div className="col m-1">
            <input
              value={res}
              onChange={(e) => setRes(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Reason"
            />
          </div>


          <div className="col m-1">
            


<input
              value={target_date}
              onChange={(e) => setTarget_date(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Target Date"
             
            />
          </div>


          <div className="col m-1">
           
          </div>

{/* <div className="col">
<select className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
          <option selected>Shift</option>
         <option value="A"   >A</option>
           <option value="B"  >B</option>
       <option value="C"  >C</option>
       <option value="G"  >G</option>
       
      </select>
</div>
          

          <div className="col">
            <input
              value={person_reporting}
              onChange={(e) => setperson_reporting(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Reoprted Person"
            />
          </div>


          <div className="col">
            <input
              value={epf_no}
              onChange={(e) => setepf_no(e.target.value)}
              className="form-control"
              type="number"
              placeholder="EPF No"
            />
          </div>
          <div className="col">
          <select className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionTwo(e)}>
          <option selected>Category</option>
         <option value="Mechanical"   >Mechanical</option>
           <option value="Production"  >Production</option>
       <option value="Quality"  >Quality</option>
       <option value="Safety"  >Safety</option>
       <option value="Electrical"  >Electrical</option>
       <option value="HR"  >HR</option>
       <option value="IE"  >IE</option>
       <option value="Mould"  >Mould</option>
       <option value="Planning"  >Planning</option>
      </select>
      </div>
      <div className="col">
            <input
              value={resonable_person}
              onChange={(e) => setresonable_person(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Resonable Person"
            />
          </div> */}
      
      
         
        </div>
      </form>
    </div>
  );
};

export default AddMom;
