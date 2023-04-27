import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Css/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import store from "../src/Store/store";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
