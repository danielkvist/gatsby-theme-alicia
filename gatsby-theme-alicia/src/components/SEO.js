import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ description, lang, meta, title }) => {
	const {
		title: siteTitle,
		description: siteDescription,
		author,
	} = useSiteMetadata();

	const metaDescription = description || siteDescription;
	const metaTitle = title || siteTitle;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={metaTitle}
			titleTemplate={`%s - ${metaTitle}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: author,
				},
				{
					name: `twitter:title`,
					content: metaTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string,
};

export default SEO;
