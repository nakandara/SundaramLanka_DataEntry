import React ,{ useState, useContext,useEffect } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import '../components/momList.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
const Sucess = () => {

    const { sucess,setSucess,datem, setDatem,ddate, setDdate} = useContext(RestaurantsContext);

    var newd =  new Date(datem);
    let monthNumber = newd.getMonth() + 1;                                       
    let yearNumber = newd.getFullYear() ;
    let dateNumber = newd.getDate();
console.log(newd);
    var parmData =yearNumber +'-'+monthNumber +'-'+ dateNumber

    var newdTwo =  new Date(ddate);
    let monthNumberTwo = newdTwo.getMonth() + 1;
    let yearNumberTwo = newdTwo.getFullYear() ;
    let dateNumberTwo = newdTwo.getDate();

    var parmDataTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo

    // var paramDataThreeOne =yearNumberTwo +''+monthNumberTwo
    // var paramDataThree =paramDataThreeOne-1
    //  var paramDataFour =paramDataThree-2
  console.log( parmData);
  console.log( parmDataTwo);

    
    console.log(ddate);
useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get(`reporting/mom/sucess/${parmData}/${parmDataTwo}`);
          console.log(response.data.data.restaurants);
          setSucess(response.data.data.restaurants);
          console.log(response);
        } catch (err) {}
      };
    fetchData()
}, [parmDataTwo,parmData])
    
console.log(sucess);
    return (
     
      
     
    
      <div className="list-group">
        <div className='sucess'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="division">
          <a className="navbar-brand" href="#">
           <h1>Complete Table</h1>
          </a>
        </div>
        <div className="datepicker">
          <DatePicker
            onChange={(e) => {
              setDatem(e);
            }} 
            selected={datem}
            className="select"
            dateFormat="dd MMM yyyy"
          />
         
        </div>
       
        <div>
          <DatePicker
            onChange={(e) => {
              setDdate(e);
            }}
            selected={ddate}
            className="select"
            dateFormat="dd MMM yyyy"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <div className="dmargin"></div>
          </ul>
        </div>
      </nav>
      </div>
     
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Point Discussed</th>
            <th scope="col">Countermeasure</th>
            <th scope="col"> Responsible</th>
            <th scope="col">Target Date</th>
            <th scope="col">Revised Date</th>
            <th scope="col">Rating</th>  
          </tr>
        </thead>
        <tbody>
          {sucess &&
            sucess.map((mom) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={mom.id}
                >
                  <td className='wrap'>{mom.point_discussed}</td>
                  <td>{mom.countermeasure}</td>
                  <td>{mom.responsible}</td>
                  <td>{new Date(mom.target_date).toLocaleDateString()}</td>
                  <td>{new Date(mom.revised_date).toLocaleDateString()}</td>
                  <td>{"$".repeat(mom.rating)}</td>
                  
                  
                  
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
    )
}

export default Sucess
