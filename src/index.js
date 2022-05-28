import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import something from somelibrary

import Parent from './components/Parent';


//Lets create A Componet here

//1. React Class Component RCC  JS Class
//2. React Functional Compoent  JS function




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Parent></Parent>
  </React.StrictMode>
);