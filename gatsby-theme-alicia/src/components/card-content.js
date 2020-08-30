import styled from 'styled-components';

const CardContent = styled.div`
	justify-content: center;
	padding: ${(props) => `${props.theme.spacing * 9}px`};
	padding-top: 0;
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export default CardContent;
