import {useState} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
