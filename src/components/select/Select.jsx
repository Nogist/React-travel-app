import React from 'react';
import Img from '../img/Img';
import './select.css';



import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'



const Select = () => {
  return (
    <div name='views' className='selects' id='select'>
      <div className='container'>
        <Img picture={BoraBora} text='Bora Bora' />
        <Img picture={BoraBora2} text='Emerald Bay' />
        <Img picture={Maldives} text='Maldives' />
        <Img picture={Maldives2} text='Grenada' />
        <Img picture={Maldives3} text='Barbados' />
        <Img picture={KeyWest} text='Key West' />
      </div>
    </div>
  )
}

export default Select
