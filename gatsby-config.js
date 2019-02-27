module.exports = {
	siteMetadata: {
		title: 'Metals Team',
		author: 'Metals development team',
		description: '',
		siteUrl: 'https://metalsteam.pro'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images'
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Metals Team',
				short_name: 'MetalsTeam',
				start_url: '/',
				background_color: '#000',
				theme_color: '#0091B6',
				display: 'standalone',
				icon: `${__dirname}/src/img/icon.png`,
				include_favicon: true
			}
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: `${__dirname}/src/utils/typography`
			}
		},
		'gatsby-plugin-netlify',
		'gatsby-plugin-netlify-cms'
	]
};
