import React from 'react'

const Image = ({source}) => {
  return (
    <div>
    <p>Hey</p>
      <img className='food-img' src={source} alt=""></img>
    </div>
  );
}

export default Image;
