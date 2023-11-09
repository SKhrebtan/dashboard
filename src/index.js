import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { GlobalStyles } from 'GlobalStyles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/dashboard">
          <App />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
