import styled from 'styled-components';

const Card = styled.div`
	background-color: ${(props) => props.theme.color.white};
	border-radius: ${(props) => `${props.theme.radii * 2}px`};
	border: 1px solid ${(props) => props.theme.color.gray};
	box-shadow: ${(props) => `${props.theme.spacing}px `.repeat(3)}
		rgba(0, 0, 0, 0.1);
	height: 90vh;
	max-height: ${(props) => props.theme.mediaQuery.md};
	position: sticky;
	top: ${(props) => `${(props.index || 1) * 40}px`};
	overflow: hidden;

	&::before {
		--size: ${(props) => `${props.theme.spacing * 8}px`};

		background-color: red;
		background-image: radial-gradient(
			${(props) => props.theme.color.bravo} 42%,
			${(props) => props.theme.color.bravoDark} 94%
		);
		border-radius: 50%;
		content: '';
		display: block;
		height: var(--size);
		left: 12vw;
		position: absolute;
		transform: translate(-50%, -50%);
		width: var(--size);
	}
`;

export default Card;
