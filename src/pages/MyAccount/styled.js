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
`;