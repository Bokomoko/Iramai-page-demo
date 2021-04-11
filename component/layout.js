import Header from './common/header'
import Footer from './common/footer'
import React from "react";

function Layout({children}) {
    return (
        <div className="layout">
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout
