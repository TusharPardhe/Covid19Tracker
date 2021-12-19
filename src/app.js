import React from 'react';

import AppContext from './context/app.context';
import Routes from './routes';

const App = () => {
    return (
        <AppContext>
            <Routes />
        </AppContext>
    );
}

export default App;