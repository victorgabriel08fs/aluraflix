import React from 'react';

import Footer from './components/Footer';
import Menu from './components/Menu';

const PageDefault = ({ children }) => {
    return (
        <div>
            <Menu />
            {children}
            <Footer />
        </div>
    );
}
export default PageDefault;