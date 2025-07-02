import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';            // ✅ Tailwind styles imported
import App from './App.jsx';     // ✅ Your main App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
import React from 'react';
import ReactDOM from 'react-dom/client';