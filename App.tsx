import {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import {getUserData} from './src/helpers/getUserData';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Get user token from AsyncStorage
  useEffect(() => {
    const fetchUser = async () => {
      const value = await getUserData('@token');
      if (value) {
        setIsSignedIn(true);
      }
    };

    fetchUser();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
