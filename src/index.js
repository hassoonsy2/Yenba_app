// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@google/model-viewer'; // Import this only once in your project

reportWebVitals(console.log); // Logs metrics to the console
// Create the root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Measure performance in your app
// You can log results (e.g., console.log) or send to an analytics endpoint
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
