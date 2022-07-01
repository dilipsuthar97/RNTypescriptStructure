import * as React from 'react';
import Routes from './Routes';
import { store, persistor } from '_redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

export default App;
