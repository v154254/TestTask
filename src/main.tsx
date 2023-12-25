import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
