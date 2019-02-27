import React from 'react'

export default data =>(
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`}
		render={data => {
			const title = (props || data.site.siteMetadata || {}).title;
			const description = (props || data.site.siteMetadata || {}).description;
			const author = (props || data.site.siteMetadata || {}).author;

			return (
				<React.Fragment>
					<Helmet>
						<html lang="en" />
						<meta charset="UTF-8" />
						<title>{title}</title>
						<meta name="description" content={description} />
						<meta name="author" content={author} />
						<meta property="og:type" content="website" />
						<meta property="og:title" content={title} />
						<meta property="og:url" content="/" />
						<meta property="og:image" content="/img/icon.png" />
						<meta property="og:description" content={description} />
					</Helmet>
				</React.Fragment>
			);
		}}
	/>
);

