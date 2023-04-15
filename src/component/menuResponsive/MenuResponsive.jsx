import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './menuResponsive.css'

// eslint-disable-next-line react/prop-types
export default function MenuResponsive ({ show, setShow }) {
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className='menu'>
      <AiOutlineArrowLeft onClick={handleClick} className='arrow-icom'/>
      <div className='title-options'>
        <p>Niños</p>
      </div>
      <div className='title-options'>
        <p>HOMBRES</p>
      </div>
      <div className='title-options'>
        <p>MUJERES</p>
      </div>
      <div className='title-options'>
        <p>DEPORTES</p>
      </div>

    </div>
  )
}
