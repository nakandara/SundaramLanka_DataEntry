import React from 'react'
import Header from '../componentsBead/Header'
import AddBead from '../componentsBead/AddBead'
import BeadList from '../componentsBead/BeadList'

import './route.css'
const Bead = () => {
    return (
        <div className='bead'>
            <Header />
      <AddBead/>
      <BeadList />
        </div>
    )
}

export default Bead
