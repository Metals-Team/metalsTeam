import React from 'react';
import SEO from '../SEO/SEO';
import Nav from '../Nav/Nav';
import styles  from './Layout.module.scss';

const Layout = props => (
	<div id='outer-container'>
		<SEO />
		<Nav></Nav>
		<div id='main-container' className={styles.contentContainer} >
			{props.children}
		</div>
	</div>
);

export function wrapWithComponent(WrappedComponent) {
	return props => (
		<Layout>
			<WrappedComponent {...props} />
		</Layout>
	);
}
