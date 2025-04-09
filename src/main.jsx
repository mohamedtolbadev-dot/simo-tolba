import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ContextProvider } from './components/ContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";

// Initialize Sentry only if the environment allows it
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: "https://9e876f5f1e9823f5d7ddc50e1f0dfd1c@o4509123545858048.ingest.us.sentry.io/4509123547430912",
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>,
);
