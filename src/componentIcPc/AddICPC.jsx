import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";



const AddICPC = () => {
  let history = useHistory();
 
  const { addICPC } = useContext(RestaurantsContext);


const [card_no,setcard_no] =useState()
const [date_in,set_date_in] =useState()
const [date_out,setdate_out] =useState()
const [actual_date_out,setactual_date_out] =useState()
const [issue,setissue] =useState()
const [reason,setreason] =useState()
const [corrective_action,setcorrective_action] =useState()
const [preventive_action,setpreventive_action] =useState()
const [shift,setshift] =useState()
const [person_reporting,setperson_reporting] =useState()
const [epf_no,setepf_no] =useState()
const [field,setfield] =useState()
const [resonable_person,setresonable_person] =useState()

const [card_type,setcard_type] =useState()

const [area,setarea] =useState()























  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/card/icpc/", {
        card_no,
         date_in, 
         date_out,
         actual_date_out,
         issue,reason,
         corrective_action,
         preventive_action,
         shift,person_reporting,
         epf_no, 
         field,
         resonable_person,card_type,area
      });
      console.log(response.data.data.data);
      addICPC(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }; const handleSucess= async (e) => {
    e.preventDefault();
    history.push(`icpc/sucess`);}


const handleOptionOne =(e)=>{
  setshift(e.target.value)
}

const handleOptionTwo =(e)=>{
  setfield(e.target.value)
}




const handleOptionType =(e)=>{
  setcard_type(e.target.value)
}

const handleOptionArea =(e)=>{
  setarea(e.target.value)
}



console.log(card_type);






  return (
    <div className="m-4">
      <form action="">
        <div className="form-group">
          <div className="col">
            <input
              value={card_no}
              onChange={(e) => setcard_no(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Card No"
            />
          </div>
          <div className="col m-1">
            <input
              value={date_in}
              onChange={(e) => set_date_in(e.target.value)}
              className="form-control"
              type="date"
              placeholder="In Date"
            />
          </div>
          <div className="col m-1">
            <input
              value={date_out}
              onChange={(e) => setdate_out(e.target.value)}
              className="form-control"
              type="date"
              placeholder="Target Date Out"
            />
          </div>
          <div className="col m-1">
            <input
              value={actual_date_out}
              onChange={(e) => setactual_date_out(e.target.value)}
              className="form-control"
              type="date"
              placeholder="Completed Date"
            />
          </div>
          <div className="col m-1">
            <input
              value={issue}
              onChange={(e) => setissue(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Issue"
            />
          </div>

          <div className="col m-1">
            <input
              value={reason}
              onChange={(e) => setreason(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Reason"
            />
          </div>


          <div className="col m-1">
            <input
              value={corrective_action}
              onChange={(e) => setcorrective_action(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Corrective Action"
            />
          </div>


          <div className="col m-1">
            <input
              value={preventive_action}
              onChange={(e) => setpreventive_action(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Preventive Action"
            />
          </div>

<div className="col m-1">
<select className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionOne(e)}>
          <option selected>Shift</option>
         <option value="A"   >A</option>
           <option value="B"  >B</option>
       <option value="C"  >C</option>
       <option value="G"  >G</option>
       
      </select>
</div>
<div className="col m-1">
<select className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionArea(e)}>
          <option selected>Area</option>
         <option value="1"   >1</option>
           <option value="2"  >2</option>
       <option value="3"  >3</option>
       <option value="4"  >4</option>
       
      </select>
</div>

<div className="col m-1">
<select className="form-control" aria-label="Default select example"  onChange={(e)=>handleOptionType(e)}>
          <option selected>Type Card</option>
         <option value="PC"   >PC</option>
           <option value="IC"  >IC</option>
       <option value="SAFETY"  >SAFETY</option>
       
       
      </select>
</div>
          

          <div className="col m-1">
            <input
              value={person_reporting}
              onChange={(e) => setperson_reporting(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Reoprted Person"
            />
          </div>


          <div className="col m-1">
            <input
              value={epf_no}
              onChange={(e) => setepf_no(e.target.value)}
              className="form-control"
              type="number"
              placeholder="EPF No"
            />
          </div>
          <div className="col m-1">
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
      <div className="col m-1">
            <input
              value={resonable_person}
              onChange={(e) => setresonable_person(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Resonable Person"
            />
          </div>
      
         
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary ml-4"
          >
            Add
          </button>
          <button
            onClick={handleSucess}
          
            className="btn btn-success m-1"
          >
          Sucess
          </button>
         
        </div>
      </form>
    </div>
  );
};

export default AddICPC;
