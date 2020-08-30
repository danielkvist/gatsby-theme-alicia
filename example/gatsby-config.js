require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
	title: 'Gatsby Theme Alicia',
	description:
		'Alicia is a modern, fast and simple theme for Gatsby that allows you to show who you are and what you have been working on in an original way.',
	siteUrl: 'https://alicia-example.netlify.app/',
	author: 'Daniel Zaragoza (Danielkvist)',
};

const plugins = [
	{
		resolve: 'gatsby-theme-alicia',
		options: {},
	},
	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			name: 'gatsby-theme-alicia',
			short_name: 'Alicia',
			start_url: '/',
			background_color: '#89b3f2',
			theme_color: '#89b3f2',
			display: 'minimal-ui',
			icon: './src/images/icon.png',
		},
	},
	'gatsby-plugin-offline',
	`gatsby-plugin-sitemap`,
	process.env.GOOGLE_ANALYTICS_KEY && {
		resolve: `gatsby-plugin-google-analytics`,
		options: {
			trackingId: `${process.env.GOOGLE_ANALYTICS_KEY}`,
			head: false,
			anonymize: true,
			respectDNT: true,
			defer: true,
			sampleRate: 5,
			siteSpeedSampleRate: 10,
		},
	},
].filter(Boolean);

module.exports = {
	siteMetadata,
	plugins,
};
