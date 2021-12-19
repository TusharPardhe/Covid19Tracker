import React from "react";
import ReactDOM from "react-dom";

import App from './app';

import './index.css'

const Index = () => {  
    return (
        <>
        <App/>
        </>
    )
}
ReactDOM.render(<Index />, document.getElementById("root"));

if ('serviceWorker' in navigator) {
    setTimeout(function () {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
            for (const registration of registrations) {
                // unregister service worker
                console.log('serviceWorker unregistered');
                registration.unregister();
            }
        });
    }, 1000 * 60 * 2);
}