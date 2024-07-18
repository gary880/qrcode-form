import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerSW } from 'virtual:pwa-register';
import 'reset-css';

const updateSW = registerSW({
  onNeedRefresh() {
    // handle refresh logic
  },
  onOfflineReady() {
    // handle offline ready logic
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
