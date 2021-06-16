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
        if (login=='production123') {
            history.push(`/production`)}
            else if (login=='quality123') {
              history.push(`/quality`)}
              else if (login=='mixing123') {
                history.push(`/mixing`)}
                else if (login=='eng123') {
                  history.push(`/eng`)}
                  else if (login=='bead123') {
                    history.push(`/bead`)}
                    else if (login=='hold123') {
                      history.push(`/hold`)}
                      else if (login=='hr123') {
                        history.push(`/hr`)}
        else{
            alert('password is wrong')
        }
      }
    return (
        <div  className='login'>
            



                <h3 style={{justifyContent:'center'}}>Login</h3>

                <div className="form-group">
                  

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={login} onChange={(e)=>{setLogin(e.target.value)}} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleLogin}>Login</button>
                </div>
               
            
       
    





        </div>
    )
}

export default Login
