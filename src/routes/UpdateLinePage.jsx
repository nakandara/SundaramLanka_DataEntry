import React from 'react'
import UpdatePressLine from '../componentsLine/UpdatePressLine'
import './route.css'
const UpdatePressPage = () => {
    return (
        <div className='update'>
           <h1 className="text-center" style={{margin:'30px'}}>Update Line Data </h1>
      <UpdatePressLine /> 
        </div>
    )
}

export default UpdatePressPage
