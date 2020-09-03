import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import "../node_modules/bulma/css/bulma.min.css";
import { AppRouter } from './routers/AppRouter';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
