import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


// client side rendered app: react (cra)
  // -> database which is Firebase
  // -> react0loading-skeleton
  // -> tailwind

// architecture
  // -> src
    // -> components
    // -> constants
    // -> context
    // -> helpers
    // -> hooks
    // -> lib (firebase is going to live here)
    // -> pages
    // -> services (firebase functions in here)
    // -> styles (tailwind's folder (app/tailwind))