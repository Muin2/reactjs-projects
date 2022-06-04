import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state)=> state.cart);

  return (
    <>
    <div  style={{background: 'Black', color: 'white',display:'flex', alignItems: 'center', justify: 'spaceBetween'}}>
        <span className='logo' style={{display:'flex',padding:10,}}> Shopping </span>
        <div style={{ paddingLeft:20 ,color: 'white'}}>
            <Link style={{ paddingLeft:20 ,color: 'white'}} className='navLink' to="/">HOME</Link>
            <Link style={{ paddingLeft:20 ,color: 'white'}} className='navLink' to="cart">CART</Link>
            <span className='cartCount'>Cart: {items.length} </span>
          
        </div>
         </div>
    <hr />
    </>
  )
}

export default Navbar;