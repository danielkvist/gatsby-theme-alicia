import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import { Theme, GlobalStyle } from './src/theme';

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={Theme}>
		<GlobalStyle />
		{element}
	</ThemeProvider>
);
