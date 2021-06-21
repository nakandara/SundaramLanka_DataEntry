import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './momList.css'
import moment from 'moment'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const PressLineList = (props) => {
  const {  pressLine,setPressLine } = useContext(
    RestaurantsContext
  );
const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get("/presswiselinedata/pressline");
      
      setPressLine(response.data.data.data);
      
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

console.log(pressLine);


  useEffect(() => {
    fetchData()
    if(refresh==true) setRefresh(false)
  }, [refresh])

  console.log(pressLine);


  const handleDelete = async (e, id) => {
    e.stopPropagation();
    
    try {
      const response = await RestaurantFinder.delete(`/presswiselinedata/pressline/delete/${id}`);
      if(response){
        
        const responseTwo = await RestaurantFinder.get("/presswiselinedata/pressline/");
          setRefresh(true)
        
       console.log(responseTwo.data.data);
        
        console.log(response.data.data);
        setPressLine(
         pressLine && pressLine.filter((d) => {
            return d.id !== id;
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`pressline/${id}/update/pressline`);
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
           
            <th scope="col"> Line No </th>
            <th scope="col">Shift </th>
            <th scope="col"> ManPower</th>
            <th scope="col">DOT </th>


            <th scope="col">Head Count </th>
            <th scope="col"> AI</th>
            <th scope="col">ANI</th>
            <th scope="col">UP </th>
            <th scope="col">Delete </th>
            

          </tr>
        </thead>
        <tbody>
          {pressLine &&
           pressLine.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td className='wrap'>{moment(d.date).format('YYYY MMM D')}</td>
                  
                  <td className='wrap'>{d.line_no}</td>
                  <td className='wrap'>{d.shift}</td>
                  <td>{d.mp}</td>
                  <td>{d.dot}</td>

                  <td className='wrap'>{d.head_count}</td>
                  <td>{d.ai}</td>
                  <td>{d.ani}</td>
                  
                  
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, d.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, d.id)}
                      className="btn btn-danger"
                    >
                      Delete
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

export default PressLineList;
