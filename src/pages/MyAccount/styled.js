import styled from 'styled-components';

export const PageArea = styled.div`
    margin-top: 20px;

    .box {
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }

    .box--padding {
        padding: 10px;
        padding-top: 30px;
    }

    .box-footer {
        margin-top: 10px;
        padding-top: 20px;
        border-top: 1px solid #CCC;
    }

    .profile {
        .box-body {
            display: flex;

            h2 {
                margin-top: 0;
                font-size: 18px;
            }

            .leftSide {
                width: 30%;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;

                .userImg {
                    height: 130px;
                    width: 130px;
                    border-radius: 50px;
                }
            }

            .rightSide {
                flex: 1;

                .alert {
                    border: 1px solid black;
                    padding: 10px 5px;
                    margin: 5px 10px;
                    text-align: center;
                    flex: 1;
                    max-width: 500px;
                    font-size: 15px;
                    border-radius: 2px;
                    color: white;
                }

                .alert--success { 
                    background-color: #2ecc71;
                    border: 1px solid #27ae60;
                }

                .alert--danger {
                    background-color: #e74c3c;
                    border: 1px solid #c0392b;
                }
            }
        }
        

        .box-footer {
            display: flex;
            flex-direction: row-reverse;
            margin-top: 40px;

            .submit {
                background-color: #49AEEF;
                font-size: 15px;
                border: 0;
                border-radius: 5px;
                color: #FFF;
                height: 40px;
                padding: 0 20px;
                cursor: pointer;
            }
        }
    }

    .areaRow {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;

        .area {
            display: flex;
            padding: 10px;
            min-width: 250px;
            flex-direction: column;

            .area--title {
                font-weight: bold;
                font-size: 14px;
            }

            .area--input {
                input, select {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #DDD;
                    border-radius: 3px;
                    outline: 0;
                    transition: all ease .4s;
                    margin: 0;
                    margin-top: 5px;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }

                .fake-component {
                    margin-top: 5px;
                }
            }
        }
    }

@media (max-width: 600px) {
	& {
		padding: 0 10px;
	}

	.profile {
		.box-body {
			flex-direction: column;
			align-items: center;

			.leftSide {
				text-align: center;
			}
		}
	}

	.areaRow {
		max-width: 100%;

		.area {
			width: 100%;
		}
	}
}
`;

export const MyAdsArea = styled.div`
    margin-top: 10px;

    .box {
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }

    .box--padding {
        padding: 10px;
    }

    .aditem {
        display: flex;

        .leftSide {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 5px;

            .spnTitle {
                font-size: 20px;
				text-align: center;
            }

            .spnViews {
                margin-top: 5px;
                font-size: 14px;
                color: #999;
                font-style: italic;
            }

            .divImage {
                width: 100px;
                height: 100px;
                background-color: #DDD;
                margin-top: 10px;
            }

            .spnPrice {
                margin-top: 10px;
                font-size: 18px;
                color: blue;
            }
        }

        .middle {
            flex: 3;
            display: flex;
            flex-direction: column;
			font-size: 14px;
			color: #333;
			padding: 0 20px;
			border-left: 1px solid #CCC;

            .spnPostDate {
                
            }

            .spnDescription {
                
            }

        }

        .rightSide {
            flex: 1;
			display: flex;
			flex-direction: column;
			padding: 0 10px;
			justify-content: center;
			align-items: center;
			border-left: 1px solid #CCC;

			button {
                font-size: 15px;
                border: 0;
                border-radius: 5px;
                height: 40px;
                padding: 0 20px;
				color: white;
				cursor: pointer;
				margin-top: 5px;
				margin-bottom: 5px;
				width: 100%;
			}

			button.edit {
				background-color: #49AEEF;
			}

			button.inactive {
				background-color: #e74c3c;
			}

			.status {
				font-size: 24px;
				margin-top: 30px;

				&.active {
					color: #2ecc71;
				}

				&.inactive {
					color: #e74c3c;
				}
			}
        }
    }

@media (max-width: 600px) {
	& {
		padding: 0 10px;
	}

	.aditem {
		flex-direction: column;

		.middle {
			padding: 20px;
			border-left: none;
		}

		.rightSide {
			border-left: none;
		}
	}
}
`;