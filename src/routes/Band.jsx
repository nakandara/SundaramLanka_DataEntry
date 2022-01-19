import React from 'react'
import Header from "../ComponentsBand/Header"
import AddBand from "../ComponentsBand/AddBand"
import BandList from '../ComponentsBand/BandList'


import './route.css'


const FgsAccuracy = () => {
    return (
        <div className='FgsAccuracy'>
        <Header/>
        <AddBand/>
     
        <BandList/>
        </div>
    )
}

export default FgsAccuracy
