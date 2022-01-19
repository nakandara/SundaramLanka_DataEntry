import React from 'react'
import Header from "../componentsFgs/Header"
import AddFgs from "../componentsFgs/AddFgs"
import FgsList from '../componentsFgs/FgsList'


import './route.css'


const FgsAccuracy = () => {
    return (
        <div className='FgsAccuracy'>
        <Header/>
        <AddFgs/>
     
        <FgsList/>
        </div>
    )
}

export default FgsAccuracy
