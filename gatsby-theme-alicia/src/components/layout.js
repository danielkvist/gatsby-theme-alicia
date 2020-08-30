import React from 'react';

import SEO from './SEO';
import Wrapper from './wrapper';

const Layout = ({ children, title = '' }) => {
	return (
		<>
			<SEO title={title} />
			<header style={{ height: '5vh' }}></header>
			<main>
				<Wrapper>{children}</Wrapper>
			</main>
			<footer style={{ height: '5vh' }}></footer>
		</>
	);
};

export default Layout;
