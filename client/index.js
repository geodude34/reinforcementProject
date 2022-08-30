import React from 'react'
import { createRoot } from 'react-dom/client';

//import './index.css' Note: need to import styles when ready
import App from './App.jsx'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles.scss'


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);