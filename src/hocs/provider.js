import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

export default function ConnectApp(store, history) {
    return function ConntectedApp(App) {
        const ProvidedApp = () => (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
        return ProvidedApp;
    };
}
