import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './momList.css'
import moment from 'moment'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import  './momList.css'

const SearchSnPress = () => {

    const {  addSucess,press,setPress,
        time,setTime,builderPressData,
        setBuilderPressData,pressData,setPressData,diffData,setDiffData,sn, setSn } = useContext(RestaurantsContext );
    
    const [serch,setSerch] =useState("")
    
        var paramTime = new Date(time)
    
    let monthNumber = paramTime.getMonth()+1 
    let yearNumber = paramTime.getFullYear()
    let dateNumber =  paramTime.getDate()
    
    var paramDateOne = yearNumber +'-'+ monthNumber +'-'+ dateNumber
    
    
      console.log(paramDateOne)
    
      var nextDay;
      
      
      nextDay = new Date(time);
      nextDay.setDate(nextDay.getDate() + 1);
    
    
      let monthNumberTwo = nextDay.getMonth()+1 
    let yearNumberTwo = nextDay.getFullYear()
    let dateNumberTwo =  nextDay.getDate()
    
    var paramDateTwo = yearNumberTwo +'-'+ monthNumberTwo +'-'+ dateNumberTwo
    
    
    console.log( paramDateTwo )
    
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
     
    console.log(builderPressData);
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
    
    console.log(pressData);
     
    
    //////////////////////////////////////////
    
    const bu = builderPressData
    
    var bparray=[]
    
    bu&& bu.map((element)=>{
      bparray.push(element.sn)
    })
    
    
    const pr =pressData
    
    
    
    var prarray=[]
    
    pr&& pr.map((element)=>{
      prarray.push(element.sn)
    })
    
    
    console.log(prarray);
    console.log(bparray);
    
    
    
    
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
    
    
    
    console.log(diff);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    









const handleUpdate =(e,d)=>{

    e.stopPropagation();
    setSn(d)
    history.push(`pressnew/${d}`);
    

}

  return (
      <div>
    <div className='d-flex As '>
        <div><h1 style={{color:'red'}}>
     NO
      </h1></div>
      <div className="form-row">
          <div className="col"> <input  type='number'  className="form-control in"
              placeholder="Sn"    value={serch} onChange={(e)=>setSerch(e.target.value)}  style={{maxWidth:'4600px'}}/></div> </div>
   <div  className='selectd'> 
   <DatePicker onChange={(e)=>{setTime(e)}  }  
        selected={time}
        dateFormat='dd MMM yyyy'
        relativeSize={true}
        className='select'
        popperPlacement="auto" 
        
        /></div>
 </div>

      <table className="table table-hover table-dark mt-4 ttt"   >
        <thead >
          <tr className="bg-primary">
            <th  scope="col" style={{fontSize:'24px'}} >SN</th>
            
            

          </tr>
        </thead>
        <tbody>
          {diff &&
           diff.filter((val)=>{
            
            if(serch=="")

            {  return val}

            else if (val.includes(serch))
            {
  return val
            }}).map((d,index) => {
                return (
                  <tr
                    // onClick={() => handleRestaurantSelect(restaurant.id)}
                    key={index}
                  >
                    <td className='wrap' onClick={(e)=>handleUpdate(e,d)} style={{fontSize:'24px'}}>{d}</td> </tr> 
            
             
              )})
            }
         
        </tbody>
      </table>



   </div>
  );
};

export default SearchSnPress