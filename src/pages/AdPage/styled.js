import styled from 'styled-components';

export const Fake = styled.div`
	background-color: #DDD;
	height: ${props=>props.height}px;
`;

export const PageArea = styled.div`
	display: flex;
	margin-top: 20px;

	.box {
		background-color: #FFF;
		border-radius: 5px;
		box-shadow: 0px 0px 4px #999;
		margin-bottom: 20px;
	}

	.box--padding {
		padding: 10px;
	}

	.leftSide {
		flex: 2;
		margin-right: 20px;

		.box {
			display: flex;
		}

		.adImage {
			width: 320px;
			height: 320px;
			margin-right: 20px;

			.each-slide img {
				display: flex;
				align-items: center;
				justify-content: center;
				background-size: cover;
				height: 320px;
			}
		}

		.adInfoD {
			flex: 1;

			.adName {
				margin-bottom: 20px;

				h2 {
					margin: 0;
					margin-top: 20;
				}
				small {
					color: #999;
				}
			}
			.adDescription {
				small {
					color: #999;
				}
			}
		}
	}

	.rightSide {
		flex: 1;
	}
`;