import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './momList.css'
import moment from 'moment'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const MixingRccmList = (props) => {
  const { restaurants, setRestaurants, addSucess ,mixingRccm,setMixingRccm} = useContext(
    RestaurantsContext
  );
const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get("/reporting/mixin/rccm");

      console.log(response.data.data.data);
      
      setMixingRccm(response.data.data.data);


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

  //console.log(restaurants);
  const handleDelete = async (e, id,point_discussed,countermeasure,responsible,target_date,revised_date,rating) => {
    e.stopPropagation();
    console.log(responsible);
    console.log(restaurants);
    try {
      const responseTwo = await RestaurantFinder.post("/reporting/mom/sucess", {
        point_discussed,
        countermeasure,
        responsible,
        target_date,
        revised_date,
        rating
      });
      const response = await RestaurantFinder.delete(`/reporting/mom/${id}/delete`);
      if(response){
        
          setRefresh(true)
        
       console.log(responseTwo.data.data);
        addSucess(responseTwo.data.data.restaurant);
        console.log(response.data.data);
        setRestaurants(
         restaurants && restaurants.filter((restaurant) => {
            return restaurant.id !== id;
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/mixing/rccm/update/${id}`);
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
    <div   className="">
      <table className="table table-hover table-dark"   >
        <thead>
          <tr className="bg-primary">
            <th  scope="col">In Date</th>
            <th scope="col">Ap No</th>
            <th scope="col"> Accountability</th>
            <th scope="col">Matrix</th>
            <th scope="col">Target </th>
            <th scope="col">Actual</th>
            <th scope="col">Reason NAT</th>
            <th scope="col">Root Cause</th>
            <th scope="col">Countermeasure</th>
            <th scope="col">Res</th>
            <th scope="col">Target Date</th>
            <th scope="col">Status</th>


            <th scope="col">Update</th>
            
          </tr>
        </thead>
        <tbody>
          {mixingRccm &&
            mixingRccm.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td >{moment(d.in_date).format('YYYY MMM D')}</td>
                  <td className='wrap'>{d.ap_no}</td>
                  <td>{d.accountability}</td>
                  <td>{d.metix}</td>
                  <td>{d.target_date}</td>
                  <td>{d.actual}</td>
                  <td >{d.reason_achive_not_target}</td>
                  <td >{d.root_cause}</td>
                  <td >{d.counter_measure}</td>
                  <td>{d.resp}</td>
                  <td>{d.target}</td>
                  <td>{d.status}</td>
                  
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, d.id)}
                      className="btn btn-warning"
                    >
                      Up
                    </button>
                  </td>
                  
                    {/* <button
                      onClick={(e) =>
                        handleDelete(
                          e, mom.id,
                          mom.point_discussed,
                          mom.countermeasure,
                          mom.responsible,
                          mom.target_date,
                          mom.revised_date,
                          mom.rating,
                         
                         
                        )
                      }
                      className="btn btn-success"
                    >
                     Complete
                    </button> */}
                 
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

export default MixingRccmList;
