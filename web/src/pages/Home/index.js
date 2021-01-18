import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dados from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';



function Home() {
    const [selected, setSelected] = useState(null);

    function sortBanner() {
        let randomNum = Math.random() * (7 - 0) + 0;
        let result = Math.round(randomNum);
        return result;
    }

    useEffect(() => {

        setSelected(sortBanner);
    }, [])
    return (
        <div style={{ background: '#141414' }}>
            <PageDefault>
                <BannerMain videoTitle={dados.categorias[4].videos[Number(selected)].titulo} videoDescription={''} url={dados.categorias[4].videos[Number(selected)].url} />
                <Carousel ignoreFirstVideo category={dados.categorias[4]} />
            </PageDefault>
        </div>
    );
}

export default Home;