import React, { useEffect, useContext,useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import './detail.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'


const useStyles = makeStyles({
  table: {
    
  },
});




const DetailList = (props) => {
  const { detail, setDetail, addSucess,dateOne,setDateTwo,dateTwo,setDateOne,category,setCtegory } = useContext(
    RestaurantsContext
  );


  const classes = useStyles();

  var newd =  new Date(dateOne);
  let monthNumber = newd.getMonth() + 1;                                       
  let yearNumber = newd.getFullYear() ;
  let dateNumber = newd.getDate();

  var paramDateOne =yearNumber +'-'+monthNumber +'-'+ dateNumber;
  ///////////////////////////////////////////////////////

  var newdTwo =  new Date(dateTwo);
  let monthNumberTwo = newdTwo.getMonth() + 1;                                       
  let yearNumberTwo = newdTwo.getFullYear() ;
  let dateNumberTwo = newdTwo.getDate();

  var paramDateTwo =yearNumberTwo +'-'+monthNumberTwo +'-'+ dateNumberTwo;



console.log(category);

const [refresh, setRefresh] = useState(false)
  let history = useHistory();
  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get(`/momdetail/detail/${paramDateOne}/${paramDateTwo}/${category}`);
      console.log('ok');
      setDetail(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };



  const fetchDataAll = async () => {
    try {
      const response = await RestaurantFinder.get(`/momdetail/detail`);
      console.log('ok');
      setDetail(response.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };




  useEffect(() => {


    if (category=='shift') {
      fetchDataAll()
      
    }
    else{
      fetchData()
    }
   
   
  }, [refresh,paramDateOne,paramDateTwo,category]);











  

  useEffect(() => {
    
    if(refresh==true) setRefresh(false)
  }, [refresh,paramDateOne,paramDateTwo,category])

  
  const handleDelete = async (e, id,point_discussed,countermeasure,responsible,target_date,revised_date,rating) => {
    e.stopPropagation();
    console.log(responsible);
   
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
        setDetail(
         detail && detail.filter((restaurant) => {
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
    history.push(`detail/${id}/update/detail`);
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
    <div   className='detail'>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table"    >
        <TableHead className='a'>
          <TableRow className='tHead'>
            <TableCell className='tHead'>No</TableCell>
            <TableCell align="center" className='tHead'>Reported Person</TableCell>
            
            <TableCell align="center" className='tHead'>Observetion</TableCell>
            <TableCell align="center" className='tHead'>Responsible</TableCell>
            <TableCell align="center" className='tHead'>Action</TableCell>
            <TableCell align="center" className='tHead'>Date</TableCell>
            <TableCell align="center" className='tHead'>Shift</TableCell>
            <TableCell align="center" className='tHead'>Status</TableCell>
            <TableCell align="center" className='tHead'>Update</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {detail.map((row) => (
            <TableRow key={row.id}>
             
              <TableCell align="center"  className='tHeadOneD'>{row.id}</TableCell>
              <TableCell align="center" className='tHeadTwo'>{row.reported_person}</TableCell>
              <TableCell align="center" className='tHeadThreeD'> {row.observation}</TableCell>
              <TableCell align="center" className='tHeadTwo'>{row.responsible}</TableCell>
              <TableCell align="center" className='tHeadThreeD'>{row.action}</TableCell>

              <TableCell  align="center" component="th" scope="row" className='tHeadTwo'>
                { moment(row.in_date).format('YY MMM D')}
              </TableCell>
              <TableCell align="center" className='tHeadFourD'>{row.shift}</TableCell>
              <TableCell align="center" className='tHeadFourD'>{row.status}</TableCell>
              <TableCell align="center" className='tHeadOneD'>{<button
                      onClick={(e) => handleUpdate(e, row.id)}
                      className="btn btn-warning btn-sm"
                    >
                      Up
                    </button>}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default DetailList;








