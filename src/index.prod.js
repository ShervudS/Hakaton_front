import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {App} from '_components/App';


// == register service-worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            // .then((registration) => {
            //     console.log('SW registered: ', registration);
            // })
            .catch((registrationError) => {
                console.error('SW registration failed: ', registrationError);
            });
    });
}

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('app'));
