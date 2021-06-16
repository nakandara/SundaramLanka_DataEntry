import React from 'react'
import Header from "../componentsQuality/Header";
import AddQuality from "../componentsQuality/AddQuality";
import QualityList from "../componentsQuality/QualityList";
import './route.css'


const Quality = () => {
    return (
        <div className='quality'>
          <Header />
      <AddQuality/>
      <QualityList />  
        </div>
    )
}

export default Quality
