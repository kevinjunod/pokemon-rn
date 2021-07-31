import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './source/redux/storeConfig';
import Index from './source/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Index />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
