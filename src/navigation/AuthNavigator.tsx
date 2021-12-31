import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
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
