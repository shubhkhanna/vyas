import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

// Configure AWS Amplify
Amplify.configure(awsconfig);

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
