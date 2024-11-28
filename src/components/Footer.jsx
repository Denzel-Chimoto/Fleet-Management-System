import React from 'react'

export default function Footer() {
    let day = new Date().getFullYear();
  return ( 
    <footer className='footer'>
      <p>Copyright {day}</p>
    </footer>
  )
}
