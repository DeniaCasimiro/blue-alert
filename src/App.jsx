import React from 'react'
import carImg from '../blue-car.png'

export default function App(){
  return (
    <div className="page">
      <div className="car-container">
        <div className="bubble">Alert</div>
        <img src={carImg} alt="Blue car" className="car-image" />
      </div>
    </div>
  )
}
