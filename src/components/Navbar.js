import React from 'react';
import { NavLink } from 'react-router-dom';
import navStyles from '../css/Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <section className={navStyles.header}>
      <div>
        <h1>Math Magicians</h1>
      </div>
      <nav className={navStyles.navBar}>
        <ul className={navStyles.menu}>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>

  );
};
export default Navbar;
