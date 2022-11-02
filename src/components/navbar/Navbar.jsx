import React, {useState} from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='#Header'>Home</a></p>
    <p><a href='#Destination'>Destination</a></p>
    <p><a href='#Travel'>Travel</a></p>
    <p><a href='#features'>Book</a></p>
    <p><a href='select'>Views</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu)
  return (
    <div className={toggleMenu ? 'navbar navbar-bg dark' : 'navbar'}>
      <div className='navbar-logo'>
        <h2>Beaches</h2>
      </div>
      <div className='navbar-menu'>
        <Menu />
      </div>
      <div className='navbar-icons'>
        <div className='navbar-icons_icon'>
          <BiSearch className='icon' style={{ marginRight: '1.5rem' }} />
          <BsPerson className='icon' />
        </div>
        <div className='navbar-hamburger' onClick={toggle}>
        {!toggleMenu ? (<RiMenu3Line className='icon' />) : (<AiOutlineClose className='icon' />)}
        </div>
      </div>
      <div className={toggleMenu ? 'navbar_mobile active'  : 'navbar_mobile'}>
        <div className='navbar_mobile-menu'>
          <Menu />
        </div>
        <div className='navbar_mobile-menu_icons'>
          <div className='navbar_menu-icons'>
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className='navbar_social-icons'>
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
            <FaPinterest className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
