import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './momList.css'
import moment from 'moment'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const HRList = (props) => {
  const { restaurants, setRestaurants, addSucess,hr,setHR } = useContext(
    RestaurantsContext
  );
const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get("/reporting/hr/");
      
      setHR(response.data.data.data);
      
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

  console.log(hr);
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
    history.push(`hr/${id}/update/hr`);
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
            <th scope="col">Absent Inform</th>
            <th scope="col"> Absent Non Inform</th>
            <th scope="col">Man Power</th>
            <th scope="col">DOT</th>
            <th scope="col">Reportable Accident</th>
            <th scope="col">Non Reportable Accident</th>
            <th scope="col">Near Miss</th>
            <th scope="col">Kaizen</th>
            <th scope="col">Training</th>
            
            <th scope="col">Update</th>


          </tr>
        </thead>
        <tbody>
          {hr &&
            hr.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td className='wrap'>{moment(d.date).format('YYYY MMM D')}</td>
                  <td className='wrap'>{d.absent_inform}</td>
                  <td>{d.absent_non_inform}</td>
                  <td>{d.man_power}</td>
                  <td>{d.dot}</td>
                  <td>{d.reportable_accident}</td>
                  <td>{d.non_reportable_accident}</td>
                  <td>{d.near_miss}</td>
                  <td>{d.kaizen}</td>
                  <td>{d.training}</td>
                  
                  
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, d.date)}
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

export default HRList;
