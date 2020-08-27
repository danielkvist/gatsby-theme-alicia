module.exports = (options) => {
	return {
		plugins: [
			`gatsby-plugin-react-helmet`,
			`gatsby-plugin-offline`,
			`gatsby-plugin-manifest`,
			`gatsby-plugin-styled-components`,
			`gatsby-plugin-sitemap`,
			options.googleAnalyticsKey && {
				resolve: `gatsby-plugin-google-analytics`,
				options: {
					trackingId: options.googleAnalyticsKey,
					head: false,
					anonymize: true,
					respectDNT: true,
					defer: true,
					sampleRate: 5,
					siteSpeedSampleRate: 10,
				},
			},
		].filter(Boolean),
	};
};
