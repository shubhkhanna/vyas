import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import {
  appNavigator,
  forgotPasswordScreen,
  signInScreen,
  signUpScreen,
} from './routes';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={signInScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={signInScreen} component={SignInScreen} />
      <Stack.Screen name={signUpScreen} component={SignUpScreen} />
      <Stack.Screen
        name={forgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={appNavigator} component={AppNavigator} />
    </Stack.Navigator>
  );
}
