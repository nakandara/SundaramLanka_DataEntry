






 <table className="table table-hover table-dark" striped bordered hover size="sm"  >
 <thead>
   <tr className="bg-primary">
     <th className='thOne' >No</th>
     <th className='thTwo'>Reported Person</th>
     <th  > Observetion</th>
     <th  >Responsible</th>
     <th >Action</th>
     <th >Date</th>
     <th >Shift</th>
     <th >Status</th>
     <th >Update</th>
     
   </tr>
 </thead>
 <tbody>
   {detail &&
     detail.map((mom) => {
       return (
         <tr
           // onClick={() => handleRestaurantSelect(restaurant.id)}
           key={mom.id}
         >
            <td>{mom.id}</td>
           <td className='wrap' >{mom.reported_person}</td>
           <td className='wrap'>{mom.observation}</td>
           <td>{mom.responsible}</td>
           <td>{mom.action}</td>
           <td>{new Date(mom.date).toLocaleDateString()}</td>
           {/* <td>{"$".repeat(mom.rating)}</td> */}
           <td>{mom.shift}</td>
           <td>{mom.status}</td>

           <td>
             <button
               onClick={(e) => handleUpdate(e, mom.id)}
               className="btn btn-warning btn-sm"
             >
               Update
             </button>
           </td>
           <td>
            
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