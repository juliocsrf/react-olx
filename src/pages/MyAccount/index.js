import React, { useState, useEffect } from 'react';
import { PageContainer } from '../../components/MainComponents';
import FakeComponent from '../../components/partials/FakeComponent';
import Fake from '../../components/partials/FakeComponent';
import useApi from '../../helpers/OlxAPI';
import { PageArea } from './styled';
import UserImage from '../../assets/img/user.png';

const Page = () => {
    const api = useApi();

    const [statesList, setStatesList] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');

    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const [userAlertClass, setUserAlertClass] = useState('success');
    const [userAlertMessage, setUserAlertMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setDisabled(true);
        setOpacity(0.3);
        setUserAlertMessage('');
        const json = await api.updateUserInfo(name, email, state, password);

        if (json.error) {
            setUserAlertClass('danger');
            setUserAlertMessage(json.error);
        } else {
            setUserAlertClass('success');
            setUserAlertMessage('Informações salvas com sucesso!');
        }

        setDisabled(false);
        setOpacity(1);
    }

    useEffect(() => {
        const getUserInfo = async () => {
            const json = await api.getUserInfo();

            setName(json.name);
            setEmail(json.email);
            setState(json.state);

            setLoading(false);
            setDisabled(false);
        }

        getUserInfo();
    }, []);

    useEffect(() => {
        const getStates = async () => {
            const json = await api.getStates();

            setStatesList(json);
        }

        getStates();
    }, []);

    return (
        <PageContainer>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <div className="box box--padding profile" style={{ opacity }}>
                        <div className="box-body">
                            <div className="leftSide">
                                <h2>Minha conta</h2>
                                <div className="userImg">
                                    <img src={UserImage} style={{width: '100%', height: '100%'}} />
                                </div>
                            </div>

                            <div className="rightSide">
                                <div className="areaRow">
                                    <label className="area">
                                        <div className="area--title">Nome</div>
                                        <div className="area--input">
                                            {loading &&
                                                <FakeComponent width="100%" height="28px" />
                                            }
                                            {!loading &&
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    required
                                                    disabled={disabled}
                                                />
                                            }
                                        </div>
                                    </label>

                                    <label className="area">
                                        <div className="area--title">E-mail</div>
                                        <div className="area--input">
                                            {loading &&
                                                <FakeComponent width="100%" height="28px" />
                                            }
                                            {!loading &&
                                                <input
                                                    type="text"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                    required
                                                    disabled={disabled}
                                                />
                                            }

                                        </div>
                                    </label>
                                </div>

                                <div className="areaRow">
                                    <label className="area">
                                        <div className="area--title">Estado</div>
                                        <div className="area--input">
                                            {loading &&
                                                <FakeComponent width="100%" height="28px" />
                                            }
                                            {!loading &&
                                                <select value={state} onChange={e => setState(e.target.value)} required>
                                                    <option selected disabled>Selecione uma opção...</option>
                                                    {statesList && statesList.map((i) =>
                                                        <option key={i._id} value={i.name}>{i.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </label>

                                    <label className="area">
                                        <div className="area--title">Nova senha</div>
                                        <div className="area--input">
                                            {loading &&
                                                <FakeComponent width="100%" height="28px" />
                                            }
                                            {!loading &&
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                    disabled={disabled}
                                                    placeholder="Nova senha"
                                                />
                                            }

                                        </div>
                                    </label>
                                </div>

                                {userAlertMessage &&
                                    <div className="areaRow">
                                        <div className={`alert alert--${userAlertClass}`}>
                                            {userAlertMessage}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="box-footer">
                            <button className="submit" disabled={disabled}>Salvar</button>
                        </div>
                    </div>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;