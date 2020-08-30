import React from 'react';

import useSiteMetadata from '../hooks/use-site-metadata';
import Layout from '../components/layout';
import Section from '../components/section';
import MainTitle from '../components/main-title';

const Index = () => {
	const { title, description } = useSiteMetadata();

	return (
		<Layout>
			<Section index={1}>
				<MainTitle>{title}</MainTitle>
				<p style={{ textAlign: 'right' }}>{description}</p>
			</Section>
		</Layout>
	);
};

export default Index;
