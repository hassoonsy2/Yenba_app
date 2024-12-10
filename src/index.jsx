// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import FontAwesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';

// Import Animate.css
import 'animate.css';

// Import Global CSS
import './styles/global.css';

ReactDOM.render(<App />, document.getElementById('root'));
