import React from 'react';

import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    );
};

export default Layout;
