
import React from 'react'
import './Genre.css'
import resim from '../../images/res2.jpg';
import bigresim from '../../images/res1.jpg'
import smallresim1 from '../../images/res3.jpg'
import smallresim2 from '../../images/res4.jpg'
import smallresim3 from '../../images/res5.jpg'
import smallresim4 from '../../images/res6.jpg'

const Genre = () => {
  return (
    <div className='genres'>
      <div>
        <img src={resim} alt="#" className='res1-img'/>
      </div>
      <div className='img-list1'>
        <ul>
          <li className='big-image'>
            <img src={bigresim} alt="#"/>
          </li>
          <li>
            <img src={smallresim1}/>
          </li>
          <li>
            <img src={smallresim2}/>
          </li>
          <li>
            <img src={smallresim3} alt="" />
          </li>
          <li>
            <img src={smallresim4} alt="" />
          </li>
        </ul>
      </div>
      
      </div>
    
  )
}

export default Genre;
