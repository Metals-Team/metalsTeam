import React from 'react';
import SEO from '../SEO/SEO';
import Nav from '../Nav/Nav';

const Layout = props => (
	<div id='outer-container'>
		<SEO />
		<Nav></Nav>
		<div id='main-container'>{props.children}</div>
		<div>Footer</div>
	</div>
);

export function wrapWithComponent(WrappedComponent) {
	return props => (
		<Layout>
			<WrappedComponent {...props} />
		</Layout>
	);
}
