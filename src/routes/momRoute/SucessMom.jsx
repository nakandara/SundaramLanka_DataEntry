import React ,{ useState, useContext,useEffect } from 'react'
import RestaurantFinder from "../../apis/RestaurantFinder"
import { RestaurantsContext } from '../../context/RestaurantsContext'
//import '../components/momList.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'

const SucessMom = () => {

    const { momsucess,setSucessmom,datem, setDatem,ddate, setDdate} = useContext(RestaurantsContext);

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
          const response = await RestaurantFinder.get(`card/icpc/completed/${parmData}/${parmDataTwo}`);
          console.log(response.data.data.data);
          setSucessmom(response.data.data.data);
          console.log(response);
        } catch (err) {}
      };
    fetchData()
}, [parmDataTwo,parmData])
    
console.log(momsucess);
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
            
            


          </tr>
        </thead>
        <tbody>
          {momsucess &&
            momsucess.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td>{d.card_no}</td>
                  <td className='wrap'>{moment(d.date_in).format('YYYY MMM D')}</td>
                  <td className='wrap'>{moment(d.date_out).format('YYYY MMM D')}</td>
                  <td className='wrap'>{moment(d.actual_date_out).format('YYYY MMM D')}</td>
                  <td className='reason'>{d.issue}</td>
                  <td className='reason'>{d.reason}</td>
                  <td className='reason'>{d.corrective_action}</td>
                  <td className='reason'>{d.preventive_action}</td>
                  <td>{d.shift}</td>
                  <td>{d.person_reporting}</td>
                  <td>{d.epf_no}</td>
                  <td>{d.field}</td>
                  <td>{d.resonable_person}</td>
                 
                  
                  
                  
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

export default SucessMom
