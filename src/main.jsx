import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Tailwind/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from "../src/Store/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader/Loader';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
)
