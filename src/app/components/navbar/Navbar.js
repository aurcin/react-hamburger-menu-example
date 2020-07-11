import React, { useState } from 'react';

import './navbar.css';

const Navbar = () => {
	const [isOpen, toggle] = useState(false);

	const onToggle = () => {
		toggle(!isOpen);
	};

	const onClose = () => {
		toggle(false);
	};

	const buttonClass =
		'btn burger__menu' + (isOpen ? ' burger__menu--open' : '');

	const menuClass = 'navbar__menu' + (isOpen ? ' navbar__menu--open' : '');

	return (
		<nav className='navbar'>
			<div className='navbar__logo'>LOGO</div>
			<ul className={menuClass} onClick={onClose}>
				<li className='navbar__item'>Catalog</li>
				<li className='navbar__item'>Gallery</li>
				<li className='navbar__item'>Contacts</li>
				<li className='navbar__item'>About</li>
			</ul>
			<button className={buttonClass} onClick={onToggle}>
				<span className='visually-hidden'>Toggle navigation</span>
				<span className='icon-bar'></span>
				<span className='icon-bar'></span>
				<span className='icon-bar'></span>
			</button>
		</nav>
	);
};

export default Navbar;
