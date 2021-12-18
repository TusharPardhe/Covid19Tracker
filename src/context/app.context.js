import React, { useState, createContext, useEffect } from "react";
import { ERROR_MSGS } from "../constants/app.constants";
import { VACCINE_DATA_URL } from "../endpoints/url.endpoints";
export const AppContextData = createContext(undefined);

const AppContext = ({ children }) => {
    const [state, setState] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(VACCINE_DATA_URL)
            .then((response) => response.json())
            .then((data) => {
                if (data) setState(data);
            })
            .catch((err) => console.log(ERROR_MSGS.API_ERROR));
    };

    return <AppContextData.Provider value={{ state, setState }}>{children}</AppContextData.Provider>;
};

export default AppContext;
