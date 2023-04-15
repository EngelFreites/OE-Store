import './header.css'
import BubbleAlert from '../BubbleAlert/BubbleAlert'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import ShowOptions from '../showOption/ShowOptions'
import React, { useState } from 'react'
import MenuResponsive from '../menuResponsive/MenuResponsive'

export default function Header () {
  const [show, setShow] = useState(false)
  const [onHover, setOnHover] = useState(false)
  const [onHoverShow, setHoverShow] = useState(false)

  const handleHoverShow = () => {
    setHoverShow(!onHoverShow)
  }

  const handleHover = () => {
    setOnHover(!onHover)
  }

  const handleClick = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <header className='header'>
      <GiHamburgerMenu onClick={handleClick} className=' hamburge text-subheader'/>
      {
        show
          ? <MenuResponsive show={show} setShow={setShow} />
          : null

      }
      <div className='content-hamburge-title'>

        <h1 className='text-title font-2'>O/E</h1>
      </div>

      <div className='header-options' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {
          onHover || onHoverShow
            ? <div className='show-option' onMouseEnter={handleHoverShow} onMouseLeave={handleHoverShow}>
                <ShowOptions/>
              </div>
            : null
        }

        <ul>
          <li>NIÑOS</li>
          <li>MUJERES</li>
          <li>HOMBRES</li>
          <li>DEPORTES</li>
        </ul>
      </div>

      <div className='header-icons'>
        <input placeholder='Buscar'></input>
        <AiOutlineHeart className='icon'/>

        <div className='content-car'>
          <span className='bubble'><BubbleAlert/></span>
        <AiOutlineShoppingCart className='icon'/>
        </div>

        <AiOutlineUser className='icon'/>
      </div>
   </header>
  )
}
