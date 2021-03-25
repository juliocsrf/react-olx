import styled from 'styled-components';

export const Fake = styled.div`
	background-color: #DDD;
	animation-name: color;
	animation-duration: 1s;
	animation-iteration-count: infinite;
	height: ${props => props.height ?? '40px'};
    width: ${props => props.width ?? '100%'};
	border-radius: 5px;

	@keyframes color {
	0% {
	  background-color: #DDD;
	}
	50% {
	  background-color: #EEE;
	}
  }
`;