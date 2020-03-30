import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

export default function ConnectApp(history) {
    return function ConntectedApp(App) {
        const ProvidedApp = () => (
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        );
        return ProvidedApp;
    };
}
