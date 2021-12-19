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
