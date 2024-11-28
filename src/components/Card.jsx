import React from 'react'

const Card = (props) => {
  return (
    <div>
      <p> {props.first}</p>
      <p>{props.second}</p>
      <p>{props.third}</p>
    </div>
  )
}

export default Card
