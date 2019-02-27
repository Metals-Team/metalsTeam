import React from 'react';
import SEO from './SEO';

const Layout = props => (
	<React.Fragment>
		<SEO />
		<div>Header</div>
		<div>{props.children}</div>
		<div>Footer</div>
	</React.Fragment>
);

export function wrapWithComponent(WrappedComponent) {
	return props => (
		<Layout>
			<WrappedComponent {...props} />
		</Layout>
	);
}
