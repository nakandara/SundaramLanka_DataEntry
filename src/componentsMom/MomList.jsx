import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from 'moment'



const MomList = (props) => {
  const { mom, setMom, addSucess } = useContext(
    RestaurantsContext
  );
const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get("/momdpr/mom");
      console.log('ok');
      setMom(response.data.data.data);
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

  
  const handleDelete = async (e,id,four_m, in_date,disc_date,issue,disc_point,res,status,target_date) => {
    e.stopPropagation();
    
    try {
      const responseTwo = await RestaurantFinder.post("/momdpr/mom/completed", {
        four_m, in_date,disc_date,issue,disc_point,res,status,target_date
      });
      const response = await RestaurantFinder.delete(`momdpr/mom/${id}/delete`);
      if(response){
        
          setRefresh(true)
        
       console.log(responseTwo.data.data);
        addSucess(responseTwo.data.data.data);
        console.log(response.data.data);
        setMom(
         mom && mom.filter((card) => {
            return id !== id;
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };












  const handleUpdate = (e,id) => {
    e.stopPropagation();
    history.push(`momdpr/${id}/update/mom`);
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
            <th  style={{textAlign:'start'}} >4M</th>
            <th style={{textAlign:'start'}}>SN</th>
            <th style={{textAlign:'start'}}> In Date</th>
            <th style={{textAlign:'start'}}>Discuss Date</th>
            <th style={{textAlign:'start'}}>Issue</th>
            <th style={{textAlign:'start'}}>Discussed Point</th>
            <th style={{textAlign:'start'}}>Res</th>
            <th style={{textAlign:'start'}}>Target Date</th>
            <th style={{textAlign:'start'}}>Status</th>
            <th style={{textAlign:'start'}}>update</th>
            <th style={{textAlign:'start'}}>complete</th>
            


          </tr>
        </thead>
        <tbody>
          {mom &&
            mom.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                ><td style={{textAlign:'start'}}>{d.four_m}</td>
                  <td style={{textAlign:'start'}}>{d.id}</td>
                  <td style={{textAlign:'start'}}>{moment(d.in_date).format('YYYY MMM D')}</td>
                  <td style={{textAlign:'start'}}>{d.disc_date}</td>
                 
                  <td style={{textAlign:'start'}}>{d.issue}</td>
                  <td style={{textAlign:'start'}}>{d.disc_point}</td>
                  <td style={{textAlign:'start'}}>{d.res}</td>
                  <td style={{textAlign:'start'}}>{d.target_date}</td>
                  <td style={{textAlign:'start'}}>{d.status}</td>
                
                  
                  
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, d.id)}
                      className="btn btn-warning"
                    >
                      Up
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) =>
                        handleDelete(
                          e,d.id,d.four_m,d.in_date,d.disc_date,d.issue,d.disc_point,d.res,d.status
                         , d.target_date
                         
                         
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
    

export default MomList;
