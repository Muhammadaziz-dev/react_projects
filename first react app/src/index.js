import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './pages/Layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Layout>
    <App />
    </Layout>
  </React.StrictMode>
  </BrowserRouter>
);

