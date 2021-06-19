import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './momList.css'
import moment from 'moment'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



const PressNewList = (props) => {


  const {  addSucess,press,setPress,
    time,setTime,builderPressData,
    setBuilderPressData,pressData,setPressData,diffData,setDiffData } = useContext(RestaurantsContext );



    var paramTime = new Date(time)

let monthNumber = paramTime.getMonth()+1 
let yearNumber = paramTime.getFullYear()
let dateNumber =  paramTime.getDate()

var paramDateOne = yearNumber +'-'+ monthNumber +'-'+ dateNumber


 

  var nextDay;
  
  
  nextDay = new Date(time);
  nextDay.setDate(nextDay.getDate() + 1);


  let monthNumberTwo = nextDay.getMonth()+1 
let yearNumberTwo = nextDay.getFullYear()
let dateNumberTwo =  nextDay.getDate()

var paramDateTwo = yearNumberTwo +'-'+ monthNumberTwo +'-'+ dateNumberTwo




const [refresh, setRefresh] = useState(false)

  let history = useHistory();



  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get(`/builderpressdata/builder/${paramDateOne}/${paramDateTwo}`);
      
      setBuilderPressData(response.data.data.data);
      
    } catch (err) {
      console.log(err);
    }
  };
 

  ///////////////


  const fetchDataPress = async () => {
    try {
      const response = await RestaurantFinder.get(`/builderpressdata/presses/${paramDateOne}/${paramDateTwo}`);
      
      setPressData(response.data.data.data);
      
    } catch (err) {
      console.log(err);
    }
  };

  /////////////////////



//////////////////////////////////////////

const bu = [{sn:1,wei:34},{sn:2,wei:34},{sn:3,wei:34},{sn:4,wei:34} ]

var bparray=[]

bu&& bu.map((element)=>{
  bparray.push(element.sn)
})


const pr = [{sn:1,wei:34},{sn:2,wei:34} ]



var prarray=[]

pr&& pr.map((element)=>{
  prarray.push(element.sn)
})






function arr_diff (a1, a2) {

  var a = [], diff = [];

  for (var i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
  }

  for (var i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
          delete a[a2[i]];
      } else {
          a[a2[i]] = true;
      }
  }

  for (var k in a) {
      diff.push(k);
  }

  return diff;
}





const diff=arr_diff(bparray,prarray)



useEffect(() => {
  fetchData();
  fetchDataPress();
 
}, [paramDateOne,paramDateTwo]);































































  useEffect(() => {
    fetchData()
    if(refresh==true) setRefresh(false)
  }, [refresh])

  





  const handleDelete = async (e, id) => {
    e.stopPropagation();
    
    try {
      const response = await RestaurantFinder.delete(`/pressdata/press/${id}`);
      if(response){
        
        // const responseTwo = await RestaurantFinder.get("/pressdata/press/");
          setRefresh(true)
        
      //  console.log(responseTwo.data.data);
        // addSucess(responseTwo.data.data.press);
        // console.log(response.data.data);
        setPressData(
         pressData && pressData.filter((d) => {
            return d.sn !== id;
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/press/${id}/update/pressnew`);
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
            <th  scope="col">SN</th>
            <th scope="col">Press No </th>
            <th scope="col"> Shift </th>
            <th scope="col"> Tyre type </th>
            <th scope="col"> Load Time </th>
            <th scope="col">Update </th>
            <th scope="col">Delete </th>
            

          </tr>
        </thead>
        <tbody>
          {pressData &&
          pressData.map((d,index) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={index}
                >
                  <td className='wrap'>{d.sn}</td>
                  <td className='wrap'>{d.press_no}</td>
                  <td>{d.shift}</td>
                  <td>{d.tyre_type}</td>
                  <td>{d.load_time}</td>
                  
                  
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, d.sn)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, d.sn)}
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

export default PressNewList;
