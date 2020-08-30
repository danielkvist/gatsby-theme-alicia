import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 0 auto;
	width: 90vw;
	max-width: ${(props) => props.theme.mediaQuery.md};
`;

export default Wrapper;
