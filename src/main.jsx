// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import '../src/i18n/i18n.js';
// import { Provider } from "react-redux";
// import { store } from "./app/store";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// )


import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import App from './App.jsx';
import './i18n/i18n.js'; // i18n init must come before rendering

import { Provider } from 'react-redux';
import { store } from './app/store';

// Mount the app
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);