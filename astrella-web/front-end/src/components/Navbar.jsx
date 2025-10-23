import React, { useState } from 'react'
import {navbarStyles as styles} from '../rentalstyles'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

      const navLinks = [
    { to: '/', label: 'Home'},
    { to: '/clothing', label: 'Clothings'},
    { to: '/', label: 'My Bookings'},
    {to: '/contact', label: 'Contact'},
    ];

  return (
    <nav className={`${styles.nav.base} ${
      scrolled ? styles.nav.scrolled : styles.nav.notScrolled
      }`} aria-label='Main navigation'
      ></nav>
  )
}

export default Navbar