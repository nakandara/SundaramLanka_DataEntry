import React from 'react'
import UpdatePress from '../componentsPress/UpdatePress'
import './route.css'
const UpdatePressPage = () => {
    return (
        <div className='update'>
           <h1 className="text-center" style={{margin:'30px'}}>Update Data </h1>
      <UpdatePress /> 
        </div>
    )
}

export default UpdatePressPage
