import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './mom.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from 'moment'



const ICPCList = (props) => {
  const { icpc, setICPC, addSucess } = useContext(
    RestaurantsContext
  );
const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get("/card/icpc");
      console.log('ok');
      setICPC(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData()
    if(refresh==true) setRefresh(false)
  }, [refresh])

  
  const handleDelete = async (e,card_no,
    date_in, 
    date_out,
    actual_date_out,
    issue,reason,
    corrective_action,
    preventive_action,
    shift,person_reporting,
    epf_no, 
    field,
    resonable_person,card_type,area) => {
    e.stopPropagation();
    
    try {
      const responseTwo = await RestaurantFinder.post("/card/icpc/completed", {
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
         resonable_person,
         card_type,area
      });
      const response = await RestaurantFinder.delete(`/card/icpc/${card_no}/delete`);
      if(response){
        
          setRefresh(true)
        
       console.log(responseTwo.data.data);
        addSucess(responseTwo.data.data.data);
        console.log(response.data.data);
        setICPC(
         icpc && icpc.filter((card) => {
            return card.card_no !== card_no;
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e,card_no) => {
    e.stopPropagation();
    history.push(`icpc/${card_no}/update/icpc`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`home/mom/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.id} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };

  return (
    <div   className="m-4">
      <table className="table table-hover table-dark"   >
        <thead>
          <tr className="bg-primary">
            <th  scope="col">Card No</th>
            <th scope="col">In Date</th>
            <th scope="col"> Out Date</th>
            <th scope="col">Actual Out Date</th>
            <th scope="col">Issue</th>
            <th scope="col">Reason</th>
            <th scope="col">Corrective Action</th>
            <th scope="col">Preventive Action</th>
            <th scope="col">Shift</th>
            <th scope="col">Reported Person</th>
            <th scope="col">EPF No</th>
            <th scope="col">Field</th>
            <th scope="col">Resonable person</th>
            <th scope="col">Card Type</th>
            <th scope="col">Area</th>
            <th scope="col">Update</th>
            <th scope="col">Completed</th>
            


          </tr>
        </thead>
        <tbody>
          {icpc &&
            icpc.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td>{d.card_no}</td>
                  <td >{d.date_in}</td>
                  <td >{d.date_out}</td>
                  <td >{d.actual_date_out}</td>
                  <td >{d.issue}</td>
                  <td >{d.reason}</td>
                  <td >{d.corrective_action}</td>
                  <td >{d.preventive_action}</td>
                  <td>{d.shift}</td>
                  <td>{d.person_reporting}</td>
                  <td>{d.epf_no}</td>
                  <td>{d.field}</td>
                  <td>{d.resonable_person}</td>
                 <td>{d.card_type}</td>
                 <td>{d.area}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, d.card_no)}
                      className="btn btn-warning"
                    >
                      Up
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) =>
                        handleDelete(
                          e,d.card_no,d.date_in,d.date_out,d.actual_date_out,d.issue,d.reason,d.corrective_action
                         , d.preventive_action,d.shift,d.person_reporting,d.epf_no,d.field,d.resonable_person,d.card_type,d.area
                         
                         
                        )
                      }
                      className="btn btn-success"
                    >
                     Com
                    </button> 
                    </td>
                </tr>
              );
            })}
          {/* <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
    

export default ICPCList;
