// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { RouterProvider } from 'react-router-dom';
// import { router } from './router';
import './assets/styles/index.scss'
///////////////////////////// React,
import  { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './assets/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
////////////////////
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);