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

if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
        navigator.serviceWorker.register("./sw-cached-pages.js")
        .then((res)=>{
            console.log("sw registered")
        }).catch((err)=> console.log(`Service Worker Err:${err}`))
    })
}