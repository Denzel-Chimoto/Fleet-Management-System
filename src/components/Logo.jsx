import React from 'react'

const Logo = ({style, imgSrc}) => {
  return (
    <div>
        <img src={imgSrc} style={style} alt="A pic" />
    </div>
  )
}

export default Logo
