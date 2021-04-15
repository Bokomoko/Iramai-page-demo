import React from "react";
import "../styles/global.css";
import "../styles/animate.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
