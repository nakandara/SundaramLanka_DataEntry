import React from 'react'
import Header from "../componentsShotBlasting/Header"
import AddshotBlasting from "../componentsShotBlasting/AddShotBlasting"
import ShotBlastingList from '../componentsShotBlasting/ShotBlastingList'


import './route.css'


const FgsAccuracy = () => {
    return (
        <div className='FgsAccuracy'>
        <Header/>
        <AddshotBlasting/>
     
        <ShotBlastingList/>
        </div>
    )
}

export default FgsAccuracy
