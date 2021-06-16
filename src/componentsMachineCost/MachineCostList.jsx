import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './momList.css'
import moment from 'moment'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const MachineCostList = (props) => {
  const { restaurants, setRestaurants, addSucess,machineCost,setMachineCost } = useContext(
    RestaurantsContext
  );
const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get("/machinecost/cost/");
      
      setMachineCost(response.data.data.data);
      
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

 
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    
    try {
     
      const response = await RestaurantFinder.delete(`/machinecost/cost/${id}/delete`);
      if(response){
    
        
        setMachineCost(
         machineCost && machineCost.filter((restaurant) => {
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
    history.push(`machinecost/${id}/update/machinecost`);
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
    <div   className="list-group">
      <table className="table table-hover table-dark"   >
        <thead>
          <tr className="bg-primary">
            <th  scope="col">Date</th>
            <th scope="col">PM Cost </th>
            <th scope="col"> Bd Cost </th>
            <th scope="col"> Project Cost </th>
            <th scope="col"> Machine Name </th>
            <th scope="col"> Delete </th>
            <th scope="col"> Update </th>
            

          </tr>
        </thead>
        <tbody>
          {machineCost &&
            machineCost.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td className='wrap'>{moment(d.date).format('YYYY MMM D')}</td>
                  <td className='wrap'>{d.pm_cost}</td>
                  <td>{d.bd_cost}</td>
                  <td>{d.pro_cost}</td>
                  <td>{d.machine_name}</td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, d.id)}
                      className="btn btn-danger"
                    >
                     Delete
                    </button>
                  </td>
                  
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

export default MachineCostList;
