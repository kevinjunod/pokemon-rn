import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './source/redux/storeConfig'
import Index from './source';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Index />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
