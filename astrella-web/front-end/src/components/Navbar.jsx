import React, { useState } from 'react';
import { navbarStyles as styles} from '../assets/rentalstyles';
import { link } from "react-dom";
import logo from '../assets/logo.jpg';

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
      >
        <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className=' flex justify center'>
            <div className={`${styles.floatingNav.base} ${
              scrolled 
              ? styles.floatingNav.scrolled : 
            styles.floatingNav.notScrolled
            }`} role='region' aria-roledescription='navigation'
            >
              <div className=' flex items-center justify-between gap-4'>
                <link to='/' className='flex items-center'>
                <div className={styles.logoContainer}>
                  <img src={logo} alt='logo' className=' h-[1em] w-auto bock'
                  style={{display: 'block', objectFit: 'contain'}}
                  />
                </div>
                </link>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar