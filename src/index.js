import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
