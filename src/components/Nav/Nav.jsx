import React from 'react';
import {Link} from 'gatsby';
import './Nav.module.scss';
import './menu.scss';
import { scaleRotate as Menu } from 'react-burger-menu'

export default ()=>(
	<Menu pageWrapId="main-container" outerContainerId="outer-container">
		<Link id="home" className="menu-item" to="/">Home</Link>
		<Link id="about" className="menu-item" to="/about">About</Link>
		<Link id="contact" className="menu-item" to="/contact">Contact</Link>
	</Menu>
	);

