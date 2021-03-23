import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';


const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([{ name: 'teste' }]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }

        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }

        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });

            setAdList(json.ads);
        }

        getRecentAds();
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <PageArea>
                        <h2>Anúncios Recentes</h2>
                        <div className="list">
                            {adList.map((i, k) =>
                                <AdItem key={k} data={i} />
                            )}
                        </div>

                        <Link to="/ads" className="seeAllLink">Ver todos</Link>
                        <hr />

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus in neque congue bibendum. Fusce scelerisque malesuada luctus. Aliquam dapibus odio ut augue aliquet ornare. Aliquam at eros a nibh rhoncus porta in consequat tortor. Nullam a pretium nibh. Suspendisse ligula arcu, ultricies tristique mauris non, aliquet vehicula ex. Morbi in ex sem. Mauris ligula nulla, ullamcorper eu diam ut, blandit egestas ligula. Aenean id aliquam lacus.
                    </PageArea>
                </PageArea>
            </PageContainer>
        </>

    );
}

export default Page;