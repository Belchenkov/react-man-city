import React from 'react';

import Header from "../components/header_footer/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            { children }
        </div>
    );
};

export default Layout;
