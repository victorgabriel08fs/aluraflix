import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import BannerMain from './components/BannerMain';

import dados from './data/dados_iniciais.json';

import Menu from './components/Menu';



function App() {
  const [selected, setSelected] = useState(null);

  function sortBanner() {
    let randomNum = Math.random() * (4 - 0) + 0;
    let result = Math.round(randomNum);
    return result;
  }

  useEffect(() => {

    setSelected(sortBanner);
  }, [])
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain videoTitle={dados.categorias[4].videos[Number(selected)].titulo} videoDescription={''} url={dados.categorias[4].videos[Number(selected)].url} />
      <Footer />
    </div>
  );
}

export default App;
