import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
	color: ${(props) => props.theme.color.black};
	background-color: ${(props) => props.theme.color.black};
	background: linear-gradient(
		45deg,
		${(props) => props.theme.color.alphaLight} 0% 16%,
		${(props) => props.theme.color.alpha} 0% 33%,
		${(props) => props.theme.color.alphaDark} 0% 49%,
		${(props) => props.theme.color.bravoLight} 0% 64%,
		${(props) => props.theme.color.bravo} 0% 83%,
		${(props) => props.theme.color.bravoDark} 0% 100%
	);
	background-size: 100%;
	background-repeat: repeat;
	display: inline;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export default MainTitle;
