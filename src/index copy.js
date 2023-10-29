import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import Bodymain from './Bodymain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Bodymain />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
