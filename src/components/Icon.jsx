import React from 'react'


// Props fro customizable Images-> Height Width, img src, 
const Icon = ({imgSrc}) => {
  
  return (
    <div className='avatar'>
      <img src={imgSrc} height={100} width={100} alt="" />
    </div>
  )
}

export default Icon
