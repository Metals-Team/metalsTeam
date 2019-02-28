import React from 'react';
import {Link} from 'gatsby';
import './Nav.module.scss';
import { pushRotate as Menu } from 'react-burger-menu'

export default ()=>(
	<Menu pageWrapId="maimain-containern" outerContainerId="outer-container">
		<a id="home" className="menu-item" href="/">Home</a>
		<a id="about" className="menu-item" href="/about">About</a>
		<a id="contact" className="menu-item" href="/contact">Contact</a>
	</Menu>
	);

