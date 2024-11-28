import React from 'react'

const Text = (props) => {
  return (
    <div className='card'>
      <p>This is the note title</p>
      <p>This is the note content</p>
      <img src={props.image} alt=""></img>
    </div>
  )
}

export default Text
