import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';            // ✅ Tailwind styles imported
import App from './App.jsx';     // ✅ Your main App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
