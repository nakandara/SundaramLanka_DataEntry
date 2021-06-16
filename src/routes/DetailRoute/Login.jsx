import React,{useContext} from 'react'
import './login.css'
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";




const Login = () => {
    let history = useHistory();

    const { login,setLogin } = useContext(
        RestaurantsContext
      );
      const handleLogin= async (e) => {
        e.preventDefault();
        if (login=='mom123') {
            history.push(`/home`)
            
        }else{
            alert('password is wrong')
        }
      }
    return (
        <div>
            


{/* <h2>Login </h2>

<form  method="post">
  

  <div className="container">
    

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
        
    <button type="submit" onClick={handleLogin}>Login</button>
   
  </div>

 
</form> */}
{/* <form>

<h2>Log in</h2>



<div className="form-group">
    <label><h3>Password</h3></label>
    <input type="password" className="form-control" placeholder="Enter password"  value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
</div>



<button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleLogin}>Log in</button>

</form> */}
<form>
                <h3>Login</h3>

                <div className="form-group">
                  

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={login} onChange={(e)=>{setLogin(e.target.value)}} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleLogin}>Login</button>
                </div>
               
            </form>
       
    





        </div>
    )
}

export default Login
