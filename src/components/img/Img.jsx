import React from 'react';
import './img.css';

const Img = ({picture, text}) => {
  return (
    <div className='img-location'>
      <img src={picture} alt='/' />
        <div className="overlay">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Img