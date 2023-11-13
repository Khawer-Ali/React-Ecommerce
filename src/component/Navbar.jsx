import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const items = useSelector((state) => state.cart);
  

 

  return (
    <div className='navbar'>
      <NavLink to='/'><i>iStore</i></NavLink>

      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cart'>Cart</NavLink>

        <span className='cartCount'>Cart items : { items.length }</span>
      </div>

    </div>
  )
}

export default Navbar