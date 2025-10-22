import React, { useState } from 'react'
import {navbarStyles as styles} from '../rentalstyles'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

      const navLinks = [
    { to: '/', label: 'Home'},
    { to: '/', label: 'Gowns'},
    {to: '/', label: 'Contacts'},
    ];

  return (
    <nav className={`${styles.nav.base} ${
      scrolled ? styles.nav.scrolled : styles.nav.notScrolled
      }`} aria-label='Main navigationgit'
      ></nav>
  )
}

export default Navbar